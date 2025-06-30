import React, { useState } from "react";
import { Box, Typography, useMediaQuery, Link } from "@mui/material";
import TabComponent from "./capDescription";
import Capa from "./capa";

const Capabilities = () => {
  const [activeTab, setActiveTab] = useState("climate-adaptation");

  const isSmallScreen = useMediaQuery("(max-width:768px)");

  return (
    <>
      <Box
        sx={{
          backgroundImage:
            'url("https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/Capabilities/capabilities.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "auto", md: "100vh" },
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          px: { xs: 2, sm: 4, md: 12 },
          py: { xs: 10, md: 0 },
        }}
      >
        {!isSmallScreen && (
          <Link href="#scroll-section" underline="none">
            <Typography
              sx={{
                mt: "190px",
                fontSize: "15px",
                transform: "rotate(-90deg)",
                color: "#fff",
                position: "absolute",
                left: "10px",
              }}
            >
              SCROLL
            </Typography>
          </Link>
        )}

        <Box
          sx={{
            color: "#fff",
            textAlign: { xs: "center", md: "left" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "15px", md: "20px" },
              color: "#629927",
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Capabilities
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "20px", md: "40px" },
              fontWeight: "bold",
              width: { xs: "100%", md: "70%" },
              color: "#fff",
              px: { xs: 2, md: 0 },
            }}
          >
            We offer a comprehensive skill set to address the intricate and
            systemic challenges that our society and environment encounter
          </Typography>
        </Box>
      </Box>

      {/* Content below the scroll section */}
      <Box id="scroll-section" sx={{ px: { xs: 2, sm: 4, md: 10 }, pt: { xs: 6, md: 10 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          <Box>
            <TabComponent setActiveTab={setActiveTab} />
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "block" },
              flex: 1,
            }}
          >
            <Capa activeTab={activeTab} />
          </Box>
        </Box>

        {/* Small and medium screen Capa render */}
        <Box sx={{ display: { xs: "block", md: "none" }, mt: 4 }}>
          <Capa activeTab={activeTab} />
        </Box>
      </Box>
    </>
  );
};

export default Capabilities;
