import React from "react";
import { Box, Typography, Paper, Grid, IconButton } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { Phone, Menu as MenuIcon, Close as CloseIconMUI } from "@mui/icons-material"; // Updated Close icon import

// Utility hook to handle responsive styles
const useResponsiveStyles = () => {
  const [styles, setStyles] = React.useState(
    window.innerWidth > 768 ? largeScreenStyles : mobileStyles
  );

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setStyles(largeScreenStyles);
      } else {
        setStyles(mobileStyles);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return styles;
};

// MUI Styling (Responsive)
const largeScreenStyles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0",
    gap: "20mm",
    height: "auto",
    overflow: "hidden",
  },
  page: {
    width: "100%",
    maxWidth: "280mm",
    height: "auto",
    padding: "5%",
    backgroundColor: "#ffffff",
    color: "#333333",
    fontFamily: "Verdana, sans-serif",
    fontSize: "1rem",
    lineHeight: "1.6",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#125d81",
    marginBottom: "20px",
  },
  subHeader: {
    textAlign: "start",
    color: "#125d81",
    fontSize: "16pt",
    marginBottom: "15px",
  },
  footer: {
    textAlign: "center",
    borderTop: "1px solid #333",
    paddingTop: "10px",
    marginTop: "20px",
    fontSize: "10pt",
    color: "#666666",
  },
};

const mobileStyles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0",
    gap: "20mm",
    height: "auto",
    overflow: "hidden",
  },
  page: {
    width: "100%",
    maxWidth: "280mm",
    height: "auto",
    padding: "5%",
    backgroundColor: "#ffffff",
    color: "#333333",
    fontFamily: "Verdana, sans-serif",
    fontSize: "1rem",
    lineHeight: "1.6",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#125d81",
    marginBottom: "1rem",
    flexWrap: "wrap",
    marginTop: "70px",
    marginLeft: "10px",
  },
  subHeader: {
    textAlign: "center",
    color: "#125d81",
    fontSize: "1.2rem",
    marginBottom: "1rem",
  },
  footer: {
    textAlign: "center",
    borderTop: "1px solid #333",
    paddingTop: "0.5rem",
    marginTop: "1rem",
    fontSize: "0.8rem",
    color: "#666666",
  },
};

