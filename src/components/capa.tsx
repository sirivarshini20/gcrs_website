import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Button, Link } from "@mui/material";

interface CapaProps {
  activeTab: string; // or use a union of all expected tab strings if you want stricter typing
}

const Capa: React.FC<CapaProps> = ({ activeTab }) => {
  const isClimateAdaptationTab = activeTab === "climate-adaptation";
  const isPolicyAndStrategyTab = activeTab === "policy-and-strategy";
  const isReverHealthTab = activeTab === "River Health";
  const isUrbanWaterTab = activeTab === "Urban Water";
  const isCoastelManagementTab = activeTab === "Coastal Management";
  const isWaterResourceManagement = activeTab === "Water Resource Management";
  const isEconomics = activeTab === "Economics";
  const isCitiesAndCommunities = activeTab === "Cities & Communities";
  const isEvaluation = activeTab === "Evaluation";
  const isLandScapeEcology = activeTab === "Landscape Ecology";
  const isDisaster = activeTab === "Disaster risk, resilience & recovery";
  const isAccreditationTab = activeTab === "Accreditation";

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
 sx={{
  ml: { xs: 2, sm: 4, md: 5 },
  mt: { xs: 2, sm: 3, md: -4 }, // 👈 reduced values here
  mb: { xs: 3, sm: 4, md: 5 },
  px: { xs: 2, sm: 4 },
}}

>

      {isClimateAdaptationTab ? (
        <>
          <Typography
  variant="h4"
  sx={{
    fontSize: { xs: "20px", sm: "23px", md: "25px" },
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  }}
>
  Climate Action
</Typography>

<Typography
  sx={{
    fontSize: { xs: "13px", sm: "14px" },
    mt: { xs: 2, sm: 3 },
    fontFamily:
      "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Noto Sans, Liberation Sans, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
  }}
>
  Our strategy integrates managing water resources, human risks,
  governance, and cultural safeguarding against climate change.
  {!isMobile && <br />}
  We enhance resilience in communities and ecosystems, focusing on
  water management, health, and social challenges.
  {!isMobile && <br />}
  Collaborating with governments and Traditional Owners, we address
  risks in natural and constructed environments. Our efforts
  {!isMobile && <br />}
  span urban and rural landscapes, emphasizing adaptation and
  resilience in diverse biophysical settings.
</Typography>

        </>
      ) : isPolicyAndStrategyTab ? (
        <>
          <Typography variant="h4" sx={{ fontSize: { xs: "20px", sm: "23px", md: "25px" } }}>

            Program and Policy Frameworks
          </Typography>
          <Typography sx={{ fontSize: { xs: "13px", sm: "14px" }, mt: { xs: 2, sm: 3 } }}>

            Our team excels in developing comprehensive policies and governance
            frameworks in green infrastructure, water resources,
            {!isMobile && <br />}
            and natural resource management, emphasizing stakeholder
            collaboration and innovative solutions. We specialize in strategic
            {!isMobile && <br />}
            visioning, bridging clients' current states with future goals, and
            aligning with organizational objectives. Our holistic approach
            {!isMobile && <br />}
            to risk management caters specifically to the natural resource
            sector, ensuring tailored, effective strategies. Additionally, we
            {!isMobile && <br />}
            facilitate collaborative decision-making processes, engaging diverse
            stakeholders from government, industry, and community
            {!isMobile && <br />}
            groups.
          </Typography>
        </>
      ) : isReverHealthTab ? (
        <>
          <Typography variant="h4" sx={{ fontSize: { xs: "20px", sm: "23px", md: "25px" } }}>

            Water Bodies Health Assessment
          </Typography>
          <Typography sx={{ fontSize: { xs: "13px", sm: "14px" }, mt: { xs: 2, sm: 3 } }}>

            Our services in water bodies health assessment include stream
            restoration, channel design, and geomorphic investigations,
            {!isMobile && <br />}
            focusing on harmonizing with natural processes for sustainable
            outcomes. We excel in river health and ecological restoration,
            {!isMobile && <br />}
            employing strategies to rejuvenate river systems for biodiversity
            and flood control, alongside comprehensive water quality
            {!isMobile && <br />}
            management. Additionally, our expertise covers hydrologic and
            hydraulic modeling and stream bank stabilization, using
            {!isMobile && <br />}
            minimal intervention techniques to enhance flood resilience and
            support ecological functions.
          </Typography>
        </>
      ) : isUrbanWaterTab ? (
        <>
          <Typography variant="h4" sx={{ fontSize: { xs: "20px", sm: "23px", md: "25px" } }}>

            Integrated Urban Water Management
          </Typography>
          <Typography sx={{ fontSize: { xs: "13px", sm: "14px" }, mt: { xs: 2, sm: 3 } }}>

            Our integrated urban water management services encompass Water
            Sensitive Urban Design (WSUD) for stormwater treatment,
            {!isMobile && <br />}
            urban waterway naturalization, and climate change adaptation
            strategies for urban cooling and liveability. We specialize in
            {!isMobile && <br />}
            Integrated Water Management (IWM) plans, hydrologic and hydraulic
            modeling, and geospatial analysis to support sustainable
            {!isMobile && <br />}
            water resource management. Additionally, our engagement and
            facilitation services involve collaborative approaches with
            {!isMobile && <br />}
            diverse stakeholders, ensuring effective water management
            solutions that benefit communities, ecosystems, and governance
            bodies.
          </Typography>
        </>
      ) : isCoastelManagementTab ? (
        <>
          <Typography variant="h4" sx={{ fontSize: { xs: "20px", sm: "23px", md: "25px" } }}>

            Coastal Areas Protection and Management
          </Typography>
          <Typography sx={{ fontSize: { xs: "13px", sm: "14px" }, mt: { xs: 2, sm: 3 } }}>

            Our coastal protection and management services include assessing
            coastal processes and landscape changes, employing
            {!isMobile && <br />}
            nature-aligned coastal engineering, and conducting comprehensive
            coastal hazard assessments. We specialize in climate
            {!isMobile && <br />}
            change adaptation and resilience, integrating knowledge of coastal
            dynamics, strategic planning, and stakeholder
            {!isMobile && <br />}
            engagement. Our approach is further enhanced by our
            engagement and facilitation services, which involve collaborative
            {!isMobile && <br />}
            decision-making with diverse stakeholders to ensure sustainable and
            effective coastal management solutions.
          </Typography>
        </>
      ) : isWaterResourceManagement ? (
        <>
          <Typography variant="h4" sx={{ fontSize: { xs: "20px", sm: "23px", md: "25px" } }}>

            Environmental water management
          </Typography>

          <Typography sx={{ fontSize: { xs: "13px", sm: "14px" }, mt: { xs: 2, sm: 3 } }}>

            GCRS excels in environmental water management, balancing
            environmental needs with consumptive demands across {!isMobile && <br />}
            various scales, from wetlands to regulated river systems. Our
            integrated approach includes catchment hydrology modeling, {!isMobile && <br />}
            climate science analysis, and advanced geospatial analysis to inform
            sustainable water resource management. Additionally, {!isMobile && <br />}
            our engagement and facilitation services involve collaborative
            decision-making with diverse stakeholders, ensuring effective {!isMobile && <br />}
            and inclusive water management strategies.
          </Typography>
        </>
      ) : isEconomics ? (
        <>
          <Typography variant="h4" sx={{ fontSize: { xs: "20px", sm: "23px", md: "25px" } }}>

            Socio-economic impact assessment
          </Typography>

          <Typography sx={{ fontSize: { xs: "13px", sm: "14px" }, mt: { xs: 2, sm: 3 } }}>

            Our socio-economic impact assessments involve comprehensive analysis
            to inform policy and investment decisions,
            {!isMobile && <br />}
            integrating cost-benefit analysis, non-market valuation, and
            considerations of environmental and social impacts.
            {!isMobile && <br />}
            We specialize in diverse sectors like water, energy, agriculture,
            and sustainable development, employing market {!isMobile && <br />}
            design and analysis to enhance resource management efficiency.
            Additionally, we provide strategic guidance on
            {!isMobile && <br />}
            pricing, cost-sharing, and co-investment strategies, ensuring
            equitable and sustainable financial frameworks for
            {!isMobile && <br />}
            various projects and services.
          </Typography>
        </>
      ) : isCitiesAndCommunities ? (
        <>
          <Typography variant="h4" sx={{ fontSize: { xs: "20px", sm: "23px", md: "25px" } }}>

            Urban spaces and inhabitants
          </Typography>

          <Typography sx={{ fontSize: { xs: "13px", sm: "14px" }, mt: { xs: 2, sm: 3 } }}>

            Our urban development services focus on creating livable,
            sustainable, and resilient cities through green and blue
            {!isMobile && <br />}
            infrastructure, urban cooling strategies, and resilience planning
            against climate change and urbanization challenges.
            {!isMobile && <br />}
            We specialize in climate change adaptation, enhancing urban
            liveability through cooling modeling and strategic tree
            {!isMobile && <br />}
            placement. Additionally, our social analysis and liveability
            planning services provide insights into community dynamics
            {!isMobile && <br />}
            and aspirations, guiding impactful strategies for open space
            development, wellbeing, and sustainable urban planning.
          </Typography>
        </>
      ) : isEvaluation ? (
        <>
          <Typography variant="h4" sx={{ fontSize: { xs: "20px", sm: "23px", md: "25px" } }}>

            Assessment
          </Typography>

          <Typography sx={{ fontSize: { xs: "13px", sm: "14px" }, mt: { xs: 2, sm: 3 } }}>

            Our assessment services include developing comprehensive evaluation
            frameworks for systematic program reviews,
            {!isMobile && <br />}
            focusing on appropriateness, efficiency, and effectiveness. We have
            a strong track record in program evaluation, {!isMobile && <br />}
            collaborating with various stakeholders to assess environmental and
            natural resource programs, emphasizing evidence-based
            {!isMobile && <br />}
            insights and organizational performance. Additionally, our expertise
            extends to data analytics and visualization, presenting
            {!isMobile && <br />}
            complex data sets clearly, and engagement and facilitation, where we
            design collaborative processes for shared decision-making {!isMobile && <br />}
            across diverse stakeholder groups.
          </Typography>
        </>
      ) : isLandScapeEcology ? (
        <>
          <Typography variant="h4" sx={{ fontSize: { xs: "20px", sm: "23px", md: "25px" } }}>

            Environmental ecology
          </Typography>

          <Typography sx={{ fontSize: { xs: "13px", sm: "14px" }, mt: { xs: 2, sm: 3 } }}>

            Our consulting team specializes in ecological strategy, employing
            advanced modeling tools and GIS for data analysis {!isMobile && <br />}
            and visualization to address climate risks and biodiversity
            conservation. We excel in monitoring and managing ecological {!isMobile && <br />}
            systems across India, providing services to various governmental and
            private sectors. Additionally, our expertise extends
            {!isMobile && <br />}
            to environmental risk management, including environmental audits,
            scoping reports, and facilitating compliance with {!isMobile && <br />}
            environmental regulations.
          </Typography>
        </>
      ) : isDisaster ? (
        <>
          <Typography variant="h4" sx={{ fontSize: { xs: "20px", sm: "23px", md: "25px" } }}>

            Disaster risk reduction
          </Typography>

          <Typography sx={{ fontSize: { xs: "13px", sm: "14px" }, mt: { xs: 2, sm: 3 } }}>

            GCRS excels in disaster risk mitigation, combining emergency
            response planning, risk assessments, and on-ground asset
            {!isMobile && <br />}
            evaluations post-disasters like fires, floods, and cyclones. Our
            approach includes community engagement, economic appraisals,
            {!isMobile && <br />}
            and evaluating the effectiveness of disaster recovery programs. We
            specialize in formulating persuasive narratives for business
            {!isMobile && <br />}
            cases and policy initiatives, focusing on investment necessity and
            value, and expertly communicate economic insights to support {!isMobile && <br />}
            decision-making in disaster resilience and recovery.
          </Typography>
        </>
      ) : isAccreditationTab ? (
        <>
          <Typography variant="h4" sx={{ fontSize: { xs: "20px", sm: "23px", md: "25px" } }}>

            Accreditation Board of CGWA
          </Typography>
          <Typography sx={{ fontSize: "18px", mt: 5, fontWeight: "bold" }}>
            Certificate of Accreditation
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            Geo Climate Risk Solution Pvt Ltd is an accredited company by
            Central Ground Water Authority to carry
            {!isMobile && <br />}
            out Hydrogeological Reporting, Groundwater Modelling, Groundwater
            Impact Analysis for Industries
            {!isMobile && <br />}
            Infrastructure, Mining Sector and Institutions.
          </Typography>
          <Box sx={{ mb: 6 }}>
  <img
    src="https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/brand/accreditation%20(1).png"
    alt="Accreditation"
    style={{ marginBottom: "10px", maxWidth: "100%", height: "auto" }}
  />
</Box>

{/* Centered Link with spacing */}
<Box sx={{ textAlign: "left", my: 4, mt:-5, color:"black" }}>
  <Link
    href={require("../../src/assets/gcrs_images/brand/Geoclimate Risk Solutions.pdf")}
    target="_blank"
    sx={{ color: "black", fontWeight: "bold", fontSize: "16px" }}
  >
    Certificate of Accreditation by Central Ground Water Authority
  </Link>
</Box>

<Box sx={{ mb: 6 }}>
  <div className="images-alignment">
    <div>
      <img
        src="https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/accrediationcertificate%201.png"
        className="spaceee"
        alt="Accreditation Certificate"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  </div>
</Box>

          <Box sx={{ mb: 3 }}>
         <Typography
  sx={{
    fontSize: { xs: "16px", sm: "18px", md: "18px" }, // Increase text size
    mb: { xs: 2, sm: 6 }, // Add margin below to create space before the image
    fontWeight: "bold", // Makes it bold without using <strong>
     fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
 
  }}
>
  Membership with
</Typography>

<img
  src={require("../../src/assets/gcrs_images/brand/image10.png")}
  alt="Membership"
  style={{ width: '100%', maxWidth: '300px', height: '100px' }}
/>
<Box sx={{ textAlign: 'center', mt: 5 }}>
  {/* Additional content can go here if needed */}
</Box>
          </Box>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Capa;
