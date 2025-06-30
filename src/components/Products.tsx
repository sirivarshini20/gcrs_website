import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "./ProductsImage";

const Products: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url("https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/Products/producrs.png")',
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
            flexDirection: "row",
            alignItems: "start",
            textAlign: "start",
            width: "100%",
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
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: isTablet ? "15px" : "20px",
                color: "#629927",
              }}
            >
              Solutions
            </Typography>
            <Typography
              sx={{
                fontSize: isTablet ? "20px" : "40px",
                fontWeight: "bold",
                width: isTablet ? "100%" : "80%",
                color: "#fff",
                textAlign: isTablet ? "center" : "left",
                p: isTablet ? 2 : 0,
              }}
            >
              GCRS boasts a versatile portfolio of four cutting-edge products,
              each designed to revolutionize industry standards
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box id="scroll-section">
        <Typography
          sx={{
            mt: isMobile ? 6 : 10,
            mx: isMobile ? 2 : isTablet ? 6 : 12,
            fontSize: isMobile ? "18px" : isTablet ? "25px" : "30px",
            fontWeight: "bold",
            width: isMobile ? "90%" : "80%",
          }}
        >
          GCRS boasts a versatile portfolio of four cutting-edge products, each
          designed to revolutionize industry standards
        </Typography>
      </Box>

      <Box id="scroll-section" sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Box sx={{ display: "flex", width: "100%", px: 2 }}>
          <Image />
        </Box>
      </Box>
    </>
  );
};

export default Products;