import React, { useState, MouseEvent } from "react";
import {
  Box,
  Typography,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface CommaProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Comma: React.FC<CommaProps> = ({ activeTab, setActiveTab }) => {
  const isReverHealthTab = activeTab === "Environment";
  const isUrbanWaterTab = activeTab === "Water footprint";
  const isCoastelManagementTab = activeTab === "Supply chain";
  const isAccreditationTab = activeTab === "Accreditation";
  const isSdgTab = activeTab === "Sdg";
  const isWomenEmpowermentTab = activeTab === "Women Empowerment";

  const [isImageVisible, setImageVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleImage = () => {
    setActiveTab("Women Empowerment");
    setImageVisible(!isImageVisible);
  };

  const handleWomenEmpowermentClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    toggleImage();
  };

  const commonTextStyle = {
    fontSize: "14px",
    mt: 3,
    textAlign: isMobile ? "center" : "left",
  };

  return (
    <Box
      sx={{
        ml: isMobile ? 0 : 12,
        mt: 3,
        mb: 15,
        display: "flex",
        flexDirection: "column",
        alignItems: isMobile ? "center" : "flex-start",
        px: isMobile ? 2 : 0,
      }}
    >
      {isReverHealthTab && (
        <>
          <Typography variant="h4" sx={{ fontSize: "25px", textAlign: isMobile ? "center" : "left" }}>
            Environment
          </Typography>
          <Typography sx={commonTextStyle}>
            Our central mission is centered on fostering a positive impact on the planet, and each project we embark
            {!isMobile && <br />} upon is geared towards generating a net benefit for the environment.
            Guided by a simple philosophy, we
            {!isMobile && <br />} only engage in work that contributes to a net positive impact.
          </Typography>
          <Typography sx={commonTextStyle}>
            Our commitment to transparency is reflected in the provision of annual reports to both our staff and shareholders.
            {!isMobile && <br />} These reports detail the nature and scope of our projects, ensuring clear communication about our initiatives.
          </Typography>
          <Typography sx={commonTextStyle}>
            Recognizing our environmental footprint, we conscientiously address the impact of our regular internal operations
            {!isMobile && <br />} and uphold our dedication to environmental preservation across all facets of our endeavours.
          </Typography>
        </>
      )}

      {isUrbanWaterTab && (
        <>
          <Typography variant="h4" sx={{ fontSize: "25px", textAlign: isMobile ? "center" : "left" }}>
            Water Footprint
          </Typography>
          <Typography sx={commonTextStyle}>
           Harnessing the power of remote sensing and Geographic Information Systems (GIS), our organization is actively
engaged in quantifying and managing its water footprint for sustainability. By employing cutting-edge technologies,
we can remotely monitor water usage patterns, identify potential areas of concern, and implement targeted strategies
to optimize water resources. Through the integration of satellite imagery and GIS mapping, we gain a comprehensive
understanding of our water consumption across different operational facets.
          </Typography>
          <Typography sx={commonTextStyle}>
            This approach allows us to pinpoint inefficiencies, track changes over time, and make informed decisions to reduce our
overall water impact. Our commitment to leveraging these advanced tools underscores our dedication to environmentally
responsible practices, ensuring a more sustainable and conscientious use of water resources in alignment with global
conservation goals.
          </Typography>
        </>
      )}

      {isCoastelManagementTab && (
        <>
          <Typography variant="h4" sx={{ fontSize: "25px", textAlign: isMobile ? "center" : "left" }}>
            Supply Chain
          </Typography>
          <Typography sx={commonTextStyle}>
            We adopt a proactive strategy to minimize risks and mitigate impacts within our supply chain. Our dedication extends
to partnering with third parties who share values aligned with our own. This collaboration encompasses joint venture
and alliance partners, clients, sub-consultants, and suppliers.
          </Typography>
          <Typography sx={commonTextStyle}>
           In conjunction with our clients, partners, and collaborators, including sub-consultants, we actively work to eradicate
the presence of modern slavery in our supply chain. Our procurement practices adhere to rigorous standards, guided
by a vision aligned with ISO 20400. We aim to seamlessly integrate sustainability into our procurement processes.
          </Typography>
        </>
      )}

      {isWomenEmpowermentTab && (
        <>
          <Typography variant="h4" sx={{ fontSize: "25px", textAlign: isMobile ? "center" : "left" }}>
            Women Empowerment
          </Typography>
          <Typography sx={commonTextStyle}>
            At Geo Climate Risk Solutions (GCRS), we are committed to fostering women's empowerment in every aspect of our business.
Recognising the vital role of women in achieving sustainable development, we actively support the Women's Empowerment Principles.
Our initiatives are focused on creating equal opportunities for women, ensuring their representation in leadership roles, and promoting
gender equality in the workplace. We believe that empowering women is not only a moral imperative but also a key driver of business
innovation and success. Join us in this crucial journey towards a more inclusive and equitable future.
          </Typography>
          <Link
            href="/commitments?tab=womenEmpowerment"
            id="Women Empowerment"
            rel="noopener noreferrer"
            onClick={handleWomenEmpowermentClick}
            sx={{
              mt: 3,
              color: "blue",
             
              display: "inline-flex",
              alignItems: "center",
              justifyContent: isMobile ? "center" : "flex-start",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            {isImageVisible ? "Hide Statement" : "Read our full Statement of Support here"}
            <img
              src={require("../../src/assets/gcrs_images/comm_icons/down-arrow (1).png")}
              alt="Down Arrow"
              style={{ width: "15px", cursor: "pointer", marginLeft: "10px" }}
            />
          </Link>

          {isImageVisible && (
            <Box sx={{ mt: 3, display: "flex", justifyContent: isMobile ? "center" : "flex-start" }}>
              <img
                src={require("../../src/assets/gcrs_images/comm_icons/CEO_Statement_of_Support by Geo Climate Risk Solutions Pvt Ltd-1.png")}
                alt="CEO Statement of Support"
                style={{ width: isMobile ? "100%" : "80%" }}
              />
            </Box>
          )}
        </>
      )}

      {isSdgTab && (
        <>
          <Typography variant="h4" sx={{ fontSize: "25px", textAlign: isMobile ? "center" : "left" }}>
            Embracing the Sustainable Development Goals
          </Typography>
          <Typography sx={commonTextStyle}>
            At Geo Climate Risk Solutions (GCRS), we believe in creating a sustainable and resilient world for future generations.
Our commitment to the United Nations Sustainable Development Goals (SDGs) is at the core of our mission. We strive
to integrate these global goals into our business strategies, projects, and everyday practices. Focusing on SDGs 6, 9, 11,
13, 14, and 15, we are dedicated to making a meaningful impact in areas ranging from clean water and sanitation to
climate action and life on land.
          </Typography>

          <Box sx={{ mt: 4, width: "100%" }}>
            {[
              {
                id: 6,
                title: "Clean Water and Sanitation",
description: `Ensuring availability and sustainable management of water and sanitation for all. GCRS focuses on
projects that enhance water quality and promote efficient water usage.`,
                img: require("../assets/gcrs_images/Home_icons/sdg6.png"),
              },
              {
                id: 9,
                title: "Industry, Innovation and Infrastructure",
                description:
                  `Building resilient infrastructure, promoting inclusive and sustainable industrialization, and fostering
innovation. GCRS integrates advanced technologies for sustainable industrial growth.`,
                img: require("../assets/gcrs_images/Home_icons/sdg9.png"),
              },
              {
                id: 11,
                title: "Sustainable Cities and Communities",
                description:
                  `Making cities inclusive, safe, resilient, and sustainable. GCRS contributes to urban planning and
management for environmental resilience.`,
                img: require("../assets/gcrs_images/Home_icons/sdg11.png"),
              },
              {
                id: 13,
                title: "Climate Action",
                description: `Taking urgent action to combat climate change and its impacts. GCRS is at the forefront of climate risk
assessment and mitigation strategies.`,
                img: require("../assets/gcrs_images/Home_icons/sdg13.png"),
              },
              {
                id: 14,
                title: "Life Below Water",
                description:
                  `Conserving and sustainably using the oceans, seas, and marine resources. GCRS's initiatives include
protecting marine ecosystems and addressing ocean pollution.`,
                img: require("../assets/gcrs_images/Home_icons/sdg14.png"),
              },
              {
                id: 15,
                title: "Life on Land",
                description:
                  `Protecting, restoring, and promoting sustainable use of terrestrial ecosystems. GCRS is committed to
land conservation and biodiversity.`,
                img: require("../assets/gcrs_images/Home_icons/sdg15.png"),
              },
            ].map((goal) => (
              <Box
                key={goal.id}
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: isMobile ? "center" : "flex-start",
                  gap: 2,
                  mt: 3,
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                <img
                  src={goal.img}
                  alt={`SDG ${goal.id}`}
                  style={{ width: "70px", height: "70px" }}
                />
                <Typography sx={{ fontSize: "14px", lineHeight: 1.6, width: isMobile ? "100%" : "50%" }}>
                  {goal.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Comma;
