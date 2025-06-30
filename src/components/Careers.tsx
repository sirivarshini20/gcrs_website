import React from "react";
import { Box, Typography, useMediaQuery, useTheme, Link } from "@mui/material";

const Careers = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const commonFontFamily = {
    fontFamily:
      "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Noto Sans, Liberation Sans, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
  };

  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/career.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
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
          flexDirection: isMobile ? "column" : "row",
          alignItems: "flex-start",
          textAlign: "start",
          width: isMobile ? "100%" : "80%",
          paddingLeft: isMobile ? 0 : "70px",
        }}
      >
        <a href="#scroll-section" style={{ textDecoration: "none" }}></a>

        <Box sx={{ color: "#fff", textAlign: isMobile ? "center" : "start" }}>
          <Typography
            variant="h4"
            sx={{
              color: "#fcb22f",
              fontWeight:"bold",
              fontSize: isMobile ? "25px" : "20px",
              ...commonFontFamily,
            }}
          >
            Careers
          </Typography>

          <Typography
            sx={{
              fontSize: isMobile ? "26px" : "38px",
              fontWeight: "bold",
              width: "90%",
              padding: isMobile ? "20px" : "10",
              ...commonFontFamily,
            }}
          >
            <strong> We enlist top engineers, scientists, and economists to 
            help our natural and urban environment's <br></br>
            future:{" "}</strong>
            <Link
              href="mailto:careers@gcrs.co.in"
              sx={{
                color: "#FCB22F",
                fontWeight: "bold",
                textDecoration: "none",
                fontSize: isMobile ? "24px" : "32px",
                ...commonFontFamily,
              }}
            >
              careers@gcrs.co.in
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Careers;
