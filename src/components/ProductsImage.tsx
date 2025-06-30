import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
import Box from "@mui/material/Box";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type TabType = "theme" | "product" | "geosust" | "geocoast";

interface TabDataItem {
  id: TabType;
  title: string;
  iconSrc: string;
}

const tabData: TabDataItem[] = [
  {
    id: "theme",
    title: "Theme",
    iconSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/Products/Group 50.png",
  },
  {
    id: "product",
    title: "Product",
    iconSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/Products/Group 51.png",
  },
  {
    id: "geosust",
    title: "GeoSUST",
    iconSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/Products/Group 52.png",
  },
  {
    id: "geocoast",
    title: "GeoCoast",
    iconSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/Products/Group 53.png",
  },
];

const videoUrl: Record<TabType, string> = {
  theme:
    "https://www.youtube.com/watch?v=FMrq0nfy1iA&ab_channel=GCRS-forsustainability",
  product:
    "https://www.youtube.com/watch?v=lr3SEhgzmEU&ab_channel=GCRS-forsustainability",
  geosust:
    "https://www.youtube.com/watch?v=Jcn6PkkHEdk&ab_channel=GCRS-forsustainability",
  geocoast: "https://www.youtube.com/watch?v=video_placeholder",
};

function ProductsImage() {
  const [selectedItemType, setSelectedItemType] = useState<TabType>("theme");
  const [clickedItem, setClickedItem] = useState<TabType | null>(null);
  const [activeTab, setActiveTab] = useState<TabType | null>(null);
  const carouselRef = React.useRef<Carousel>(null);

  const handleCarouselChange = (index: number) => {
    const tab = tabData[index];
    if (tab) {
      setActiveTab(tab.id);
      setSelectedItemType(tab.id);
    }
  };

  const handleTabClick = (tabId: TabType) => {
    setActiveTab(tabId);
    setSelectedItemType(tabId);
  };

  const handleItemClick = (type: TabType) => {
    setSelectedItemType(type);
    setClickedItem(type);
  };

  const getItemButtonStyle = (type: TabType) => {
    return clickedItem === type ? "selected" : "";
  };

  const isSmallOrMediumScreen = window.innerWidth <= 768;

  const toggleSelectedItem = () => {
    const order: TabType[] = ["theme", "product", "geosust", "geocoast"];
    const currentIndex = order.indexOf(selectedItemType);
    const nextItem = order[(currentIndex + 1) % order.length];
    setSelectedItemType(nextItem);
  };

  const getImageUrl = () => {
    switch (selectedItemType) {
      case "theme":
        return "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/Products/Group 59.png";
      case "product":
        return "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/Products/Group 58.png";
      case "geosust":
        return "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/Products/Group 61.png";
      case "geocoast":
        return "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/Products/Group 60.png";
    }
  };

  useEffect(() => {
    setActiveTab(selectedItemType);

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setActiveTab(selectedItemType);
      } else {
        setActiveTab(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [selectedItemType]);

  return (
    <div className="container">
      <div className={`hr-line ${selectedItemType}`} onClick={toggleSelectedItem}></div>

      {isSmallOrMediumScreen ? (
        <Box width="100%" sx={{ position: "relative" }}>
          <Carousel
            showArrows
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            selectedItem={tabData.findIndex((tab) => tab.id === activeTab)}
            onChange={handleCarouselChange}
            ref={carouselRef}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <Box
                  onClick={onClickHandler}
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    top: "50%",
                    left: 5,
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    background: "#ffffffaa",
                    borderRadius: "50%",
                    width: 32,
                    height: 32,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  ❮
                </Box>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <Box
                  onClick={onClickHandler}
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    top: "50%",
                    right: 5,
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    background: "#ffffffaa",
                    borderRadius: "50%",
                    width: 32,
                    height: 32,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  ❯
                </Box>
              )
            }
          >
            {tabData.map((tab) => (
              <div
                key={tab.id}
                className={`item-button ${getItemButtonStyle(tab.id)}`}
                onClick={() => handleItemClick(tab.id)}
                style={{
                  fontWeight: "bold",
                  fontSize: "25px",
                  cursor: "pointer",
                  marginRight: "100px",
                }}
              >
                <img
                  src={tab.iconSrc}
                  alt={tab.title}
                  style={{
                    width: "150px",
                    transform: clickedItem === tab.id ? "scale(1.5)" : "none",
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>
            ))}
          </Carousel>
        </Box>
      ) : (
        <div className="item-buttons1">
          {tabData.map((tab) => (
            <div
              key={tab.id}
              className={`item-button ${getItemButtonStyle(tab.id)}`}
              onClick={() => handleItemClick(tab.id)}
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                cursor: "pointer",
                marginRight: "100px",
              }}
            >
              <img
                src={tab.iconSrc}
                alt={tab.title}
                style={{
                  width: "150px",
                  transform: clickedItem === tab.id ? "scale(1.5)" : "none",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
          ))}
        </div>
      )}

      {selectedItemType === "theme" && (
        <div className="lamas-section">
          <div className="lamas-image">
            <img
              src="https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/Products/Group 59.png"
              alt="LAMAS Visual"
            />
          </div>
          <div className="lamas-text">
            <h1>To Know your Lake Health!</h1>
            <ul>
              <li>
                Assess the lake/water body health status in terms of physical attribute Degradation Index, Water area and terrestrial vegetation area
              </li>
              <li>
                Assess the lake/water body health status in terms of Water Quality Degradation Index comprising of Colour Dissolved Organic Matter, Electrical Conductivity and Green-Red Vegetation Index
              </li>
              <li>
                Continuous monitoring and update of waterbody inundation and its dynamics as specified by its user
              </li>
              <li>
                Predicting the recovery potential of the lake/waterbody and get tips to restore it
              </li>
            </ul>
            <a href="https://lamas.co.in/" target="_blank" rel="noopener noreferrer">
              https://lamas.co.in/
            </a>
          </div>
        </div>
      )}

{selectedItemType === "product" && (
  <div className="carbon-section">
    <div className="carbon-image">
      <img
        src="https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/Products/Group%2058.png"
        alt="Carbon Exchange Visual"
      />
    </div>
    <div className="carbon-text">
      <h1>Get a Comprehensive analysis & reports of Carbon Offsetting</h1>
      <ul>
        <li>
          Platform for carbon neutralization by connecting carbon emitters and carbon sequesters.
        </li>
        <li>
          Plantation Cover Analysis report indicating health status, phenological changes based on multi-temporal geospatial data analytics.
        </li>
        <li>
          Get continuous monitoring on plantation health status and growth stages through carbon exchange web application platform.
        </li>
        <li>
          In detailed field plot enumeration using validated and robust field equipment and mobile application to capture tree count, species, DBH, height etc.
        </li>
      </ul>
      <a
        href="https://carbonexchange.co.in/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://carbonexchange.co.in/
      </a>
    </div>
  </div>
)}

{selectedItemType === "geosust" && (
        <div className="geosust-section">
        <div className="geosust-image">
          <img
            src="https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/Products/Group%2061.png"
            alt="GeoSUST Visual"
          />
        </div>
        <div className="geosust-text">
          <h2>Know your Infrastructure Integrity!</h2>
          <ul>
            <li>
              <span className="icon" /> Help to identify the potential geohazard and climate risks along critical infrastructure
            </li>
            <li>
              <span className="icon" /> Get in detailed assessment on encroachment using multi temporal geospatial data
            </li>
            <li>
              <span className="icon" /> Enhance the critical infrastructure performance & integrity with real-time insights natural hazard risk and spatial analytics
            </li>
            <li>
              <span className="icon" /> Allow better collaboration and visualization by centralizing asset performance data
            </li>
          </ul>
          <a href="https://geosust.com/" target="_blank" rel="noopener noreferrer">
            https://geosust.com/
          </a>
        </div>
      </div>
      )}
{selectedItemType === "geocoast" && (
        <div className="geocoast-section">
          <div className="geocoast-image">
            <img
              src="https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/Products/Group 60.png"
              alt="GeoCoast Visual"
            />
          </div>
          <div className="geocoast-text">
            <h1>Exploring the serenity of Coastal & Marine environment</h1>
            <ul>
              <li>
                Evaluating the marine pollution levels in order to implement strategies for a cleaner and healthier marine ecosystem.
              </li>
              <li>
                Assess real-time monitoring and historical ship traffic and oil spill analysis.
              </li>
              <li>
                Suitability analysis of offshore wind energy potential zone.
              </li>
              <li>
                Efficiently track and assess shoreline change monitoring overtime.
              </li>
            </ul>
            <a href="https://geocoast.co.in/" target="_blank" rel="noopener noreferrer">
              https://geocoast.co.in/
            </a>
          </div>
        </div>
      )}

       {selectedItemType !== "geocoast" && videoUrl[selectedItemType] && (
        <div className="video-container">
          <ReactPlayer url={videoUrl[selectedItemType]} />
        </div>
      )}
      <style>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }

        .hr-line {
          width: 100%;
          height: 5px;
          background-color: #ddd;
          margin: 20px 0;
          display: flex;
          position: relative;
        }

        .hr-line::before,
        .hr-line::after {
          content: '';
          height: 100%;
          transition: width 0.3s ease-in-out;
        }

        .hr-line::after {
          width: 25%;
          background-color: #bd0324;
        }

        .hr-line.theme::before { width: 0%; }
        .hr-line.product::before { width: 25%; }
        .hr-line.geosust::before { width: 50%; }
        .hr-line.geocoast::before { width: 75%; }

        .item-buttons1 {
          display: flex;
          justify-content: center;
          margin-left: 50px;
        }

        .item-button {
          cursor: pointer;
          padding: 10px 20px;
          margin: 0 10px;
          font-size: 16px;
          color: #333;
          transition: color 0.3s ease-in-out;
        }

        .item-button.selected {
          color: #bd0324;
        }

        .carousel-container {
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }

        .carousel-image img {
          max-width: 100%;
          height: auto;
        }

        .video-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 40px;
        }

        .lamas-section {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 40px;
          margin-top: 30px;
          flex-wrap: wrap;
        }

        .lamas-image img {
          max-width: 300px;
          width: 100%;
          border-radius: 8px;
        }

        .lamas-text {
          max-width: 600px;
        }

        .lamas-text h1 {
          font-size: 22px;
          margin-bottom: 15px;
        }

        .lamas-text ul {
          list-style: none;
          padding-left: 0;
        }

        .lamas-text li {
          font-size: 15px;
          margin-bottom: 10px;
          padding-left: 25px;
          position: relative;
        }

        .lamas-text li::before {
          content: "";
          width: 10px;
          height: 10px;
          background-color: #007bff;
          border-radius: 50%;
          position: absolute;
          left: 0;
          top: 6px;
        }

        .lamas-text a {
          display: block;
          margin-top: 20px;
          font-size: 16px;
          color: #007bff;
        }

        @media (max-width: 768px) {
          .container {
            padding: 10px;
          }
          .item-buttons1 {
            display: flex;
          }
          .item-button {
            font-size: 14px;
          }
          .video-container {
            margin-top: 10px;
            width: 70%;
          }
        }

        @media (max-width: 992px) {
          .container {
            padding: 5px;
          }
          .item-button {
            font-size: 12px;
          }
          .video-container {
            margin-top: 10px;
            width: 70%;
          }
        }
          .carbon-section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.carbon-image img {
  max-width: 320px;
  width: 100%;
  border-radius: 8px;
}

.carbon-text {
  max-width: 600px;
}

.carbon-text h1 {
  font-size: 22px;
  margin-bottom: 15px;
}

.carbon-text ul {
  list-style: none;
  padding-left: 0;
}

.carbon-text li {
  font-size: 15px;
  margin-bottom: 10px;
  padding-left: 25px;
  position: relative;
}

.carbon-text li::before {
  content: "";
  width: 10px;
  height: 10px;
  background-color: green;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 6px;
}

.carbon-text a {
  display: block;
  margin-top: 20px;
  font-size: 16px;
  color: #007bff;
}
  .geosust-wrapper {
          text-align: center;
          padding: 40px 20px;
          font-family: sans-serif;
        }

        .geosust-logos {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .geosust-logos img {
          height: 40px;
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .geosust-logos img.highlight {
          opacity: 1;
          transform: scale(1.05);
        }

        .geosust-divider {
          height: 4px;
          width: 100%;
          max-width: 900px;
          margin: 10px auto 30px;
          background: linear-gradient(to right, #ccc 33%, #bd0324 0 66%, #ccc 0);
        }

        .geosust-section {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 50px;
          flex-wrap: wrap;
        }

        .geosust-image img {
          max-width: 320px;
          width: 100%;
        }

        .geosust-text {
          max-width: 600px;
          text-align: left;
        }

        .geosust-text h2 {
          font-size: 22px;
          margin-bottom: 20px;
        }

        .geosust-text ul {
          list-style: none;
          padding: 0;
        }

        .geosust-text li {
          font-size: 15px;
          margin-bottom: 15px;
          position: relative;
          padding-left: 30px;
        }

        .geosust-text li .icon {
          position: absolute;
          left: 0;
          top: 5px;
          width: 16px;
          height: 16px;
          background-image: url('https://upload.wikimedia.org/wikipedia/commons/e/e0/Check_green_icon.svg');
          background-size: contain;
          background-repeat: no-repeat;
        }

        .geosust-text a {
          display: inline-block;
          margin-top: 15px;
          color: #007bff;
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .geosust-section {
            flex-direction: column;
            align-items: center;
          }

          .geosust-text {
            text-align: center;
          }

          .geosust-text li {
            padding-left: 25px;
          }
        }.geocoast-section {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          justify-content: center;
          align-items: flex-start;
        }

        .geocoast-image img {
          max-width: 320px;
          width: 100%;
          border-radius: 8px;
        }

        .geocoast-text {
          max-width: 600px;
        }

        .geocoast-text h1 {
          font-size: 22px;
          margin-bottom: 15px;
        }

        .geocoast-text ul {
          list-style: none;
          padding-left: 0;
        }

        .geocoast-text li {
          font-size: 15px;
          margin-bottom: 10px;
          padding-left: 25px;
          position: relative;
        }

        .geocoast-text li::before {
          content: "";
          width: 10px;
          height: 10px;
          background: linear-gradient(to bottom, #007bff, #00c853);
          border-radius: 2px;
          position: absolute;
          left: 0;
          top: 6px;
        }

        .geocoast-text a {
          display: block;
          margin-top: 20px;
          font-size: 16px;
          color: #007bff;
        }

        @media (max-width: 768px) {
          .geocoast-section {
            flex-direction: column;
            align-items: center;
          }
        }
          

      `}</style>
    </div>
  );
}

export default ProductsImage;
