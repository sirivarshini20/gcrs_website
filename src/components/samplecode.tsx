import React, { useState, useEffect, useRef } from "react";
import { Box, Tabs, Tab, useMediaQuery, useTheme, Avatar, Typography, Stack } from "@mui/material";
import { HiX, HiMenu } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";
import "./header.css";

const routeMap = {
  "Water Stewardship": "/template",
  LAMAS: "/templatelamas",
  "Carbon Exchange": "/templatee",
  GeoSust: "/templatelamass",
  "Geo Hazard": "/templatee",
} as const; // readonly keys and values

type RouteKey = keyof typeof routeMap;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCloseButtonTouched, setIsCloseButtonTouched] = useState(false);
  const [isCloseButtonHovered, setIsCloseButtonHovered] = useState(false);
  const location = useLocation();

  // Derived booleans for active pages
  const isOurJourneyOpen = location.pathname === "/ourJourney";
  const isPeopleOpen = location.pathname === "/people";
  const isClientsOpen = location.pathname === "/clients";
  const isNewsOpen = location.pathname === "/news";
  const isInvestorsPartners = location.pathname === "/InvestorsPartners";
  const isNotFoundPage = location.pathname === "/NotFoundPage";
  const isTemplate = location.pathname === "/template";
  const isTemplateLamas = location.pathname === "/templatelamas";

  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState<RouteKey | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [isSolutionsHovered, setIsSolutionsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  const toggleExpand = () => setIsExpanded((prev) => !prev);
  const closeDropdown = () => setIsExpanded(false);

  // Calculate content height once
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  // Handle click outside dropdown to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSideNav = () => {
    setIsMenuOpen((prev) => !prev);
    setIsCloseButtonTouched((prev) => !prev);
    setIsCloseButtonHovered(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  // Handle menu item click, typed as RouteKey
  const handleItemClick = (item: RouteKey) => {
    setActiveItem(item);
    closeDropdown();
  };

  // Utility for mouse enter/leave with typed event and casting target for style
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    target.style.color = "#bd0324";
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLElement>,
    defaultColor: string
  ) => {
    const target = e.currentTarget;
    target.style.color = defaultColor;
  };

  return (
    <div>
      <nav
        className={`bg-nav-bar sticky-header ${isScrolled ? "navbar-active" : ""}`}
      >
        {!isMenuOpen && (
          <div className="logo-container">
            <NavLink to="/">
              <img
                src="https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/GCRSLOgo.svg"
                alt="Logo"
                className="logo"
              />
            </NavLink>
          </div>
        )}

        {!isMenuOpen && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "39px",
              flex: 1,
            }}
          >
            <NavLink
              to="/aboutUs"
              style={{
                color:
                  isScrolled ||
                  isOurJourneyOpen ||
                  isPeopleOpen ||
                  isClientsOpen ||
                  isNewsOpen ||
                  isInvestorsPartners ||
                  isNotFoundPage ||
                  isTemplate ||
                  isTemplateLamas
                    ? "black"
                    : "white",
                textDecoration: "none",
                padding: "5px 10px",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={(e) =>
                handleMouseLeave(
                  e,
                  isScrolled ||
                    isOurJourneyOpen ||
                    isPeopleOpen ||
                    isClientsOpen ||
                    isNewsOpen ||
                    isInvestorsPartners ||
                    isNotFoundPage ||
                    isTemplate ||
                    isTemplateLamas
                    ? "black"
                    : "white"
                )
              }
            >
              About Us
            </NavLink>

            <div
              ref={dropdownRef}
              style={{ position: "relative", margin: "0 40px" }}
              onMouseEnter={() => {
                setIsSolutionsHovered(true);
                setIsButtonHovered(true);
              }}
              onMouseLeave={() => {
                setIsSolutionsHovered(false);
                setIsButtonHovered(false);
              }}
            >
              <NavLink
                to="#"
                onClick={toggleExpand}
                style={{
                  color: isSolutionsHovered
                    ? "#bd0324"
                    : isScrolled ||
                      isOurJourneyOpen ||
                      isPeopleOpen ||
                      isClientsOpen ||
                      isNewsOpen ||
                      isInvestorsPartners ||
                      isNotFoundPage ||
                      isTemplate ||
                      isTemplateLamas
                    ? "black"
                    : "white",
                  textDecoration: "none",
                  marginRight: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Solutions
                <button
                  onClick={toggleExpand}
                  style={{
                    background: "none",
                    border: "none",
                    color: isSolutionsHovered
                      ? "#bd0324"
                      : isScrolled ||
                        isOurJourneyOpen ||
                        isPeopleOpen ||
                        isClientsOpen ||
                        isNewsOpen ||
                        isInvestorsPartners ||
                        isNotFoundPage ||
                        isTemplate ||
                        isTemplateLamas
                      ? "black"
                      : "white",
                    cursor: "pointer",
                    fontSize: "18px",
                    padding: 0,
                    margin: 9,
                  }}
                >
                  {isExpanded ? "-" : "+"}
                </button>
              </NavLink>

              <div
                ref={contentRef}
                style={{
                  maxHeight: isExpanded ? `${contentHeight}px` : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                  color: "#fff",
                  borderRadius: "4px",
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  zIndex: 10,
                  width: "200px",
                }}
              >
                <ul style={{ listStyleType: "none", padding: "10px", margin: 0 }}>
                  {(Object.keys(routeMap) as RouteKey[]).map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleItemClick(item)}
                      style={{
                        padding: "8px",
                        cursor: "pointer",
                        backgroundColor:
                          isScrolled ||
                          isOurJourneyOpen ||
                          isPeopleOpen ||
                          isClientsOpen ||
                          isNewsOpen ||
                          isInvestorsPartners ||
                          isNotFoundPage ||
                          isTemplate ||
                          isTemplateLamas
                            ? "white"
                            : "transparent",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      <NavLink
                        to={routeMap[item]}
                        onClick={closeDropdown}
                        style={{
                          textDecoration: "none",
                          color:
                            location.pathname === routeMap[item] ? "#bd0324" : isScrolled ||
                              isOurJourneyOpen ||
                              isPeopleOpen ||
                              isClientsOpen ||
                              isNewsOpen ||
                              isInvestorsPartners ||
                              isNotFoundPage ||
                              isTemplate ||
                              isTemplateLamas
                              ? "black"
                              : "white",
                        }}
                      >
                        {item}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <NavLink
              to="/contactUs"
              style={{
                color:
                  isScrolled ||
                  isOurJourneyOpen ||
                  isPeopleOpen ||
                  isClientsOpen ||
                  isNewsOpen ||
                  isInvestorsPartners ||
                  isNotFoundPage ||
                  isTemplate ||
                  isTemplateLamas
                    ? "black"
                    : "white",
                textDecoration: "none",
                marginRight: 150,
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={(e) =>
                handleMouseLeave(
                  e,
                  isScrolled ||
                    isOurJourneyOpen ||
                    isPeopleOpen ||
                    isClientsOpen ||
                    isNewsOpen ||
                    isInvestorsPartners ||
                    isNotFoundPage ||
                    isTemplate ||
                    isTemplateLamas
                    ? "black"
                    : "white"
                )
              }
            >
              Contact Us
            </NavLink>
          </div>
        )}

        <NavLink
          to="#"
          className={`menu-button ${isCloseButtonTouched ? "close-touched" : ""}`}
          onClick={toggleSideNav}
          onMouseEnter={() => setIsCloseButtonHovered(true)}
          onMouseLeave={() => setIsCloseButtonHovered(false)}
        >
          {isMenuOpen ? (
            <HiX size={30} style={{ color: isCloseButtonHovered ? "#bd0324" : "black" }} />
          ) : (
            <HiMenu
              size={30}
              style={{
                color:
                  isScrolled ||
                  isOurJourneyOpen ||
                  isPeopleOpen ||
                  isClientsOpen ||
                  isNewsOpen ||
                  isInvestorsPartners ||
                  isNotFoundPage ||
                  isTemplate ||
                  isTemplateLamas
                    ? isCloseButtonHovered
                      ? "#bd0324"
                      : "#000"
                    : isCloseButtonHovered
                    ? "#bd0324"
                    : "#fff",
                transition: "color 0.3s ease",
              }}
              className="menu-icon"
            />
          )}
        </NavLink>
      </nav>

      {isMenuOpen && (
        <>
          <div className="overlay-header" onClick={toggleSideNav}></div>
          <div className="side-nav side-nav-open">
            <NavLink
              to="#"
              className={`menu-button ${isCloseButtonTouched ? "close-touched" : ""}`}
              onClick={toggleSideNav}
              onMouseEnter={() => setIsCloseButtonHovered(true)}
              onMouseLeave={() => setIsCloseButtonHovered(false)}
            >
              <HiX size={30} />
            </NavLink>

            <div className="scrollable-nav">
              <NavLink to="/" onClick={toggleSideNav} style={{ paddingTop: "10px" }}>
                Home
              </NavLink>
              <NavLink to="/aboutUs" onClick={toggleSideNav}>
                About Us
              </NavLink>
              <NavLink to="/people" onClick={toggleSideNav}>
                People
              </NavLink>
              <NavLink to="/capabilities" onClick={toggleSideNav}>
                Capabilities
              </NavLink>
              <NavLink to="/projects" onClick={toggleSideNav}>
                Projects & Case Studies
              </NavLink>
              <NavLink to="/products" onClick={toggleSideNav}>
                Solutions
              </NavLink>
              <NavLink to="/ourJourney" onClick={toggleSideNav}>
                Our Journey
              </NavLink>
              <NavLink to="/" style={{ color: "gray" }}>
                __
              </NavLink>
              <NavLink to="/clients" onClick={toggleSideNav}>
                <span className="hover-effect-header">
                  Our Investors & Partners & Clients
                </span>
              </NavLink>
              <NavLink to="/commitments" onClick={toggleSideNav}>
                <span className="hover-effect-header">Commitments</span>
              </NavLink>
              <NavLink to="/randDintiatives" onClick={toggleSideNav}>
                <span className="hover-effect-header">R&D Initiatives</span>
              </NavLink>
              <NavLink to="/careers" onClick={toggleSideNav}>
                <span className="hover-effect-header">Careers</span>
              </NavLink>
              <NavLink to="/news" onClick={toggleSideNav}>
                <span className="hover-effect-header">News</span>
              </NavLink>
              <NavLink to="/contactUs" onClick={toggleSideNav}>
                <span className="hover-effect-header">Contact Us</span>
              </NavLink>
              <NavLink to="/NotFoundPage" onClick={toggleSideNav} style={{ display: "none" }}>
                <span className="hover-effect-header"></span>
              </NavLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
