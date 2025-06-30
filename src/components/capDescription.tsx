// capDescription.tsx
import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Tab {
  id: string;
  title: string;
  iconSrc: string;
}

interface TabComponentProps {
  setActiveTab: (tabId: string) => void;
}

const TabComponent: React.FC<TabComponentProps> = ({ setActiveTab }) => {
  const [activeTab, setActiveTabState] = useState<string>("climate-adaptation");
  const [isSmallOrMediumScreen, setIsSmallOrMediumScreen] = useState<boolean>(window.innerWidth < 768);
  const carouselRef = useRef<any>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const tabData: Tab[] = [
    {
      id: "climate-adaptation",
      title: "Climate action",
      iconSrc: require("../../src/assets/gcrs_images/Capabilities/climateadaption.svg").default,
    },
    {
      id: "policy-and-strategy",
      title: "Program and policy frameworks",
      iconSrc: require("../../src/assets/gcrs_images/Capabilities/policy_strategy.svg").default,
    },
    {
      id: "River Health",
      title: "Water bodies health assessment",
      iconSrc: require("../../src/assets/gcrs_images/Capabilities/riverhealth.svg").default,
    },
    {
      id: "Urban Water",
      title: "Integrated urban water management",
      iconSrc: require("../../src/assets/gcrs_images/Capabilities/urbanwater.svg").default,
    },
    {
      id: "Coastal Management",
      title: "Coastal areas protection and management",
      iconSrc: require("../../src/assets/gcrs_images/Capabilities/coastalmanagement.svg").default,
    },
    {
      id: "Water Resource Management",
      title: "Environmental water management",
      iconSrc: require("../../src/assets/gcrs_images/Capabilities/waterresourcemanagement.svg").default,
    },
    {
      id: "Economics",
      title: "Socio-economic impact assessment",
      iconSrc: require("../../src/assets/gcrs_images/Capabilities/economics.svg").default,
    },
    {
      id: "Cities & Communities",
      title: "Urban spaces and inhabitants",
      iconSrc: require("../../src/assets/gcrs_images/Capabilities/cities.svg").default,
    },
    {
      id: "Evaluation",
      title: "Assessment",
      iconSrc: require("../../src/assets/gcrs_images/Capabilities/evaluation.svg").default,
    },
    {
      id: "Landscape Ecology",
      title: "Environmental ecology",
      iconSrc: require("../../src/assets/gcrs_images/Capabilities/landscapeecology.svg").default,
    },
    {
      id: "Disaster risk, resilience & recovery",
      title: "Disaster risk reduction",
      iconSrc: require("../../src/assets/gcrs_images/Capabilities/disasterrisk.svg").default,
    },
    {
      id: "Accreditation",
      title: "Accreditation",
      iconSrc: require("../../src/assets/gcrs_images/Capabilities/accreditation1.svg").default,
    },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setActiveTabState(tabId);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallOrMediumScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCarouselChange = (index: number) => {
    const selectedTab = tabData[index].id;
    setActiveTab(selectedTab);
    setActiveTabState(selectedTab);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      sx={{ mt: { xs: -4, sm: -6, md: -10 }, pt: 0 }}
    >
      {isMobile ? (
        <Box width="100%" sx={{ position: "relative", minHeight: "400px" }}>
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
              <Box
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  py: 4,
                  px: 2,
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#bd0324",
                    borderRadius: "50%",
                    width: 70,
                    height: 70,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <img src={tab.iconSrc} alt={tab.title} style={{ height: "32px" }} />
                </Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    color: "#000",
                    textAlign: "center",
                    mb: 2,
                  }}
                >
                  {tab.title}
                </Typography>
              </Box>
            ))}
          </Carousel>
        </Box>
      ) : (
        <Box
          sx={{
            width: "90%",
            marginBottom: "30px",
            marginTop: "30px",
            paddingLeft: { xs: "10px", md: "40px" },
            minHeight: "600px",
          }}
        >
          {tabData.map((tab) => (
            <Box
              key={tab.id}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "12px 0",
                borderBottom: "1px solid #ccc",
                cursor: "pointer",
                ":hover": { backgroundColor: "#f9f9f9" },
              }}
              onClick={() => handleTabClick(tab.id)}
            >
              <Box
                sx={{
                  backgroundColor: activeTab === tab.id ? "#bd0324" : "#c9c9c9",
                  borderRadius: "50%",
                  padding: "10px",
                  marginRight: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "45px",
                }}
              >
                <img src={tab.iconSrc} alt={tab.title} style={{ height: "25px" }} />
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "13px", sm: "12px" },
                  fontFamily:
                    "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Noto Sans, Liberation Sans, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
                  color: activeTab === tab.id ? "#000" : "#333",
                  fontWeight: activeTab === tab.id ? "bold" : "normal",
                  maxWidth: "260px",
                }}
              >
                {tab.title}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default TabComponent;
