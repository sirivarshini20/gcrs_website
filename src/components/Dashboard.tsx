import React, { useState, useEffect, useMemo, useRef } from "react";
import { Box, Button, Typography, useMediaQuery, useTheme, Stack, Avatar } from "@mui/material";
import SidebarDashboard from "./SidebarDashboard";
import OpenLayersMap from "./MapDashboard";

// Define the categories as a union of string literals for type safety
type CategoryKey = "Risk" | "Water" | "Carbon" | "Groundwater" | "Carbonstock";

type SelectedBoxesType = Record<CategoryKey, boolean>;

const Dashboard: React.FC = () => {
  // Show sidebar toggle
  const [showBar, setShowbar] = useState(true);
  const handleToggleDetails = () => {
    setShowbar(!showBar);
  };

  // Checked box
  const [selectedBoxes, setSelectedBoxes] = useState<SelectedBoxesType>({
    Risk: true,
    Water: true,
    Carbon: true,
    Groundwater: true,
    Carbonstock: true,
  });

  // Handle selected boxes
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // Handle checkbox change
  const handleCheckboxChange = (updatedCheckboxes: SelectedBoxesType) => {
    setSelectedBoxes(updatedCheckboxes);

    // Filter selected categories and update OpenLayers map
    const selectedCategories = (Object.keys(updatedCheckboxes) as CategoryKey[]).filter(
      (category) => updatedCheckboxes[category]
    );
    setSelectedOptions(selectedCategories);
  };

  // Category details
  const checkCategory = useMemo(
    () => ({
      Risk: {
        category: "Risk Assessment",
        color: "red",
        path: require("../../src/assets/gcrs_images/dashBoard_icons/RiskAssesment.svg")
          .default,
      },
      Water: {
        category: "Water Stewardship",
        color: "blue",
        path: require("../../src/assets/gcrs_images/dashBoard_icons/WaterStewardship.svg")
          .default,
      },
      Carbon: {
        category: "Carbon Offsetting",
        color: "green",
        path: require("../../src/assets/gcrs_images/dashBoard_icons/Carbonoffset.svg")
          .default,
      },
      Groundwater: {
        category: "Groundwater",
        color: "orange",
        path: require("../../src/assets/gcrs_images/dashBoard_icons/Groundwater.svg")
          .default,
      },
      Carbonstock: {
        category: "Carbon Stock Assessment",
        color: "purple",
        path: require("../../src/assets/gcrs_images/dashBoard_icons/CarbonstockAssesmenmt.svg")
          .default,
      },
    }),
    []
  );

  // Initialize selectedOptions with the initially checked categories
  useEffect(() => {
    const initialSelectedCategories = (Object.keys(selectedBoxes) as CategoryKey[]).filter(
      (category) => selectedBoxes[category]
    );
    setSelectedOptions(initialSelectedCategories);
  }, [selectedBoxes]);

  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
          p: 2,
          boxShadow: 2,
        }}
      >
        <Button
          sx={{
            fontSize: 20,
            borderRadius: "50%",
            background: "none",
            color: "#050505",
            cursor: "pointer",
            transition: "all 0.8s ease-in-out",
          }}
          onClick={handleToggleDetails}
        >
          {showBar ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </Button>
        <Typography variant="h6" sx={{ textAlign: "center", flex: 1 }}>
          DASHBOARD
        </Typography>
      </Box>

      {showBar && (
        <SidebarDashboard
          handleCheckboxChange={handleCheckboxChange}
          checkCategory={checkCategory}
          selectedBoxes={selectedBoxes} // Pass selectedBoxes for SidebarDashboard to use
        />
      )}

      <OpenLayersMap
        showBar={showBar}
        selectedOptions={selectedOptions}
        checkCategory={checkCategory}
      />
    </Box>
  );
};

export default Dashboard;
