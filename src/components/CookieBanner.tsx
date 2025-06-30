import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Link as MuiLink,
  useMediaQuery,
  useTheme,
  Paper,
} from "@mui/material";

const CookieBanner: React.FC = () => {
  const [accepted, setAccepted] = useState(
    localStorage.getItem("cookieAccepted") === "true"
  );
  const [cookieAccepted, setCookieAccepted] = useState(
    localStorage.getItem("cookieAccepted") === "true"
  );

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setCookieAccepted(localStorage.getItem("cookieAccepted") === "true");
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieAccepted", "true");
    setAccepted(true);
  };

  if (accepted) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 9999,
        bgcolor: cookieAccepted ? "#fff" : "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: cookieAccepted ? 2 : 5,
        px: 2,
      }}
    >
      {cookieAccepted ? (
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            maxWidth: 800,
            p: 3,
            borderRadius: 2,
            textAlign: "left",
            backgroundColor: "#fff",
            color: "#333",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            Please Accept Cookies
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            We use ‘cookies’ and related technologies to help identify you and
            your devices, to operate our site, enhance your experience, and
            conduct advertising. You can read more about these uses in our{" "}
            <MuiLink href="/OurPrivacyPolicy" underline="hover">
              Privacy Policy
            </MuiLink>.
          </Typography>
          <Button
            onClick={acceptCookies}
            variant="outlined"
            sx={{
              color: "#333",
              borderColor: "#333",
              "&:hover": {
                borderColor: "#000",
              },
            }}
          >
            Accept Cookies
          </Button>
        </Paper>
      ) : (
        <Paper
          elevation={3}
          sx={{
            backgroundColor: "#fff",
            color: "#333",
            p: 3,
            borderRadius: 2,
            width: isMobile ? "90%" : "85%",
            textAlign: "left",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Please Accept Cookies
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            We use ‘cookies’ and related technologies to help identify you and
            your devices, to operate our site, enhance your experience, and
            conduct advertising. You can read more about these uses in our{" "}
            <MuiLink href="/OurPrivacyPolicy" underline="hover">
              Privacy Policy
            </MuiLink>.
          </Typography>
          <Button
            onClick={acceptCookies}
            variant="outlined"
            sx={{
              color: "#333",
              borderColor: "#333",
              mt: 1,
              "&:hover": {
                borderColor: "#000",
              },
            }}
          >
            Accept Cookies
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default CookieBanner;
