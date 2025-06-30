import React, { useRef, useEffect, useState, useMemo } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Typography,
  Card,
  CardContent,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Box,
  Grid,
  IconButton,
  Paper,
  CardMedia,
  Button,
  Fade,
  Grow,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Style, Icon as OlIcon, Fill, Stroke } from 'ol/style';
import Overlay from 'ol/Overlay';
import 'ol/ol.css';
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ForestIcon from "@mui/icons-material/Forest";
import WavesIcon from "@mui/icons-material/Waves";
import AssignmentIcon from "@mui/icons-material/Assignment";

// Create MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#bd0324',
    },
    secondary: {
      main: '#fcb22f',
    },
    success: {
      main: '#629927',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
      },
    },
  },
});

// Type definitions
interface CategoryInfo {
  category: string;
  color: string;
  icon: JSX.Element;
}

interface SidebarDashboardProps {
  handleCheckboxChange: (updatedCheckboxes: Record<string, boolean>) => void;
  checkCategory: Record<string, CategoryInfo>;
  selectedBoxes: Record<string, boolean>;
  className?: string;
}

interface InteractiveMapProps {
  selectedOptions: string[];
  checkCategory: Record<string, { category: string; color: string; icon: JSX.Element }>;
}

interface LocationData {
  id: number;
  name: string;
  lat: number;
  lng: number;
  category: string;
  icon: JSX.Element;
}

// Sample locations with icons for demonstration
const sampleLocations: LocationData[] = [
  { id: 1, name: "Mumbai Project", lat: 19.0760, lng: 72.8777, category: "Risk", icon: <WarningAmberIcon color="warning" /> },
  { id: 2, name: "Delhi Initiative", lat: 28.6139, lng: 77.2090, category: "Water", icon: <WaterDropIcon color="primary" /> },
  { id: 3, name: "Bangalore Center", lat: 12.9716, lng: 77.5946, category: "Carbon", icon: <ForestIcon color="success" /> },
  { id: 4, name: "Chennai Hub", lat: 13.0827, lng: 80.2707, category: "Groundwater", icon: <WavesIcon color="info" /> },
  { id: 5, name: "Kolkata Office", lat: 22.5726, lng: 88.3639, category: "Carbonstock", icon: <AssignmentIcon color="secondary" /> },
  { id: 6, name: "Hyderabad Branch", lat: 17.3850, lng: 78.4867, category: "Risk", icon: <WarningAmberIcon color="warning" /> },
  { id: 7, name: "Pune Center", lat: 18.5204, lng: 73.8567, category: "Water", icon: <WaterDropIcon color="primary" /> },
];

// Type for project image items with text and link
interface ProjectImageItem {
  src: string;
  text: string;
  link: string;
}

// Mock data for project images
const optionToImagesMap: Record<string, ProjectImageItem[] | string[]> = {
  option1: [
    {
      src: "https://gcrs.co.in/static/media/AmritaTulasi.8511bc13f066d364ae57.jpg",
      text: "Diversity of Tulasi Plant in India",
      link: "https://storymaps.arcgis.com/stories/9744528dc7a94cc79decea8617f93962"
    },
  ],
  option2: [
    "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/proects/Rectangle%20125.png",
    "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/proects/Rectangle%20126.png",
  ],
  option3: [
    "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/proects/Rectangle%20127.png",
    "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/proects/Rectangle%20128.png",
  ],
  option4: [
    "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/proects/Rectangle%20130.png",
    "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/proects/Rectangle%20131.png",
  ],
  option5: [
    "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/proects/Rectangle%20133.png",
    "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/proects/Rectangle%20131.png",
  ],
  option6: [
    "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/proects/Rectangle%20130.png",
    "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/proects/Rectangle%20132.png",
  ],
  option7: [
    "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/proects/Rectangle%20125.png",
    "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/proects/Rectangle%20126.png",
  ],
};

