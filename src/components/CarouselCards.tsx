import React, { useState } from "react";
import Slider from "react-slick";
import { Typography, Box } from "@mui/joy";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomCarousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
    dots: true,
    customPaging: (i: number) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: activeSlide === i ? "#1976d2" : "#ccc",
          margin: "0 5px",
        }}
      />
    ),
    appendDots: (dots: React.ReactNode) => (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        {dots}
      </Box>
    ),
  };

  const getScale = (index: number) =>
    index === activeSlide ? "scale(1.2)" : "scale(1)";

  return (
    <Box className="carousel-container" sx={{ maxWidth: "100%", mt: 5, overflow: "hidden" }}>
      <Slider {...settings}>
        {/* Slide 1 */}
        <Box
          className="carousel-card"
          sx={{
            p: 2,
            transform: getScale(0),
            transition: "transform 0.5s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            className="carousel-content"
            sx={{ display: "flex", flexDirection: "row", maxWidth: "90%", alignItems: "center" }}
          >
            <img
              src={require("../../src/assets/gcrs_images/partners_investers/city_champions.png")}
              alt="City Champions"
              style={{ width: "150px", borderRadius: "10px", marginRight: "20px" }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography color="neutral" textAlign="left">
                GCRS honored as one of the Top 16 City Champions for 2024, supported by Josh Talks, Omidyar Network India, and IIM Calcutta.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Slide 2 */}
        <Box
          className="carousel-card"
          sx={{
            p: 2,
            transform: getScale(1),
            transition: "transform 0.5s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            className="carousel-content"
            sx={{ display: "flex", flexDirection: "row", maxWidth: "90%", alignItems: "center" }}
          >
            <img
              src={require("../../src/assets/gcrs_images/partners_investers/amruth2.0.png")}
              alt="Amruth 2.0"
              style={{ width: "150px", borderRadius: "10px", marginRight: "20px" }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography color="neutral" textAlign="left">
                GCRS is the winner of India Water Pitch-Pilot-Scale Challenge, organized by Ministry of Housing and Urban Affairs under AMRUT 2.0.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Slide 3 */}
        <Box
          className="carousel-card"
          sx={{
            p: 2,
            transform: getScale(2),
            transition: "transform 0.5s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            className="carousel-content"
            sx={{ display: "flex", flexDirection: "row", maxWidth: "90%", alignItems: "center" }}
          >
            <img
              src={require("../../src/assets/gcrs_images/partners_investers/stanford2.png")}
              alt="Stanford"
              style={{ width: "150px", borderRadius: "10px", marginRight: "20px" }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography color="neutral" textAlign="left">
                GCRS successfully implemented its flagship Lake Management System (LAMAS) in the historic city of Ayodhya.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Slide 4 */}
        <Box
          className="carousel-card"
          sx={{
            p: 2,
            transform: getScale(3),
            transition: "transform 0.5s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            className="carousel-content"
            sx={{ display: "flex", flexDirection: "row", maxWidth: "90%", alignItems: "center" }}
          >
            <img
              src={require("../../src/assets/gcrs_images/partners_investers/seed2.png")}
              alt="Stanford Seed Program"
              style={{ width: "150px", borderRadius: "10px", marginRight: "20px" }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography color="neutral" textAlign="left">
                GCRS selected for the 2024 cohort of the prestigious Stanford Seed Transformation Program.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Slider>
    </Box>
  );
};

export default CustomCarousel;
