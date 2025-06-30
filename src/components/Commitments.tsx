import React, { useState, useEffect } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import TabComponent from "./commDescription";
import Comma from "./Comma";
import { useLocation } from "react-router-dom";

const Commitments: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Environment");
  const location = useLocation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get("tab");
    if (tabParam === "womenEmpowerment") {
      setActiveTab("Women Empowerment");
    }
  }, [location.search]);

  return (
    <>
      {/* HERO SECTION */}
      <Box
        sx={{
          backgroundImage: "url('https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/commitments.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: isMobile ? "80vh" : "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          px: 2,
        }}
      >
        {/* SCROLL LABEL */}
        {!isMobile && (
  <a href="#scroll-section" style={{ textDecoration: "none" }}>
    <Typography
      sx={{
        fontSize: "12px",
        transform: "rotate(-90deg)",
        color: "#fff",
        position: "absolute",
        left: 0,
        top: "120px",
      }}
    >
      SCROLL
    </Typography>
  </a>
)}


        {/* TEXT CONTENT */}
        <Box sx={{ color: "#fff", width: "100%", maxWidth: "900px", mt: 4 }}>
          <Typography
            variant="h4"
            sx={{
              color: "orange",
              fontSize: isMobile ? "18px" : "24px",
              textAlign: isMobile?"center":"left",
            }}
          >
            Commitments
          </Typography>

          <Typography
            sx={{
              fontSize: isMobile ? "20px" : "40px",
              fontWeight: "bold",
              color: "#fff",
              mt: 1,
              textAlign: "left",
            }}
          >
            We are dedicated to implementing best business practices and operational procedures across our
            organization, involving our employees, stakeholders, and clients.
          </Typography>
        </Box>
      </Box>

      {/* TABS + CONTENT SECTION */}
      <Box
        id="scroll-section"
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          px: isMobile ? 2 : 6,
          py: 4,
          gap: 3,
        }}
      >
        {/* LEFT SIDE – TABS */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "center" : "flex-start",
            mb: isMobile ? 3 : 0,
          }}
        >
          <TabComponent setActiveTab={setActiveTab} />
        </Box>

        {/* RIGHT SIDE – CONTENT */}
        <Box sx={{ flex: 3, width: "100%" }}>
          <Comma activeTab={activeTab} setActiveTab={setActiveTab} />
        </Box>
      </Box>
    </>
  );
};

export default Commitments;

