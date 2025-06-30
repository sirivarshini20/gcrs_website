import React, { useState, useRef } from "react";
import {
  Box,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface RandDdesProps {
  setActiveTab: (tabId: string) => void;
}

const tabData = [
  {
    id: "Knowledge-support",
    title: "Knowledge Support",
    iconSrc:
      require("../../src/assets/gcrs_images/RandD_icons/knowledge_support.svg")
        .default,
  },
  {
    id: "Research-partnerships",
    title: "Research Partnerships",
    iconSrc:
      require("../../src/assets/gcrs_images/RandD_icons/research_partnerships.svg")
        .default,
  },
  {
    id: "Research-projects",
    title: "Research Projects",
    iconSrc:
      require("../../src/assets/gcrs_images/RandD_icons/research_projects.svg")
        .default,
  },
  {
    id: "Research-publications",
    title: "Research Publications",
    iconSrc:
      require("../../src/assets/gcrs_images/RandD_icons/research_publications.svg")
        .default,
  },
];

const RandDdes: React.FC<RandDdesProps> = ({ setActiveTab }) => {
  const [activeTabState, setActiveTabState] = useState("Knowledge-support");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const carouselRef = useRef<Carousel | null>(null);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setActiveTabState(tabId);
  };

  const handleCarouselChange = (index: number) => {
    const selectedTab = tabData[index].id;
    handleTabClick(selectedTab);
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
        <Box width="100%" sx={{ position: "relative" }}>
          <Carousel
            showArrows
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            selectedItem={tabData.findIndex((tab) => tab.id === activeTabState)}
            onChange={handleCarouselChange}
            ref={carouselRef}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
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
            renderArrowNext={(onClickHandler, hasNext, label) =>
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
                  textAlign: "center",
                  p: 2,
                  mt: 1,
                  cursor: "pointer",
                  textDecoration: "none", // Remove underline
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    mx: "auto",
                    bgcolor:
                      activeTabState === tab.id ? "#bd0324" : "#c9c9c9",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={tab.iconSrc}
                    alt={tab.title}
                    width={28}
                    height={28}
                  />
                </Box>
                <Typography
                  mt={2}
                  fontSize={13}
                  color="text.primary"
                  sx={{ textDecoration: "none" }}
                >
                  {tab.title}
                </Typography>
              </Box>
            ))}
          </Carousel>
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          width="100%"
          maxWidth="250px"
          gap={2}
          sx={{ pl: 2, pt: 0 }}
        >
          {tabData.map((tab) => (
            <Box
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              display="flex"
              alignItems="center"
              gap={2}
              width="100%"
              sx={{
                cursor: "pointer",
                borderBottom: "1px solid #e0e0e0",
                pb: 2,
                textDecoration: "none", // Remove underline
              }}
            >
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  bgcolor:
                    activeTabState === tab.id ? "#bd0324" : "#c9c9c9",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={tab.iconSrc}
                  alt={tab.title}
                  width={28}
                  height={28}
                />
              </Box>
              <Typography
                fontSize={13}
                fontWeight={activeTabState === tab.id ? "bold" : "normal"}
                color="text.primary"
                sx={{ textDecoration: "none" }}
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

export default RandDdes;