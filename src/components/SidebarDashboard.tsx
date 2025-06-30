import React, { useState } from "react";
import { Box, FormControlLabel, Checkbox, Avatar, Typography, Button } from "@mui/material";

// Define the keys used in checkboxes
type CategoryKey = "Risk" | "Water" | "Carbon" | "Groundwater" | "Carbonstock";

// Type for the checkboxes state
type CheckboxesType = Record<CategoryKey, boolean>;

// Type for the checkCategory prop structure
interface CheckCategoryItem {
  category: string;
  color: string;
  path: string; // Assuming path is a string URL or imported path
}

type CheckCategoryType = Record<CategoryKey, CheckCategoryItem>;

// Props interface
interface SidebarDashboardProps {
  handleCheckboxChange: (updatedCheckboxes: CheckboxesType) => void;
  checkCategory: CheckCategoryType;
  selectedBoxes: CheckboxesType; // Receive selected boxes from the parent
}

const SidebarDashboard: React.FC<SidebarDashboardProps> = ({
  handleCheckboxChange,
  checkCategory,
  selectedBoxes,
}) => {
  // Handle checkbox click
  const handleCheckboxClick = (imageName: CategoryKey) => {
    const updatedCheckboxes: CheckboxesType = {
      ...selectedBoxes,
      [imageName]: !selectedBoxes[imageName],
    };
    handleCheckboxChange(updatedCheckboxes);
  };

  // Handle select all toggle
  const handleSelectAll = () => {
    const allChecked = Object.values(selectedBoxes).every((value) => value);
    const updatedCheckboxes: CheckboxesType = Object.fromEntries(
      (Object.keys(selectedBoxes) as CategoryKey[]).map((imageName) => [imageName, !allChecked])
    ) as CheckboxesType;

    handleCheckboxChange(updatedCheckboxes);
  };

  return (
    <Box
      sx={{
        p: 2,
        width: 290,
        background: "#fff",
        transition: "margin-left 1s",
        zIndex: 1,
        marginTop: 0,
        position: "relative",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Select Categories
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Button
          onClick={handleSelectAll}
          sx={{
            backgroundColor: "#b9e4f1",
            color: "#000000",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
            marginBottom: "10px",
            marginTop: "20px",
            "&:hover": {
              backgroundColor: "#d0d4d8",
            },
          }}
        >
          {Object.values(selectedBoxes).every((value) => value)
            ? "Unselect All"
            : "Select All"}
        </Button>
      </Box>

      {Object.entries(selectedBoxes).map(([imageName, isChecked]) => {
        const category = imageName as CategoryKey;
        return (
          <Box
            key={category}
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              "&:hover": {
                ".checkbox": {
                  transform: "scale(1.3)",
                },
              },
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={isChecked}
                  onChange={() => handleCheckboxClick(category)}
                  color="primary"
                  sx={{
                    "&.Mui-checked": {
                      "& + .MuiFormControlLabel-label": {
                        color: "#70cae6",
                        fontWeight: "bold",
                      },
                    },
                    marginRight: "8px",
                    transition: "transform 0.2s ease-in-out",
                    transform: "scale(1)",
                  }}
                />
              }
              label={
                <Box display="flex" alignItems="center">
                  <Avatar
                    src={checkCategory[category].path}
                    sx={{
                      width: 20,
                      height: 20,
                      mr: 1,
                    }}
                  />
                  <Typography variant="body2">{checkCategory[category].category}</Typography>
                </Box>
              }
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default SidebarDashboard;