// Component
const A4Template = () => {
  const styles = useResponsiveStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [showBar, setShowBar] = React.useState<boolean>(true);

  return (
    <Box sx={{ ...styles.wrapper, marginTop: "60px" }}>
{/* Page 1 */}
<Box sx={{ ...styles.page, marginBottom: "20px", backgroundColor: "transparent", boxShadow: "none" }}>
  <Box>
    <Box sx={styles.header}>
      <Typography sx={{ fontSize: "9pt" }}>
        Your Sustainability Partner in{" "}
        <strong>Water Risk Management and Water Stewardship Journey</strong>
      </Typography>
      <img
        src="https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/GCRSLOgo.svg"
        alt="Logo"
        style={{ width: "140px", height: "auto" }}
      />
    </Box>

    <Box sx={styles.subHeader}>
      GCRS - Your <span style={{ fontWeight: "bold" }}>Sustainability</span> Partner in
      <div>
        <span style={{ fontWeight: "bold" }}>Water Risk Management</span> &{" "}
        <span style={{ fontWeight: "bold" }}>Water Stewardship</span> Journey
      </div>
    </Box>

    <Box sx={{ textAlign: "center", marginBottom: "1rem" }}>
      <img
        src={require("../../src/assets/gcrs_images/template/latha.jpg")}
        alt="Water Stewardship"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </Box>

    <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
      <Box sx={{ width: "48%" }}>
        <Typography color="black">
          Water is the new currency. It is a key resource in everyday
          industrial operations (within the fence) and shared resources
          (beyond the fence). Industries are taking significant steps
          towards developing water conservation, rainwater harvesting, and
          recharge capabilities.
        </Typography>
        <Typography sx={{ marginTop: "60px" }}>
          Industries are increasingly investing in water sustainability and
          stewardship initiatives to achieve a water-positive footprint
          across all operational zones.{" "}
          <span style={{ fontWeight: "bold", color: "#000000" }}>
            The core challenge lies in reliable risk assessment and scientific modeling,
            which are essential for effective planning and precise impact
            assessment to determine the Return on Investment (ROI).
          </span>
        </Typography>
      </Box>

      <Box sx={{ width: "48%" }}>
        <Typography sx={{ fontWeight: "bold", fontStyle: "italic" }}>
          GCRS offers comprehensive solutions
          to help industries map, measure, and
          model water risks, and prepare
          roadmap towards water positivity and
          sustainable stewardship.
        </Typography>
        <Typography color="black">
          We have successfully executed water risk and sustainability analysis
          for the following sectors:
        </Typography>
        <Box sx={{ textAlign: "center", marginBottom: "1rem" }}>
          <img
            src={require("../../src/assets/gcrs_images/template/template2.png")}
            alt="Water Stewardship"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
        <Typography sx={{ wordWrap: "break-word" }}>
          Cement | Food Processing | IT Sector | Power & Utilities | Oil & Gas
          | Automotive | Textile | Chemicals and Fertilizers | Paper & Pulp | Metals
          and Mining | Airports | Pharmaceuticals | Infrastructure | Hydropower
          | Drinking Water | Agriculture
        </Typography>
      </Box>
    </Box>
  </Box>
</Box>

      {/* Page 2 */}
      <Paper sx={{ ...styles.page, marginBottom: "20px", backgroundColor: "transparent", boxShadow: "none"}}>
        <Box>
          <Box sx={styles.subHeader}>
            How you benefit from our solutions!
          </Box>

          <Box sx={{ textAlign: "center", marginBottom: "1rem" }}>
            <img
              src={require("../../src/assets/gcrs_images/template/waterstewardship_strip.png")}
              alt="Water Stewardship"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <Typography sx={{ fontSize: "10pt", fontWeight: "bold" }}>
              (Source of assessment unit concept has taken from CII- Triveni Water Institute)
            </Typography>
          </Box>

          <Box sx={{ overflowX: "auto" }}>
  <table style={{ width: "100%", borderCollapse: "collapse" }}>
    <thead>
      <tr>
        <th style={{ padding: "10px", border: "1px solid #000", fontSize: "16px", fontWeight: "bold", backgroundColor: "#ffff" }}>
          GCRS Delivery Model
        </th>
        <th style={{ padding: "10px", border: "1px solid #000", fontSize: "16px", fontWeight: "bold", backgroundColor: "#ffcc66" }}>
          Within the fence (5/10km buffer zone)
        </th>
        <th style={{ padding: "10px", border: "1px solid #000", fontSize: "16px", fontWeight: "bold", backgroundColor: "#8db3e2" }}>
          Beyond the Fence
        </th>
        <th style={{ padding: "10px", border: "1px solid #000", fontSize: "16px", fontWeight: "bold", backgroundColor: "#ffff" }}>
          Key benefits
        </th>
      </tr>
    </thead>
    <tbody>
      {/* Row 1 */}
      <tr>
        <td style={{ padding: "10px", border: "1px solid #000" }}>
          <img
            src="https://gcrs.co.in/static/media/screening.c1072d7679ba6b26710f.png"
            alt="Screening & Diagnosing"
            style={{ width: "100px", marginRight: "10px" }}
          />
        </td>
        <td style={{ padding: "10px", border: "1px solid #000", backgroundColor: "#ffcc66",fontWeight: "bold" }}>
          <ul><li>Rapid Water Risk Analysis</li></ul>
        </td>
        <td style={{ padding: "10px", border: "1px solid #000", backgroundColor: "#8db3e2",fontWeight: "bold" }}>
          <ul>
            <li>Rapid Water Risk Analysis</li>
            <li>Land use patterns</li>
            <li>Climate Risk</li>
            <li>Biodiversity Risk</li>
          </ul>
        </td>
        <td style={{ padding: "10px", border: "1px solid #000", backgroundColor: "#ffff",fontWeight: "bold" }}>
          ✓ Water risk analysis reporting within and beyond the fence
        </td>
      </tr>

      {/* Row 2 */}
      <tr>
        <td style={{ padding: "10px", border: "1px solid #000" }}>
          <img
            src="https://gcrs.co.in/static/media/rootCauseAnalysis.d5e334f1810ac69e9e9c.png"
            alt="Assessment"
            style={{ width: "100px", marginRight: "10px" }}
          />
        </td>
        <td style={{ padding: "10px", border: "1px solid #000", backgroundColor: "#ffcc66",fontWeight: "bold" }}>
          <ul>
            <li>Groundwater Impact Assessment Report</li>
            <li>Comprehensive Hydrogeological Report</li>
            <li>Groundwater Modelling</li>
            <li>Surface-Runoff Modelling</li>
            <li>Stormwater drainage system analysis</li>
            <li>Water Balance assessment</li>
          </ul>
        </td>
        <td style={{ padding: "10px", border: "1px solid #000", backgroundColor: "#8db3e2",fontWeight: "bold" }}>
          <ul>
            <li>Impact on Groundwater regimes</li>
            <li>Ground Water Recharge potential zones</li>
            <li>Surface Water conservation potential locations.</li>
            <li>Surface runoff modelling & analysis</li>
            <li>Flood risk analysis</li>
            <li>Climate risk analysis at catchment scale</li>
            <li>Comprehensive hydrology report.</li>
          </ul>
        </td>
        <td style={{ padding: "10px", border: "1px solid #000", backgroundColor: "#ffff",fontWeight: "bold"}}>
          ✓ NOC from CGWA<br />
          ✓ Water Audit Certificate<br />
          ✓ Details surface and groundwater risk analysis reports<br />
          ✓ Enhance CSR activities.<br />
          ✓ Meet the regulatory compliance (CGWA/CGWB)<br />
          ✓ Potential zones for conservation and recharge
        </td>
      </tr>

      {/* Row 3 */}
      <tr>
        <td style={{ padding: "10px", border: "1px solid #000" }}>
          <img
            src="https://gcrs.co.in/static/media/Design.964680bbb75b1cc7d6fb.png"
            alt="Design"
            style={{ width: "100px", marginRight: "10px" }}
          />
        </td>
        <td style={{ padding: "10px", border: "1px solid #000", backgroundColor: "#ffcc66",fontWeight: "bold" }}>
          <ul><li>Rainwater harvesting designs</li></ul>
        </td>
        <td style={{ padding: "10px", border: "1px solid #000", backgroundColor: "#8db3e2",fontWeight: "bold" }}>
          <ul>
            <li>Water conservation & Artificial recharge structural design.</li>
            <li>Water Management plan</li>
          </ul>
        </td>
        <td style={{ padding: "10px", border: "1px solid #000", backgroundColor: "#ffff",fontWeight: "bold" }}>
          ✓ Nature based designs for Lake/Ponds rejuvenation<br />
          ✓ Road map for water positivity
        </td>
      </tr>

      {/* Row 4 */}
      <tr>
        <td style={{ padding: "10px", border: "1px solid #000" }}>
          <img
            src="https://gcrs.co.in/static/media/restorationofwatreshed.3c18a444cd860e29df2e.png"
            alt="Recharge"
            style={{ width: "100px", marginRight: "10px" }}
          />
        </td>
        <td style={{ padding: "10px", border: "1px solid #000", backgroundColor: "#ffcc66",fontWeight: "bold" }}>
          <ul><li>Rainwater harvesting & recharge</li></ul>
        </td>
        <td style={{ padding: "10px", border: "1px solid #000", backgroundColor: "#8db3e2",fontWeight: "bold" }}>
          <ul><li>Water conservation and recharge</li>
          <li>Lake/Pond rejuvenation</li></ul>
        </td>
        <td style={{ padding: "10px", border: "1px solid #000", backgroundColor: "#ffff",fontWeight: "bold" }}>
          ✓ Increase Supply-side sources<br />
          ✓ Achieved Water positivity/neutrality for sustainability<br />
          ✓ Enhance water sustainability rating, fulfilling ESG & SDG goals<br />
        </td>
      </tr>

      {/* Row 5 */}
      <tr>
        <td style={{ padding: "10px", border: "1px solid #000" }}>
          <img
            src="https://gcrs.co.in/static/media/monitoring.dfcfafacc2b7e32451a3.png"
            alt="Monitoring"
            style={{ width: "100px", marginRight: "10px" }}
          />
        </td>
        <td style={{ padding: "10px", border: "1px solid #000", backgroundColor: "#ffcc66",fontWeight: "bold" }}>
          <ul>
            <li>Groundwater levels</li>
            <li>Water flow metering</li>
            <li>ETP, STP and WTP</li>
            <li>Water Balance Monitoring</li>
          </ul>
        </td>
        <td style={{ padding: "10px", border: "1px solid #000", backgroundColor: "#8db3e2",fontWeight: "bold" }}>
          <ul>
            <li>Surface water bodies health</li>
            <li>Measure and monitoring CSR activity impacts</li>
            <li>Catchment scale monitoring</li>
          </ul>
        </td>
        <td style={{ padding: "10px", border: "1px solid #000", backgroundColor: "#ffff",fontWeight: "bold" }}>
          ✓ Increase water use efficiency and reduce the operational cost<br />
          ✓ Enhance the profitability<br />
          ✓ Certification from Alliance for Water Stewardship & CIITriveni Water Institute
        </td>
      </tr>
    </tbody>
  </table>
</Box>


          <Box sx={{ ...styles.subHeader, fontWeight: 'bold' ,mt:'20px'}}>
  Why GCRS?
</Box>


          <Typography>
           GCRS is a landscape restoration solution provider for sustainable living and thriving businesses. Through digital solutions, modelling and assessments, GCRS helps companies to achieve water sustainability and stewardship. Our team will help industries to qualify for Green Credits to promote water conservation, water harvesting, and water use efficiency or water savings, including treatment and reuse of wastewater schemes within the fence and outside the fence. GCRS is an accredited company by Central Ground Water Authority (CGWA), Ministry of Jal Shakti, Government of India, Certificate No.: CGWA/RGI/005.
          </Typography>
         <div style={{ textAlign: "center" }}>
  <a
    href="https://gcrs.co.in/static/media/GCRSYourSustainabilityPartnerinStewardshipJourneyy.20047fc5a8ad4eb57dcd.pdf"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      fontWeight: "bold",
      color: "#005b7f",
      textDecoration: "underline",
      fontSize: "20px"
    }}
  >
    Click here to Download
  </a>
</div>


          <Box sx={styles.footer}>
            <Typography sx={{ color: "black" }}>
              Email: <a href="mailto:business@gcrs.co.in">business@gcrs.co.in</a> ; Phone:{" "}
              <a href="tel:+919810708901">+91 9810708901</a> /{" "}
              <a href="tel:+917583892688">+91 7583892688</a> ; Website:{" "}
              <a href="https://gcrs.co.in/" target="_blank" rel="noopener noreferrer">
                https://gcrs.co.in/
              </a>
            </Typography>

            <Typography sx={{ color: "black" }}>
              Geo Climate Risk Solutions Pvt Ltd (CIN No.: U74930AP2014PTC095735 & GSTIN No.: 37AAFCG8137J1Z9)
            </Typography>
          </Box>  
        </Box>
      </Paper>
    </Box>
  );
};

export default A4Template;
