import React, { useRef, useEffect } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Map, View, MapBrowserEvent } from "ol";
import { OSM, Vector as VectorSource } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { GeoJSON } from "ol/format";
import "ol/ol.css";
import Overlay from "ol/Overlay";
import { Style, Icon } from "ol/style";
import { fromLonLat } from "ol/proj";
import { FeatureLike } from "ol/Feature";
import { StyleLike } from "ol/style/Style";
import { Feature } from "ol";

interface OpenLayersMapProps {
  showBar: boolean;
  selectedOptions: string[];
  checkCategory: {
    [key: string]: {
      category: string;
      path: string;
    };
  };
}

interface FeatureProperties {
  category?: string;
  project_ty?: string;
  client_name?: string;
  location?: string;
  project_name?: string;
}

const OpenLayersMap: React.FC<OpenLayersMapProps> = ({ 
  showBar, 
  selectedOptions, 
  checkCategory 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map | null>(null);
  const vectorLayersRef = useRef<{ [key: string]: VectorLayer<VectorSource> }>({});
  const pointDataRef = useRef<{ [key: string]: Overlay }>({});
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && !mapRef.current) {
      mapRef.current = new Map({
        layers: [
          new TileLayer({
            source: new OSM({
              url:
                "https://server.arcgisonline.com/ArcGIS/rest/services/" +
                "World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
            }),
          }),
        ],
        target: ref.current,
        view: new View({
          center: fromLonLat([73.87, 23.89]),
          zoom: 4.7,
        }),
      });

      const mapElement = mapRef.current.getTargetElement();
      if (mapElement) {
        mapElement.addEventListener("wheel", handleWheelEvent);
      }

      window.addEventListener("keydown", handleKeyDownEvent);
      window.addEventListener("keyup", handleKeyUpEvent);
    } else if (mapRef.current) {
      mapRef.current.getView().animate({
        center: fromLonLat([73.87, 23.89]),
        zoom: 4.7,
        duration: 2000,
      });
    }

    return () => {
      if (mapRef.current) {
        const mapElement = mapRef.current.getTargetElement();
        if (mapElement) {
          mapElement.removeEventListener("wheel", handleWheelEvent);
        }
      }
      window.removeEventListener("keydown", handleKeyDownEvent);
      window.removeEventListener("keyup", handleKeyUpEvent);
    };
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      const mapContent = mapRef.current.getTargetElement();
      if (mapContent) {
        const sidebarWidth = !showBar ? 0 : 0;
        mapContent.style.marginLeft = `${sidebarWidth}px`;
      }
    }
  }, [showBar]);

  useEffect(() => {
    if (mapRef.current) {
      selectedOptions.forEach((selectedOption) => {
        if (!vectorLayersRef.current[selectedOption]) {
          const categoryInfo = checkCategory[selectedOption];

          if (categoryInfo) {
            const { category, path } = categoryInfo;

            // Create style function with proper typing
            const styleFunction: StyleLike = (feature: FeatureLike) => {
              const featureCategory = (feature as Feature).get("project_ty");
              if (featureCategory === category) {
                return new Style({
                  image: new Icon({
                    src: path,
                    scale: 1,
                  }),
                });
              }
              // Return undefined to avoid returning null, which is not allowed in StyleLike
              return undefined;
            };

            const vectorLayer = new VectorLayer({
              source: new VectorSource({
                format: new GeoJSON(),
                url: "https://gcrs.co.in/geoserver/iar_gcrs/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=iar_gcrs%3Aiarandchr&outputFormat=application%2Fjson",
              }),
              style: styleFunction,
            });

            vectorLayersRef.current[selectedOption] = vectorLayer;
            if (mapRef.current) {
              mapRef.current.addLayer(vectorLayer);

              const popupElement = document.createElement("div");
              const pointData = new Overlay({
                element: popupElement,
                positioning: "bottom-center",
                offset: [0, -15],
              });
              pointDataRef.current[selectedOption] = pointData;
              mapRef.current.addOverlay(pointData);

              mapRef.current.on("pointermove", (event: MapBrowserEvent<any>) => {
                if (!mapRef.current) return;

                const feature = mapRef.current.forEachFeatureAtPixel(
                  event.pixel,
                  (feature: FeatureLike) => feature
                );

                if (feature && (feature as Feature).get("project_ty") === category) {
                  const properties: FeatureProperties = (feature as Feature).getProperties();
                  const popupContent = `
                    <div style="max-width: 30vw; background-color: white; padding: 8px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
                      <strong style="font-weight: bold;">Category:</strong> ${properties.category || 'N/A'}<br/>
                      <strong style="font-weight: bold;">Project Type:</strong> ${properties.project_ty || 'N/A'}<br/>
                      <strong style="font-weight: bold;">Client Name:</strong> ${properties.client_name || 'N/A'}<br/>
                      <strong style="font-weight: bold;">Location:</strong> ${properties.location || 'N/A'}<br/>
                      <strong style="font-weight: bold;">Project Name:</strong> ${properties.project_name || 'N/A'}
                    </div>`;

                  const overlayElement = pointDataRef.current[selectedOption].getElement();
                  if (overlayElement) {
                    overlayElement.innerHTML = popupContent;
                  }
                  pointDataRef.current[selectedOption].setPosition(event.coordinate);
                } else {
                  pointDataRef.current[selectedOption].setPosition(undefined);
                }
              });
            }
          }
        }
      });
    }
  }, [selectedOptions, checkCategory]);

  useEffect(() => {
    Object.keys(vectorLayersRef.current).forEach((key) => {
      const layer = vectorLayersRef.current[key];
      const isVisible = selectedOptions.includes(key);
      layer.setVisible(isVisible);
    });
  }, [selectedOptions]);

  const handleKeyDownEvent = (event: KeyboardEvent) => {
    if (event.ctrlKey && mapRef.current) {
      const mapContent = mapRef.current.getTargetElement();
      if (mapContent) {
        mapContent.style.opacity = "1";
        mapContent.style.pointerEvents = "auto";
      }
      if (overlayRef.current) {
        overlayRef.current.style.display = "none";
      }
    }
  };

  const handleKeyUpEvent = () => {
    if (mapRef.current) {
      const mapContent = mapRef.current.getTargetElement();
      if (mapContent) {
        mapContent.style.opacity = "0.7";
        mapContent.style.pointerEvents = "none";
      }
    }
    if (overlayRef.current) {
      overlayRef.current.style.display = "block";
    }
  };

  const handleWheelEvent = (event: WheelEvent) => {
    if (!(event as any).ctrlKey) {
      event.preventDefault();
      if (overlayRef.current) {
        overlayRef.current.style.display = "block";
      }
    } else {
      if (overlayRef.current) {
        overlayRef.current.style.display = "none";
      }
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        top: 0,
        width: "100%",
        height: "80vh",
        overflowX: "hidden",
      }}
    >
      {showBar && (
        <Box
          sx={{
            // Add sidebar styling here if needed
          }}
        />
      )}
      <Box
        ref={ref}
        sx={{
          position: "absolute",
          top: 0,
          height: "100%",
          width: "100vw",
          zIndex: 0,
          opacity: 0.7,
          pointerEvents: "none",
          transition: "width 2s, margin-left 0.5s",
        }}
      />
      <Box
        ref={overlayRef}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
          display: "block",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 3,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              fontWeight: 600,
            }}
          >
            Use Ctrl + scroll to zoom the map
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default OpenLayersMap;
