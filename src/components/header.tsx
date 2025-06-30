import React, { useState, useEffect, useRef } from "react";
import { HiX, HiMenu } from "react-icons/hi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const routeMap: Record<string, string> = {
  "Water Stewardship": "/waterstewardship",
  LAMAS: "/lamas",
  "Carbon Exchange": "https://carbonexchange.co.in",
  GeoSust: "https://geosust.com",
  "Geo Hazard": "https://geosust.co.in",
};

// Define paths that should show black text
const blackTextPaths = [
  "/ourJourney",
  "/people",
  "/clients",
  "/news",
  "/InvestorsPartners",
  "/NotFoundPage",
  "/waterstewardship",
  "/lamas",
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSolutionsHovered, setIsSolutionsHovered] = useState(false);
  const [isCloseButtonHovered, setIsCloseButtonHovered] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleExpand = () => setIsExpanded(!isExpanded);
  const closeDropdown = () => setIsExpanded(false);

  const toggleSideNav = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCloseButtonHovered(false);
  };

  useEffect(() => {
    if (contentRef.current) setContentHeight(contentRef.current.scrollHeight);
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isMenuOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [isMenuOpen]);

  const getFontSize = (): string => {
    if (window.innerWidth <= 480) return "11px";
    if (window.innerWidth <= 768) return "13px";
    return "19px";
  };

  const shouldUseBlackText = isScrolled || blackTextPaths.includes(location.pathname);

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    target.style.color = "#bd0324";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    target.style.color = shouldUseBlackText ? "black" : "white";
  };
  const handleLogoClick = () => {
  if (location.pathname === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    navigate("/");
    // Optional: scroll after slight delay (only if needed)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }
};

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          top: 0,
          width: "100%",
          height: "90px",
          backgroundColor: isScrolled ? "#fff" : "transparent",
          transition: "background-color 0.3s ease",
          zIndex: 9999,
          px: isMobile ? 1 : 2,
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
           <Box onClick={handleLogoClick} sx={{ cursor: "pointer" }}>
            <Avatar
              src="https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/GCRSLOgo.svg"
              alt="Logo"
              sx={{ width: isMobile ? 79 : 150, height: "auto", borderRadius: 0 }}
            />
          </Box>
        </Box>

        {/* Nav Links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 7.5, md: 2.5, lg: 7.5 }, // 1.25*8=10px, 2.5*8=20px, 7.5*8=60px
            flex: 1,
          }}
        >
          {/* About Us */}
          <Box sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-end" }, width: "60%" }}>
            <NavLink
              to="/aboutUs"
              style={{
                fontSize: getFontSize(),
                color: shouldUseBlackText ? "black" : "white",
                textDecoration: "none",
                whiteSpace: "nowrap",
                marginTop: isMobile ? "8px" : "25px",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              About Us
            </NavLink>
          </Box>

          {/* Solutions */}
          <Box
  ref={dropdownRef}
  sx={{
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: 0.5, // reduced gap from 1.5 to 0.5
  }}
>
  <NavLink
    to="#"
    onClick={toggleExpand}
    style={{
      fontSize: getFontSize(),
      color: isSolutionsHovered ? "#bd0324" : shouldUseBlackText ? "black" : "white",
      textDecoration: "none",
      marginTop: isMobile ? "8px" : "25px",
    }}
    onMouseEnter={() => setIsSolutionsHovered(true)}
    onMouseLeave={() => setIsSolutionsHovered(false)}
  >
    Solutions
  </NavLink>

  <Button
    onClick={toggleExpand}
    sx={{
      color: isSolutionsHovered ? "#bd0324" : shouldUseBlackText ? "black" : "white",
      fontSize: getFontSize(),
      marginTop: isMobile ? "8px" : "25px",
      p: 0,               // remove internal padding
      minWidth: "auto",   // shrink button to fit content
      lineHeight: 1,      // reduce extra vertical space
      minHeight: "auto",  // shrink height
    }}
  >
    {isExpanded ? "-" : "+"}
  </Button>


            {/* Dropdown */}
            <Box
              ref={contentRef}
              sx={{
                maxHeight: isExpanded ? contentHeight : 0,
                overflow: "hidden",
                transition: "max-height 0.3s ease",
                backgroundColor: isScrolled ? "#fff" : "white",
                color: isScrolled ? "#000" : "#fff",
                width: "150px",
                position: "absolute",
                top: "100%",
                left: 0,
                zIndex: 10,
                borderRadius: 1,
              }}
            >
              <List>
                {Object.entries(routeMap).map(([label, path], index) => (
                  <ListItem key={index} sx={{ padding: 0 }}>
                    <a
                      href={path}
                      target={path.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: location.pathname === path ? "black" : "black",
                        fontSize: "14px",
                        padding: "8px",
                        display: "block",
                      }}
                    >
                      {label}
                    </a>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>

          {/* Contact Us */}
          <NavLink
            to="/contactUs"
            style={{
              fontSize: getFontSize(),
              color: shouldUseBlackText ? "black" : "white",
              textDecoration: "none",
              whiteSpace: "nowrap",
              marginTop: isMobile ? "8px" : "25px",
              marginRight: isMobile ? "12px" : "0px",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Contact Us
          </NavLink>
        </Box>
{/* Hamburger Menu */}
<IconButton
  onClick={toggleSideNav}
  sx={{
    border: `1.5px solid ${shouldUseBlackText ? "black" : "white"}`,
    borderRadius: isMobile ? "6px" : "12px",
    padding: isMobile ? "4px" : "8px",
    backgroundColor: "transparent",
    mt: isMobile ? "6px" : "0px",
    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
  }}
>
  <HiMenu
    size={isMobile ? 20 : 30}
    style={{
      color: isCloseButtonHovered ? "#bd0324" : shouldUseBlackText ? "black" : "white",
      transition: "color 0.3s ease",
    }}
    onMouseEnter={() => setIsCloseButtonHovered(true)}
    onMouseLeave={() => setIsCloseButtonHovered(false)}
  />
</IconButton>
</Box>
{/* End of Header Main Box */}

    {/* Side Navigation Drawer */}
{isMenuOpen && (
  <>
    {/* Backdrop */}
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 9998,
      }}
      onClick={toggleSideNav}
    />

    {/* Side Navigation */}
    <Box
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "25%",
        height: "100%",
        backgroundColor: "#fff",
        transition: "right 0.5s ease-in-out",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        padding: "32px 24px",
      }}
    >
      {/* Close Button */}
      <IconButton
  onClick={toggleSideNav}
  sx={{
    position: "absolute",
    top: 16,
    right: 16,
    padding: "10px",
    zIndex: 10000,
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ccc",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  }}
  onMouseEnter={() => setIsCloseButtonHovered(true)}
  onMouseLeave={() => setIsCloseButtonHovered(false)}
>
  <HiX
    size={28}
    color={isCloseButtonHovered ? "#bd0324" : "#bd0324"}
  />
</IconButton>


      {/* Top Navigation Section */}
    <List
  sx={{
    mt: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "0px",
    fontFamily:
      "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Noto Sans, Liberation Sans, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
  }}
>
  {[
    { to: "/", label: "Home" },
    { to: "/aboutUs", label: "About Us" },
    { to: "/people", label: "People" },
    { to: "/capabilities", label: "Capabilities" },
    { to: "/projects", label: "Projects & Case Studies" },
    { to: "/products", label: "Solutions" },
    { to: "/ourJourney", label: "Our Journey" },
  ].map((item, index) => (
    <ListItem key={index} sx={{ padding: 0 }}>
      <Box
        component="a"
        href={item.to}
        onClick={toggleSideNav}
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "black",
          textDecoration: "none",
          margin: "0px 0px 8px",
          transition: "all 0.2s ease",
          "&:hover": {
            color: "#bd0324",
            textDecoration: "underline",
          },
        }}
      >
        {item.label}
      </Box>
    </ListItem>
  ))}
</List>

{/* Divider */}
<Box
  component="hr"
  sx={{
    width: "30px",
    border: "none",
    borderTop: "2.5px solid #000",
    margin: "12px 0 20px 0",
  }}
/>

{/* Bottom Navigation Section */}
<List
  sx={{
    display: "flex",
    flexDirection: "column",
    gap: "3px",
    fontFamily:
      "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Noto Sans, Liberation Sans, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
  }}
>
  {[
    { to: "/clients", label: "Our Investors & Partners & Clients" },
    { to: "/commitments", label: "Commitments" },
    { to: "/randDintiatives", label: "R&D Initiatives" },
    { to: "/careers", label: "Careers" },
    { to: "/news", label: "News" },
    { to: "/contactUs", label: "Contact Us" },
  ].map((item, index) => (
    <ListItem key={index} sx={{ padding: 0 }}>
      <Box
        component="a"
        href={item.to}
        onClick={toggleSideNav}
        sx={{
          fontSize: "20px",
          // fontWeight: 400,
          color: "#999",
          textDecoration: "none",
          margin: "0px 0px 8px",
          transition: "all 0.2s ease",
          "&:hover": {
            color: "#bd0324",
            textDecoration: "underline",
          },
        }}
      >
        {item.label}
      </Box>
    </ListItem>
  ))}
</List>

    </Box>
  </>
)}

</div>
  )
}
export default Header;
