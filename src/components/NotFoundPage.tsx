import React from "react";
import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery("(max-width:768px)");
  const isMobile = useMediaQuery("(max-width:480px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isTablet || isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "10rem",
        height: "100vh",
        textAlign: isTablet || isMobile ? "center" : "left",
      }}
    >
      <Box
        component="img"
        src="https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/notfound.png"
        alt="notfound"
        sx={{
          maxWidth: "70%",
          marginRight: isTablet || isMobile ? 0 : "30px",
          paddingTop: isTablet || isMobile ? "6rem" : 0,
        }}
      />
      <Box
        sx={{
          marginLeft: isTablet || isMobile ? "10px" : "90px",
          paddingBottom: isTablet ? "16rem" : isMobile ? "10rem" : 0,
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: "4em", fontWeight: "bold", color: "#000" }}
        >
          404
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontSize: "1em", fontWeight: "bold", color: "#000", mt: 1 }}
        >
          Page Not Found!
        </Typography>
        <Typography
          sx={{
            fontSize: "1em",
            mt: 2,
            mb: 3,
            color: "#000",
          }}
        >
          We’re sorry, the page you requested could not be found. <br />
          Please go back to the homepage!
        </Typography>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#bd0324",
              borderRadius: "3px",
              borderWidth: 0,
              color: "#fff",
              width: "50%",
              padding: "10px 20px",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#a0021f",
              },
            }}
          >
            Go Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;