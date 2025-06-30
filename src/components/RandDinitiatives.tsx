import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import RandDdes from "./RandDdes";
import RandD from "./RandD";

const RandDintiatives: React.FC = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [activeTab, setActiveTab] = useState("Knowledge-support");

  return (
    <>
      <Box
        sx={{
          backgroundImage:
            'url("https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/R&D2.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: isMobile ? "70vh" : isTablet ? "80vh" : "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
            alignItems: "start",
            textAlign: "start",
            width: "100%",
            px: 2,
          }}
        >
          {!isTablet && (
            <Typography
              sx={{
                marginTop: "190px",
                fontSize: "15px",
                transform: "rotate(-90deg)",
                color: "#fff",
                marginRight: "140px",
              }}
            >
              SCROLL
            </Typography>
          )}

          <Box
            sx={{
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: isTablet ? "center" : "flex-start",
              ml: isTablet ? 0 : 4,
              px: 2,
              width: "100%",
              maxWidth: "900px",
              textAlign: isTablet ? "center" : "left",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: isMobile ? "13px" : isTablet ? "15px" : "20px", color: "#fcb22f" }}
            >
              R&D Program
            </Typography>
            <Typography
              sx={{
                fontSize: isMobile ? "18px" : isTablet ? "24px" : "40px",
                fontWeight: "bold",
                color: "#fff",
                px: isTablet ? 1 : 0,
              }}
            >
              Our research and development program positions us as vital
              intermediaries connecting the latest research findings with our
              clients
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box id="scroll-section" sx={{ px: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: isTablet ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isTablet ? "center" : "flex-start",
            gap: 2,
            mt: { xs: 6, sm: 8, md: 10 },
          }}
        >
          <Box sx={{ mt: 4, width: "70%", maxWidth: isTablet ? "100%" : "50%" }}>
            <RandDdes setActiveTab={setActiveTab} />
          </Box>

          <Box
            sx={{
              width: "100%",
              maxWidth: isTablet ? "100%" : "50%",
              mt: isTablet ? 4 : 0,
              textAlign: isTablet ? "center" : "left",
            }}
          >
            <RandD activeTab={activeTab} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RandDintiatives;