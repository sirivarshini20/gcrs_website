import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Image: React.FC = () => {
  const [selectedItemType, setSelectedItemType] = useState<"theme" | "product">("theme");
  const [activeTab, setActiveTab] = useState<string>("theme");

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const carouselRef = useRef<any>(null);

  const handleItemClick = (type: "theme" | "product") => {
    setSelectedItemType(type);
    setActiveTab(type);
  };

  const toggleSelectedItem = () => {
    const next = selectedItemType === "theme" ? "product" : "theme";
    setSelectedItemType(next);
    setActiveTab(next);
  };

  const productImage = "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/Group%2021.png";
  const themeImage = "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/Products_1.png";

  const tabData = [
    { id: "theme", label: "Theme" },
    { id: "product", label: "Solutions" },
  ];

  const handleCarouselChange = (index: number) => {
    const selected = tabData[index]?.id;
    if (selected) {
      setSelectedItemType(selected as "theme" | "product");
      setActiveTab(selected);
    }
  };

  return (
    <Box
      sx={{
        width: { xs: "90%", md: "75%" },
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: 2, md: 4 },
      }}
    >
      {/* Hide progress bar on mobile */}
      {!isMobile && (
        <Box
          sx={{
            width: "100%",
            height: "6px",
            backgroundColor: "#ddd",
            margin: "20px 0",
            display: "flex",
            position: "relative",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: "100%",
              backgroundColor: selectedItemType === "theme" ? "#bd0324" : "#ddd",
              transition: "background-color 0.3s ease-in-out",
            }}
            onClick={toggleSelectedItem}
          />
          <Box
            sx={{
              width: "50%",
              height: "100%",
              backgroundColor: selectedItemType === "product" ? "#bd0324" : "#ddd",
              transition: "background-color 0.3s ease-in-out",
            }}
            onClick={toggleSelectedItem}
          />
        </Box>
      )}

      {/* Hide "Themes" and "Solutions" on mobile */}
      {!isMobile && (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: "400px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         <Button
    disableRipple
    disableElevation
    onClick={() => handleItemClick('theme')}
    sx={{
      fontWeight: 'bold',
      fontSize: '25px',
      color: 'black',
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&:active': {
        backgroundColor: 'transparent',
      },
    }}
  >
    Themes
  </Button>

 <Button
  disableRipple
  disableElevation
  onClick={() => handleItemClick('product')}
  sx={{
    fontWeight: 'bold',
    fontSize: '25px',
    color: 'black',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'transparent !important',
    },
    '&:active': {
      backgroundColor: 'transparent !important',
      boxShadow: 'none',
    },
    '&:focus': {
      backgroundColor: 'transparent !important',
      outline: 'none',
      boxShadow: 'none',
    },
    '&:focus-visible': {
      backgroundColor: 'transparent !important',
    },
  }}
>
  Solutions
</Button>

        </Box>
      )}

      <Box sx={{ marginTop: 2 }}>
        {selectedItemType === "theme" && (
          <Typography variant="body1">
            {/* Theme description here */}
          </Typography>
        )}
        {selectedItemType === "product" && (
          <Typography variant="body1">
            {/* Product description here */}
          </Typography>
        )}
      </Box>

      {/* Show carousel only on mobile */}
      {isMobile && (
        <Box width="100%" sx={{ position: "relative", marginTop: 4 }}>
          <Carousel
            showArrows
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            selectedItem={tabData.findIndex((tab) => tab.id === activeTab)}
            onChange={handleCarouselChange}
            ref={carouselRef}
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <Box
                  onClick={onClickHandler}
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    top: "50%",
                    left: 5,
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    background: "#ffffffaa",
                    borderRadius: "50%",
                    width: 32,
                    height: 32,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  ❮
                </Box>
              )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <Box
                  onClick={onClickHandler}
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    top: "50%",
                    right: 5,
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    background: "#ffffffaa",
                    borderRadius: "50%",
                    width: 32,
                    height: 32,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  ❯
                </Box>
              )
            }
          >
            {tabData.map((tab) => (
              <Box key={tab.id} p={2}>
                <Typography variant="h6" textAlign="center" fontWeight="bold">
  {tab.label}
</Typography>

              </Box>
            ))}
          </Carousel>
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <Box
  sx={{
    width:
      selectedItemType === "product"
        ? { xs: "100%", md: "300%", lg: "900%" }
        : { xs: "100%", md: "50%" ,lg:-100},
    height: "auto",
    paddingBottom: "50px",
    ml: { xs: 0, md: "0px",lg:2 },
  }}
>
  <img
    src={selectedItemType === "product" ? themeImage : productImage}
    alt="Selected Item"
    style={{
      width: "100%",
      height: "auto",
      maxWidth: selectedItemType === "product" ? "1300px" : "400px",
    }}
  />
</Box>



        {selectedItemType === "theme" && (
          <div className="text-content" style={{ color: "black", maxWidth: "600px", padding: "70px" }}>
            {[
              {
                img: "climateandnaturalhazard.svg",
                text: "Climate & Natural Hazard Risk Analytics",
              },
              {
                img: "environmentalimpact.svg",
                text: "Environmental Impact & Sustainability Analytics",
              },
              {
                img: "groundwaterimpact.svg",
                text: "Groundwater Impact Assessment",
              },
              {
                img: "GHGemission.svg",
                text: "GHG Emission & Environmental Social Governance",
              },
              {
                img: "geospatial.svg",
                text: "Geospatial Tech Integrations",
              },
            ].map((item, idx) => (
              <div
                className="text-line"
                key={idx}
                style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}
              >
                <img
                  src={`https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/Home_icons/${item.img}`}
                  style={{ height: "30px", marginRight: "10px" }}
                  alt=""
                />
                <h1 className="text-line2" style={{ fontSize: "20px", fontWeight: "normal" }}>
                  {item.text}
                </h1>
              </div>
            ))}
          </div>
        )}
      </Box>
    </Box>
  );
};

export default Image;
