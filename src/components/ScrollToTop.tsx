import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { ChevronDoubleUp } from "react-bootstrap-icons";

interface ScrollTopButtonProps {
  onClick: () => void;
}

const ScrollTopButton: React.FC<ScrollTopButtonProps> = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Box
      onClick={onClick}
      onKeyPress={(e) => {
        if (e.key === "Enter") onClick();
      }}
      role="button"
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        position: "fixed",
        top: isVisible ? "90%" : "0",
        right: 15,
        backgroundColor: hovered ? "#bd0324" : "#212121",
        width: 40,
        height: 42,
        borderRadius: "20%",
        textAlign: "center",
        lineHeight: "42px",
        color: "#fff",
        cursor: "pointer",
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        transform: isVisible ? "translateY(-98%)" : "none",
        transition: "0.9s",
        zIndex: 1000,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundColor: "#bd0324",
          opacity: hovered ? 1 : 0,
          visibility: hovered ? "visible" : "hidden",
          borderRadius: "20%",
          transition: "0.5s",
        },
      }}
    >
      {/* First Icon */}
      <Box
        component="span"
        sx={{
          position: "absolute",
          top: hovered ? "0%" : "50%",
          left: 0,
          right: 0,
          margin: "0 auto",
          opacity: hovered ? 0 : 1,
          visibility: hovered ? "hidden" : "visible",
          transform: "translateY(-50%)",
          transition: "0.5s",
        }}
      >
        <ChevronDoubleUp size={13} />
      </Box>

      {/* Second Icon (shown on hover) */}
      <Box
        component="span"
        sx={{
          position: "absolute",
          top: hovered ? "50%" : "60%",
          left: 0,
          right: 0,
          margin: "0 auto",
          opacity: hovered ? 1 : 0,
          visibility: hovered ? "visible" : "hidden",
          transform: "translateY(-50%)",
          transition: "0.5s",
        }}
      >
        <ChevronDoubleUp size={13} />
      </Box>
    </Box>
  );
};

export default ScrollTopButton;
