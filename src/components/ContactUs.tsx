import React, { useRef } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import ContactUsDes from "./ContactUsDes";

const ContactUs: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const location = useLocation();

  const contactInfoRef = useRef<HTMLDivElement | null>(null);

  const handleScrollClick = () => {
    contactInfoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Conditional styling for email box
  let emailTextAlign: "left" | "center" = "left";
  let emailAlignItems: "flex-start" | "center" = "flex-start";
  if (isMobile || isTablet) {
    emailTextAlign = "center";
    emailAlignItems = "center";
  }

  return (
    <>
      {/* Background Section */}
      <Box
        sx={{
          backgroundImage:
            "url('https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/contactus_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "#fff",
          position: "relative",
          px: { xs: 2, sm: 4, md: 10 },
        }}
      >
        {/* SCROLL TEXT */}
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

        {/* Heading */}
        <Box sx={{ mb: 4, mt: isMobile ? 18 : 0 }}>
          <Typography
            variant="h4"
            sx={{
              color: "#FCB22F",
              fontSize: { xs: "18px", sm: "22px" },
              mb: 1,
            }}
          >
            Contact us
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "22px", sm: "28px", md: "36px" },
              fontWeight: "bold",
              color: "#fff",
              lineHeight: 1.3,
            }}
          >
            For any general inquiries, please contact us
          </Typography>
        </Box>

        {/* Contact Info */}
        <Box
          ref={contactInfoRef}
          sx={{
            display: "flex",
            flexDirection: isMobile || isTablet ? "column" : "row",
            alignItems: isMobile || isTablet ? "center" : "flex-start",
            justifyContent: "flex-start",
            gap: 4,
            flexWrap: "wrap",
            width: "100%",
            maxWidth: "1400px",
          }}
        >
          {/* Email */}
          <Box
            sx={{
              flex: 1,
              minWidth: "260px",
              textAlign: emailTextAlign,
              display: "flex",
              flexDirection: "column",
              alignItems: emailAlignItems,
            }}
          >
            <img
              src={
                require("../../src/assets/gcrs_images/contactUs_new/mail_white.svg")
                  .default
              }
              alt="Email Icon"
              style={{ marginBottom: 24 }}
            />
            <Typography sx={{ fontWeight: "bold", fontSize: "18px", mb: 1 }}>
              Email Us:
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>
              business@gcrs.co.in
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>
              info@gcrs.co.in
            </Typography>
          </Box>

          {/* Address */}
          <Box
            sx={{
              flex: 2,
              minWidth: "300px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                border: "2px dotted #fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <img
                src={
                  require("../../src/assets/gcrs_images/contactUs_new/location_white.svg")
                    .default
                }
                alt="Location Icon"
                style={{ width: 24, height: 24 }}
              />
            </Box>

            <Typography sx={{ fontWeight: "bold", fontSize: "18px", mb: 2 }}>
              Find Us
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "center",
                alignItems: "flex-start",
                textAlign: "left",
                gap: 2,
              }}
            >
              <Typography sx={{ fontSize: "14px", flex: 1 }}>
                Innovation Valley, Hill-3, IT SEZ, Madhurawada,
                <br />
                Visakhapatnam – 530048
              </Typography>

              {!isMobile && (
                <Box
                  sx={{
                    width: "1px",
                    height: "60px",
                    backgroundColor: "#fff",
                    mx: 2,
                  }}
                />
              )}

              <Typography sx={{ fontSize: "14px", flex: 1 }}>
                TP-125, First floor, Technopark@iitk, Phase-I Building,
                <br />
                R&D Centre, Indian Institute of Technology (IIT) Kanpur,
                <br />
                Uttar Pradesh – 208016
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Description Section */}
      <Box sx={{ mt: 0, mb: 0 }}>
        <ContactUsDes />
      </Box>
    </>
  );
};

export default ContactUs;