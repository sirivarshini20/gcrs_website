import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";

const Clients = () => {
  const imagePaths = [
    "Rectangle 47.png", "Rectangle 48.png", "Rectangle 49.png", "Rectangle 50.png", "Rectangle 51.png",
    "Rectangle 52.png", "Rectangle 54.png", "Rectangle 55.png", "Rectangle 56.png", "Rectangle 57.png",
    "Rectangle 58.png", "Rectangle 59.png", "Rectangle 60.png", "Rectangle 61.png", "Rectangle 62.png",
    "Rectangle 63.png", "Rectangle 64.png", "Rectangle 71.png", "Rectangle 72.png", "Rectangle 73.png",
    "Rectangle 74.png", "Rectangle 75.png", "Rectangle 76.png", "Rectangle 77.png", "Rectangle 78.png",
    "Rectangle 79.png", "Rectangle 80.png", "Rectangle 81.png", "Rectangle 82.png", "Rectangle 83.png",
    "Rectangle 84.png", "Rectangle 85.png", "Rectangle 86.png", "Rectangle 87.png", "Rectangle 88.png",
    "Rectangle 95.png", "Rectangle 96.png", "Rectangle 97.png", "Rectangle 98.png", "Rectangle 99.png",
    "Rectangle 100.png", "Rectangle 101.png", "Rectangle 102.png", "Rectangle 103.png", "Rectangle 104.png",
    "Rectangle 105.png", "Rectangle 106.png", "Rectangle 89.png", "Rectangle 90.png", "Rectangle 91.png",
    "Rectangle 92.png", "Rectangle 93.png", "Rectangle 94.png", "Rectangle 107.png", "Rectangle 108.png",
    "Rectangle 109.png", "Rectangle 110.png", "Dept of Environment & Remote Sensing_j&k.png"
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isMobileView, setIsMobileView] = useState(isMobile);

  // Handle mobile resize
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box sx={{ width: "75%", margin: "0 auto", textAlign: "center", padding: "2rem" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#bd0324", mt: 16 }}>
        Our Investors
      </Typography>
      <Typography sx={{ fontSize: "1.2rem", color: "#000", fontWeight: "bold", mt: 2, mb: 4 }}>
        Backed by renowned investors, our commitment to delivering optimal environmental solutions is reinforced by unwavering support
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <img src={require("../../src/assets/Clients/Gail.png")} alt="Gail" style={{ width: "150px" }} />
      </Box>

      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#bd0324", mt: 6 }}>
        Our Partners
      </Typography>
      <Typography sx={{ fontSize: "1.2rem", color: "#000", fontWeight: "bold", mt: 2, mb: 4 }}>
        GCRS and Synspective join forces in an impactful partnership to offer SAR satellite-based risk analysis solutions across South Asia
      </Typography>

     <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 2,
    px: 2,
  }}
>
  <img
    src={require("../../src/assets/Clients/Synspective.png")}
    alt="Synspective"
    style={{ width: "150px", maxWidth: "100%", height: "auto" }}
  />
  <img
    src={require("../../src/assets/Clients/JBA1.png")}
    alt="JBA1"
    style={{ width: "150px", maxWidth: "100%", height: "auto" }}
  />
  <img
    src={require("../../src/assets/Clients/clients1.png")}
    alt="clients1"
    style={{ width: "150px", maxWidth: "100%", height: "auto" }}
  />
  <img
    src={require("../../src/assets/Clients/JBA.png")}
    alt="JBA"
    style={{ width: "150px", maxWidth: "100%", height: "auto" }}
  />
  <img
    src={require("../../src/assets/Clients/clients2.png")}
    alt="clients2"
    style={{ width: "150px", maxWidth: "100%", height: "auto" }}
  />
</Box>

      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#bd0324", mt: 6 }}>
        Our Clients
      </Typography>
      <Typography sx={{ fontSize: "1.2rem", color: "#000", fontWeight: "bold", mt: 2, mb: 4 }}>
        "Our collaborations encompass corporations, private equity firms, governmental bodies, non-profit organizations, multilateral and bilateral financiers, as well as donor agencies, as we offer comprehensive solutions."
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {imagePaths.map((path, index) => (
          <Grid item key={index} xs={6} sm={4} md={2}>
            <img
              src={require(`../../src/assets/Clients/${path}`)}
              alt={`Client ${index + 1}`}
              style={{ width: "100%", marginBottom: "1.5rem" }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Clients;
