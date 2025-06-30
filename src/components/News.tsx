import React from "react";
import { Box, Typography } from "@mui/material";

const News = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        px: { xs: 2, sm: 4, md: 10 },
        py: { xs: 5, sm: 8 },
        mt: { xs: 10, md: "140px" },
      }}
    >
      {/* Main Heading */}
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "23px", md: "26px" },
          fontWeight: "bold",
          color: "#bd0324",
          mb: 2,
        }}
      >
        News
      </Typography>

      {/* Subheading */}
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#000000",
          fontSize: { xs: "19px", md: "40px" },
          width: { xs: "100%", md: "70%" },
          mb: 4,
        }}
      >
        Industry news, discussion topics and what we are doing to make a
        positive difference to the world we all live in
      </Typography>

      {/* Image Gallery */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          mt: 2,
        }}
      >
        <a href="https://twitter.com/gailindia/status/1123883594844393473">
          <Box
            component="img"
            src="https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/news/news_1.png"
            alt="news-1"
            sx={{ maxWidth: "100%", height: "auto", m: 1 }}
          />
        </a>

        <Box
          component="img"
          src="https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/ourJourney/Rectangle 141.png"
          alt="journey-1"
          sx={{ maxWidth: "100%", height: "auto", m: 1 }}
        />

        <Box
          component="img"
          src={require("../../src/assets/gcrs_images/news/news_1.png")}
          alt="local-news-1"
          sx={{ maxWidth: "100%", height: "auto", m: 1 }}
        />

        <Box
          component="img"
          src="https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/ourJourney/Rectangle 144.png"
          alt="journey-2"
          sx={{ maxWidth: "100%", height: "auto", m: 1 }}
        />

        <Box
          component="img"
          src={require("../../src/assets/gcrs_images/news/news_22.png")}
          alt="news-22"
          sx={{ maxWidth: "100%", height: "auto", m: 1 }}
        />

        <Box
          component="img"
          src={require("../../src/assets/gcrs_images/news/news33.png")}
          alt="news-33"
          sx={{ maxWidth: "100%", height: "auto", m: 1 }}
        />

        <Box
          component="img"
          src={require("../../src/assets/gcrs_images/news/news44.png")}
          alt="news-44"
          sx={{ maxWidth: "100%", height: "auto", m: 1 }}
        />

        <a href="http://magazines.insightssuccess.in/The-10-Most-Recommended-GIS-Solution-Provider-Companies-September2019/#page=32">
          <Box
            component="img"
            src="https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/news/news_2.png"
            alt="news-2"
            sx={{ maxWidth: "100%", height: "auto", m: 1 }}
          />
        </a>

        <Box
          component="img"
          src="https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/ourJourney/Rectangle 142.png"
          alt="journey-3"
          sx={{ maxWidth: "100%", height: "auto", m: 1 }}
        />

        <a href="https://www.deccanchronicle.com/southern-states/andhra-pradesh/au-start-up-offers-climate-risk-solutions-1841612">
          <Box
            component="img"
            src={require("../../src/assets/gcrs_images/news/updated_news.jpeg")}
            alt="updated-news"
            sx={{
              height: { xs: "auto", sm: "390px" },
              width: { xs: "100%", sm: "450px" },
              m: 1,
            }}
          />
        </a>
      </Box>
    </Box>
  );
};

export default News;
