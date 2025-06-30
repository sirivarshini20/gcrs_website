import React from "react";
import { Box, Typography, Button, useMediaQuery, useTheme, Avatar } from "@mui/material";
import Image from "./aboutusImage";  // Assuming the Image component is already implemented

const AboutUs = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
sx={{
  backgroundImage:
    "url('https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/aboutus_bg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: { xs: 0, sm: "0 3rem" }
}}
      >
<Box sx={{ display: "flex", flexDirection: "column", paddingLeft: { xs: "20px", sm: "150px" }, paddingTop: "100px" }}>
  {!isSmallScreen && (
  <Button
    component="a"
    href="#scroll-section"
    sx={{
      textDecoration: "none",
      color: "#fff",
      fontSize: "15px",
      transform: "rotate(-90deg)",
      position: "absolute",
      left: "10px",
      top: "50%",
      "&:hover": { color: "#bd0324" },
    }}
  >
    SCROLL
  </Button>
)}


  <Box sx={{ color: "#fff"  }}>
    <Typography
      variant="h4"
      sx={{
        fontSize: "20px",
        color: "#fcb22f",
        fontWeight: "bold",
        textAlign: "left",
        marginBottom: "20px",
      }}
    >
      About Us
    </Typography>
    <Typography
      variant="body1"
      sx={{
        fontSize: { xs: "28px", sm: "40px" },
        fontWeight: "bold",
        width: { xs: "90%", sm: "80%" },
        textAlign: "left",
        lineHeight: 1.3,
      }}
    >
      We collaborate with governments and businesses to address intricate challenges pertaining to the natural and man made environment.
    </Typography>
  </Box>
</Box>
</Box>

      <Box id="scroll-section" sx={{ paddingTop: "30px" }}>
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontSize: "23px",
              fontWeight: "bold",
              marginTop: "100px",
              marginX: { xs: "1.5rem", sm: "3.5rem" },
width: { xs: "90%", sm: "70%" },

            }}
          >
            Geo Climate Risk Solutions Pvt Ltd (GCRS) is a start-up company working in the area of environment and risk assessment. We are a solution provider, consultancy and advisory services organization primarily focusing on challenges related to environment and sustainability and offering solutions to governments, institutions, corporates, industries, multi-lateral, bilateral funding partners and donor agencies, and non-governmental organizations.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              marginTop: "50px",
              marginLeft: "3.5rem",
              marginRight: "3.5rem",
              width: "70%",
            }}
          >
            GCRS is an accredited company by Central Ground Water Authority to carry out Hydrogeological Reporting, Groundwater Modelling, Groundwater Impact Analysis for Industries, Infrastructure, Mining Sector, and Institutions.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              marginTop: "50px",
              marginLeft: "3.5rem",
              marginRight: "3.5rem",
              width: "70%",
            }}
          >
            GAIL (India) Ltd., a major Government of India Public Sector company in hydrocarbons, has invested in our company by holding a 10% stake and also enlisted us in carrying out Geo-Hazard Assessment & Management along Hydrocarbon Pipelines. We have an association with IIT Kanpur for R & D and product development. We do have an MOU with Mekorot, National Water Company of Israel.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              marginTop: "50px",
              marginLeft: "3.5rem",
              marginRight: "3.5rem",
              width: "70%",
            }}
          >
            GCRS derives its strength from a pool of highly experienced human resources with in-depth knowledge on issues related to environmental risks, management of natural resources, sustainability safeguards, policy framework, socio-economic analysis, and capacity building.
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontSize: "23px",
              fontWeight: "bold",
              marginLeft: "3.5rem",
              marginRight: "3.5rem",
              marginTop: "100px",
              width: "70%",
            }}
          >
            Delivery Model:
          </Typography>

          <Typography
            variant="body1"
            sx={{
              marginTop: "50px",
              marginLeft: "3.5rem",
              marginRight: "3.5rem",
              width: "70%",
            }}
          >
            The GCRS ecosystem harnesses a collective array of talents and assets, meticulously tailored to assist clients in addressing intricate, systemic dilemmas confronting our society and environment. Our expertise extends over three fundamental fields: Environmental, Industrial, and Social Sustainability.
          </Typography>
        </Box>
      </Box>

      <Box id="scroll-section" sx={{ paddingTop: "30px" }}>
        <Box className="items-container">
          <Image />
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;
