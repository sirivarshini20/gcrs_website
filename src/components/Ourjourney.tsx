import React from "react";
import { Box, Typography } from "@mui/material";

const Clients = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        pt: { xs: "100px", sm: "120px", md: "140px" },
        px: 2,
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "20px", sm: "24px", md: "28px" },
          fontWeight: "bold",
          color: "#bd0324",
          mt: 2,
          ml: { xs: 1, sm: 6, md: 11 },
        }}
      >
        Our Journey
      </Typography>

      {/* Sub-heading */}
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#000",
          mt: 1,
          ml: { xs: 2, sm: 8, md: 11 },
          width: { xs: "100%", sm: "80%", md: "70%" },
          fontSize: { xs: "14px", sm: "18px", md: "35px" },
        }}
      >
        Guided by our vision and unwavering values, our business has evolved to
        offer trusted advice and industry leadership
      </Typography>

      {/* Paragraph */}
      <Typography
        sx={{
          color: "#000",
          fontSize: { xs: "12px", sm: "16px", md: "20px" },
          mt: 2,
          ml: { xs: 2, sm: 8, md: 11 },
          width: { xs: "100%", sm: "80%", md: "70%" },
        }}
      >
        GCRS was established in the year 2014. We began our work in the
        environment and sustainability domains and finally rose to the top.
        Several gems have been tied to our string over the years in the shape
        of our accomplishments, clientele, and an exceptional team of
        professionals. This was only possible due to our unwavering commitment
        to addressing environmental issues and making the world a better and
        greener place to live.
      </Typography>

      {/* Main Journey Image */}
      <Box
        sx={{
          textAlign: "center",
          mt: 4,
        }}
      >
        <Box
          component="img"
          src="https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/ourJourney/GCRS_journey_3.png"
          alt="Our Journey"
          sx={{
            maxWidth: { xs: "70%", sm: "90%", md: "60%" },
          }}
        />
      </Box>

      {/* Grid of Small Images */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          mt: 3,
        }}
      >
        {[
          "Rectangle%20140.png",
          "Rectangle 141.png",
          "Rectangle 142.png",
          "Rectangle 144.png",
          "Rectangle 145.png",
          "Rectangle 143.png",
          "Rectangle 146.png",
          "Rectangle 147.png",
        ].map((file, index) => (
          <Box
            key={index}
            component="img"
            src={`https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/ourJourney/${file}`}
            alt={`journey-${index}`}
            sx={{
              maxWidth: "100%",
              height: "auto",
              m: { xs: 0.5, sm: 1 },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Clients;