// Interactive Map Component using OpenLayers
const InteractiveMap: React.FC<InteractiveMapProps> = ({ selectedOptions, checkCategory }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<Map | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<Overlay | null>(null);

  const filteredLocations = sampleLocations.filter(location => 
    selectedOptions.includes(location.category)
  );

  const createMarkerStyle = (icon: JSX.Element): Style => {
    return new Style({
      image: new OlIcon({
        src: `data:image/svg+xml;base64,${btoa(
          `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">${icon}</svg>`
        )}`,
      }),
    });
  };

  useEffect(() => {
    if (!mapRef.current) return;

    // Create popup overlay
    const popupOverlay = new Overlay({
      element: popupRef.current!,
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    });

    overlayRef.current = popupOverlay;

    // Initialize the map
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([78.9629, 20.5937]), // Center of India
        zoom: 5,
      }),
      overlays: [popupOverlay],
    });

    mapInstanceRef.current = map;

    // Handle map clicks to close popup
    map.on('singleclick', (evt) => {
      const feature = map.forEachFeatureAtPixel(evt.pixel, (feature) => feature);
      if (!feature) {
        popupOverlay.setPosition(undefined);
      }
    });

    return () => {
      map.setTarget(undefined);
    };
  }, []);

  useEffect(() => {
    if (!mapInstanceRef.current) return;

    // Remove existing vector layers
    const layersToRemove = mapInstanceRef.current.getLayers().getArray().filter(
      layer => layer instanceof VectorLayer
    );
    layersToRemove.forEach(layer => {
      mapInstanceRef.current!.removeLayer(layer);
    });

    // Create features for filtered locations
    const features = filteredLocations.map((location) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([location.lng, location.lat])),
        name: location.name,
        category: location.category,
        categoryInfo: checkCategory[location.category],
      });

      const categoryInfo = checkCategory[location.category];
      feature.setStyle(createMarkerStyle(location.icon));

      return feature;
    });

    // Create vector source and layer
    const vectorSource = new VectorSource({
      features: features,
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    mapInstanceRef.current.addLayer(vectorLayer);

    // Handle feature clicks for popup
    mapInstanceRef.current.on('singleclick', (evt) => {
      const feature = mapInstanceRef.current!.forEachFeatureAtPixel(evt.pixel, (feature) => feature);
      
      if (feature && overlayRef.current && popupRef.current) {
        const coordinates = (feature.getGeometry() as Point).getCoordinates();
        const name = feature.get('name');
        const categoryInfo = feature.get('categoryInfo');
        
        // Update popup content
        popupRef.current.innerHTML = `
          <div class="bg-white p-3 rounded-lg shadow-lg border min-w-[150px] relative">
            <div class="text-center">
              <h3 class="font-bold text-sm text-gray-800">${name}</h3>
              <p class="text-xs text-gray-600 mt-1">${categoryInfo?.category || ''}</p>
            </div>
            <button class="absolute top-1 right-1 text-gray-400 hover:text-gray-600 text-lg leading-none" onclick="this.parentElement.parentElement.style.display='none'">×</button>
          </div>
        `;
        
        overlayRef.current.setPosition(coordinates);
      }
    });

  }, [filteredLocations, checkCategory]);

  return (
    <Paper
      sx={{
        height: 500,
        width: '100%',
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        boxShadow: 3,
      }}
    >
      <Box ref={mapRef} sx={{ width: '100%', height: '100%' }} />
      <Box ref={popupRef} sx={{ position: 'absolute', zIndex: 10 }} />
    </Paper>
  );
};

const SidebarDashboard: React.FC<SidebarDashboardProps> = ({ 
  handleCheckboxChange, 
  checkCategory,
  selectedBoxes,
}) => {

  // Determine if all categories are selected
  const selectAll = Object.values(selectedBoxes).every(Boolean);

  // Handle select all/unselect all
  const handleSelectAll = () => {
    const newValue = !selectAll;
    const updated = Object.keys(selectedBoxes).reduce((acc, key) => {
      acc[key] = newValue;
      return acc;
    }, {} as Record<string, boolean>);
    handleCheckboxChange(updated);
  };

  const handleChange = (category: string) => {
    const updated = { ...selectedBoxes, [category]: !selectedBoxes[category] };
    handleCheckboxChange(updated);
  };

  return (
    <Card sx={{ minWidth: 280, height: 'fit-content' }}>
      <CardContent>
        <Box sx={{ px: 2, pt: 6 }}>
      {/* Select All / Unselect All Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSelectAll}
        sx={{ mb: 2 }}
      >
        {selectAll ? "Unselect All" : "Select All"}
      </Button>

      {/* Project Categories Section */}
        <FormGroup>
          {Object.entries(checkCategory).map(([key, value]) => (
            <FormControlLabel
              key={key}
              control={
                <Checkbox
                  checked={selectedBoxes[key]}
                  onChange={() => handleChange(key)}
                  sx={{
                    color: value.color,
                    '&.Mui-checked': {
                      color: value.color,
                    },
                  }}
                />
              }
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ mr: 1 }}>{value.icon}</Box>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {value.category}
                  </Typography>
                </Box>
              }
              sx={{ mb: 1 }}
            />
          ))}
        </FormGroup>
      </Box>
      </CardContent>
    </Card>
  );
};

const Projects: React.FC = () => {
  const [showBar, setShowbar] = useState<boolean>(true);
  const [selectedBoxes, setSelectedBoxes] = useState<Record<string, boolean>>({
    Risk: true,
    Water: true,
    Carbon: true,
    Groundwater: true,
    Carbonstock: true,
  });
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("option1");

  const handleCheckboxChange = (updatedCheckboxes: Record<string, boolean>) => {
    setSelectedBoxes(updatedCheckboxes);
    const selectedCategories = Object.keys(updatedCheckboxes).filter(
      (category) => updatedCheckboxes[category]
    );
    setSelectedOptions(selectedCategories);
  };

  const checkCategory = useMemo<Record<string, CategoryInfo>>(() => ({
    Risk: { 
      category: "Risk Assessment", 
      color: "#f44336", 
      icon: <WarningAmberIcon color="warning" />
    },
    Water: { 
      category: "Water Stewardship", 
      color: "#2196f3", 
      icon: <WaterDropIcon color="primary" />
    },
    Carbon: { 
      category: "Carbon Offsetting", 
      color: "#4caf50", 
      icon: <ForestIcon color="success" />
    },
    Groundwater: { 
      category: "Groundwater", 
      color: "#ff9800", 
      icon: <WavesIcon color="info" />
    },
    Carbonstock: { 
      category: "Carbon Stock Assessment", 
      color: "#9c27b0", 
      icon: <AssignmentIcon color="secondary" />
    },
  }), []);

  useEffect(() => {
    const initialSelectedCategories = Object.keys(selectedBoxes).filter(
      (category) => selectedBoxes[category]
    );
    setSelectedOptions(initialSelectedCategories);
  }, [selectedBoxes]);

  const handleOptionChange = (value: string) => {
    setSelectedOption(value === selectedOption ? "" : value);
  };

  const isOptionSelected = (option: string): boolean => option === selectedOption;

  const handleImageClick = (url: string) => {
    window.open(url, '_blank');
  };

  const projectOptions = [
    { value: "option1", label: "Landscape Restoration Studies" },
    { value: "option2", label: "Climate & Natural Hazard Risk Analytics" },
    { value: "option3", label: "Environmental Impact & Sustainability Analytics" },
    { value: "option4", label: "Ground Water Impact Assessment" },
    { value: "option5", label: "GHG Emission & Environmental Social Governance" },
    { value: "option6", label: "Geospatial Tech Integrations" },
    { value: "option7", label: "Water & Land Risk & Sustainability" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh'}}>
        {/* Hero Section */}
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            position: 'relative',
            backgroundImage: 'url("https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/project_bg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              zIndex: 1,
            },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              pl: { xs: 2, md: 4 },
              color: 'white',
              mt: { xs: 3, md: 12 },
            }}
          >
            <Fade in timeout={1000}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ 
                    color: 'orange', 
                    mb: 2,
                    ml:{xs:23,md:-20},
                    mt:{xs:0,md:-20},
                    pl: { xs: 0, md: 40 },
                    textAlign: { xs: 'left', md: 'left' },
                    fontSize: { xs: '0.875rem', md: '1.25rem' }
                  }}
                >
                  Projects
                </Typography>
                <Typography
  variant="h1"
  sx={{
    fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2.5rem' },
    fontWeight: 'bold',
    ml: { xs: 0, md: 20 },
    textAlign: { xs: 'center', md: 'left' },
    width: { xs: '90%', sm: '100%', md: '80%' },
    lineHeight: { xs: 1.4, md: 1.5 },
    mx: { xs: 'auto', md: 0 },
     pl: { xs: 0, md: 20 }, // center horizontally on small screens
    color: 'white', // assuming the text is on a dark background
  }}
>
  Building on a deep knowledge of our industry we deliver intelligent insights and practical solutions
</Typography>

              </Box>
            </Fade>
          </Box>
        </Box>

        {/* Project Description Section */}
        <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: 'white' }}>
          <Container maxWidth="lg">
            <Grow in timeout={1500}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  mt: { xs: 2, md: 6 },
                  ml: { xs: 2, md: -20 },
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 'bold',
                  mb: { xs: 3, md: 1 },
                  width: { xs: '90%', md: '100%' },
                  textTransform: 'capitalize',
                  color: 'text.primary',
                }}
              >
                Drawing from profound industry expertise, we provide both astute insights and actionable solutions.
              </Typography>
            </Grow>
          </Container>
        </Box>

        {/* Project Content Section - Radio Options and Images Side by Side */}
<Box sx={{  py: -8 }}>
  <Container maxWidth="xl">
    <Grid container spacing={4} alignItems="left">
      {/* Radio Options - Left Side */}
      <Grid item xs={12} lg={4}>
        {/* <Card sx={{ bgcolor: 'grey.50' }}> */}
          <CardContent>
            {/* <Typography variant="h6" component="h3" sx={{ mb: 3, color: 'text.primary', fontWeight: 'bold' }}>
              Project Categories
            </Typography> */}
            <RadioGroup
              value={selectedOption}
              onChange={(e) => handleOptionChange(e.target.value)}
            >
              {projectOptions.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={
                    <Radio
                      sx={{
                        color: 'black',
                        '&.Mui-checked': {
                          color: 'blue',
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      sx={{
                        color: isOptionSelected(option.value) ? 'black' : 'black',
                        fontWeight: isOptionSelected(option.value) ? 600 : 400,
                        lineHeight: 1.5,
                        transition: 'color 0.2s ease',
                        '&:hover': {
                          color: 'black',
                        },
                      }}
                    >
                      {option.label}
                    </Typography>
                  }
                  sx={{ mb: 4, alignItems: 'left' }}
                />
              ))}
            </RadioGroup>
          </CardContent>
        {/* </Card> */}
      </Grid>

      {/* Image Gallery - Right Side */}
<Grid item xs={12} lg={8}>
  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
    {Array.isArray(optionToImagesMap[selectedOption]) &&
      (optionToImagesMap[selectedOption] as any[]).map((item, index) => {
        // If item is an object with src/text/link, render with overlay and link
        if (typeof item === 'object' && item !== null && 'src' in item && 'text' in item && 'link' in item) {
          return (
            <Card
              key={index}
              sx={{
                position: 'relative',
                width: '57%',  // Adjust width for side by side images
                height: 650,  // Adjust height as needed
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                '&:hover':+ {
                  transform: 'scale(1.05)',
                },
                mb: 2, ml: 10, borderRadius: '0px', // Margin bottom for spacing
              }}
            >
              <CardMedia
                component="img"
                height="100%"
                image={item.src}
                alt={`Image ${index + 1} for ${selectedOption}`}
                sx={{ objectFit: 'cover' }}
              />
              {/* Overlay for text and link */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  bgcolor: 'rgba(0, 0, 0, 0.5)', // Background color for text visibility
                  color: 'white',
                  textAlign: 'center',
                  p: 2,
                  opacity: 0, // Default opacity is 0 (hidden)
                  visibility: 'hidden', // Default visibility is hidden
                  transition: 'opacity 0.3s ease, visibility 0.3s ease', // Smooth transition for opacity and visibility
                  '&:hover': {
                    opacity: 1, // Make visible when hovered
                    visibility: 'visible', // Make visible when hovered
                  },
                }}
              >
                <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 'bold' }}>
                  {item.text}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ textDecoration: 'underline', cursor: 'pointer' }}
                  onClick={() => window.open(item.link, '_blank')}
                >
                  More details
                </Typography>
              </Box>
            </Card>
          );
        }
        // Otherwise, treat as a string (image URL)
        if (typeof item === 'string') {
          return (
            <Card
              key={index}
              sx={{
                position: 'relative',
                width: '49%',  // Adjust width for side by side images
                height: 600,  // Adjust height as needed
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                mb: 2,  // Margin bottom for spacing
                borderRadius: '0px',  // Added border radius for rounded corners
              }}
            >
              <CardMedia
                component="img"
                height="100%"
                image={item}
                alt={`Image ${index + 1} for ${selectedOption}`}
                sx={{ objectFit: 'cover' }}
              />
              {/* Overlay for text and link */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  bgcolor: 'rgba(0, 0, 0, 0.5)', // Background color for text visibility
                  color: 'white',
                  textAlign: 'center',
                  p: 12,
                  opacity: 0, // Default opacity is 0 (hidden)
                  visibility: 'hidden', // Default visibility is hidden
                  transition: 'opacity 0.3s ease, visibility 0.3s ease', // Smooth transition for opacity and visibility
                  '&:hover': {
                    opacity: 1, // Make visible when hovered
                    visibility: 'visible', // Make visible when hovered
                  },
                }}
              >
                <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 'bold' }}>
                  {item}
                </Typography>
                {/* No link here as it's just an image URL */}
              </Box>
            </Card>
          );
        }
        return null;
      })}
  </Box>
</Grid>

            </Grid>
  </Container>
</Box>
 <Box sx={{ py: 4, px: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2 }}>
        <IconButton onClick={() => setShowbar(!showBar)}>
          {showBar ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "#bd0324",
            flex: 1,
          }}
        >
          our presence
        </Typography>
        <Box sx={{ width: 48 }} /> {/* Spacer */}
      </Box>

      <Box sx={{ display: "flex", mt: 2 }}>
        {showBar && (
          <Fade in timeout={300}>
            <Box sx={{ minWidth: 220, px: 2 }}>
              <SidebarDashboard
                handleCheckboxChange={handleCheckboxChange}
                checkCategory={checkCategory}
                selectedBoxes={selectedBoxes}
              />
            </Box>
          </Fade>
        )}

        <Box sx={{ flex: 1 }}>
          <InteractiveMap
            selectedOptions={selectedOptions}
            checkCategory={checkCategory}
          />
        </Box>
      </Box>
    </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Projects; 
