import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface TabComponentProps {
  setActiveTab: (tab: string) => void;
}

const TabComponent: React.FC<TabComponentProps> = ({ setActiveTab }) => {
  const [activeTab, setActiveTabState] = useState("Environment");
  const [womenEmpowermentClicked, setWomenEmpowermentClicked] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallOrMediumScreen = useMediaQuery("(max-width:768px)");

  const tabData = [
    {
      id: "Environment",
      title: "Environment",
      iconSrc:
        require("../../src/assets/gcrs_images/comm_icons/environment.svg").default,
    },
    {
      id: "Sdg",
      title: "SDG",
      iconSrc: require("../../src/assets/gcrs_images/comm_icons/SDG_1.svg").default,
    },
    {
      id: "Supply chain",
      title: "Supply Chain",
      iconSrc:
        require("../../src/assets/gcrs_images/comm_icons/supplychain.svg").default,
    },
    {
      id: "Water footprint",
      title: "Water footprint",
      iconSrc:
        require("../../src/assets/gcrs_images/comm_icons/water_footprint.svg").default,
    },
    {
      id: "Women Empowerment",
      title: "Women Empowerment",
      iconSrc:
        require("../../src/assets/gcrs_images/comm_icons/women_40.svg").default,
    },
  ];

  const carouselRef = useRef<Carousel | null>(null);

  const handleTabClick = (tabId: string) => {
    if (tabId === "Women Empowerment" && !womenEmpowermentClicked) {
      setWomenEmpowermentClicked(true);
    }
    setActiveTab(tabId);
    setActiveTabState(tabId);
  };

  const handleCarouselChange = (index: number) => {
    const selectedTab = tabData[index].id;
    setActiveTab(selectedTab);
    setActiveTabState(selectedTab);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
        pl: isMobile ? 0 : "190px",
      }}
    >
      {isSmallOrMediumScreen ? (
        <Box width="100%" sx={{ position: "relative" }}>
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
              <div key={tab.id}>
                <a
                  href={`#${tab.id}`}
                  data-id={tab.id}
                  className={`tab-link ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => handleTabClick(tab.id)}
                  onTouchStart={() => handleTabClick(tab.id)}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      py: 2,
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor:
                          activeTab === tab.id ? "#bd0324" : "#c9c9c9",
                        borderRadius: "50%",
                        padding: "10px",
                        mb: 1,
                      }}
                    >
                      <img
                        src={tab.iconSrc}
                        alt={tab.title}
                        style={{ height: "25px" }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: activeTab === tab.id ? "#000" : "#333",
                        fontWeight: activeTab === tab.id ? "bold" : "normal",
                      }}
                    >
                      {tab.title}
                    </Typography>
                  </Box>
                </a>
              </div>
            ))}
          </Carousel>
        </Box>
      ) : (
        <Box sx={{ width: "240px", mb: 2 }}>
          {tabData.map((tab) => (
            <Box
              key={tab.id}
              sx={{
                display: "flex",
                alignItems: "center",
                py: 1,
                borderBottom: "1px solid #ccc",
              }}
            >
              <a
                href={`#${tab.id}`}
                data-id={tab.id}
                className={`tab-link ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => handleTabClick(tab.id)}
                onTouchStart={() => handleTabClick(tab.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <Box
                  sx={{
                    backgroundColor:
                      activeTab === tab.id ? "#bd0324" : "#c9c9c9",
                    borderRadius: "50%",
                    padding: "10px",
                    marginRight: "15px",
                  }}
                >
                  <img
                    src={tab.iconSrc}
                    alt={tab.title}
                    style={{ height: "25px" }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: activeTab === tab.id ? "#000" : "#333",
                    fontWeight: activeTab === tab.id ? "bold" : "normal",
                  }}
                >
                  {tab.title}
                </Typography>
              </a>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default TabComponent;
