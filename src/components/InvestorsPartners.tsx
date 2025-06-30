import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const InvestorsPartners: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        paddingTop: isMobile ? "5rem" : "15rem",
        paddingBottom: isMobile ? "5rem" : "12rem",
        justifyContent: "space-between",
        alignItems: isMobile ? "center" : "flex-start",
      }}
    >
      <Box sx={{ width: isMobile ? "100%" : "48%", mb: isMobile ? 4 : 0 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#bd0324",
            textAlign: "center",
            mt: 4,
          }}
        >
          Our Investors
        </Typography>
        <Typography
          sx={{
            color: "#000000",
            fontWeight: "bold",
            mt: 2,
            mb: 6,
            width: "80%",
            mx: "auto",
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          Backed by renowned investors, our commitment to delivering optimal
          environmental solutions is reinforced by unwavering support
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <img
            src={require("../../src/assets/Clients/Gail.png")}
            alt="Gail"
            style={{ width: "230px", height: "auto" }}
          />
        </Box>
      </Box>

      <Box sx={{ width: isMobile ? "100%" : "38%" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#bd0324",
            textAlign: "center",
            mt: 4,
          }}
        >
          Our Partners
        </Typography>
        <Typography
          sx={{
            color: "#000000",
            fontWeight: "bold",
            mt: 2,
            mb: 6,
            width: "80%",
            mx: "auto",
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          GCRS and Synspective join forces in an impactful partnership to offer
          SAR satellite-based risk analysis solutions across South Asia
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <img
            src={require("../../src/assets/Clients/Synspective.png")}
            alt="Synspective"
            style={{ width: "230px", height: "auto" }}
          />
          <img
            src={require("../../src/assets/Clients/JBA1.png")}
            alt="JBA1"
            style={{ width: "230px", height: "auto" }}
          />
          <img
            src={require("../../src/assets/Clients/clients1.png")}
            alt="clients1"
            style={{ width: "230px", height: "auto" }}
          />
          <img
            src={require("../../src/assets/Clients/JBA.png")}
            alt="JBA"
            style={{ width: "230px", height: "auto" }}
          />
          <img
            src={require("../../src/assets/Clients/clients2.png")}
            alt="clients2"
            style={{ width: "230px", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default InvestorsPartners;