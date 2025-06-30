import React, { useState, useEffect } from "react";
// Define the types for the styles (using React.CSSProperties for inline styles)
interface Styles {
  wrapper: React.CSSProperties;
  page: React.CSSProperties;
  title: React.CSSProperties;
  main: React.CSSProperties;
  section: React.CSSProperties;
  text: React.CSSProperties;
  keyFeaturesSection: React.CSSProperties;
  subTitle: React.CSSProperties;
  image1: React.CSSProperties;
  header: React.CSSProperties;
  imageSection2: React.CSSProperties;
  contentWrapper: React.CSSProperties;
  textSection: React.CSSProperties;
  imageSection: React.CSSProperties;
  image: React.CSSProperties;
  image5: React.CSSProperties;
  footer: React.CSSProperties;
  container: React.CSSProperties;
  table: React.CSSProperties;
  th: React.CSSProperties;
  td: React.CSSProperties;
  link: React.CSSProperties;
  withinFence: React.CSSProperties;
  sectionIcon: React.CSSProperties; 
  keyBenefits: React.CSSProperties;
  beyondFence: React.CSSProperties;
  list: React.CSSProperties;
  priceCell: React.CSSProperties;
  header3: React.CSSProperties;
}

// Define the large screen styles
const largeScreenStyles: Styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0",
    gap: "20mm",
    height: "290vh",
    overflow: "hidden",
  },
  page: {
    width: "280mm",
    height: "450mm",
    margin: "10mm auto",
    padding:  "20mm",
    fontFamily: "Arial, sans-serif",
    fontSize: "12px",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: "25px",
    fontWeight: "bold",
    margin:  "0",
    textDecoration: "underline",
  },
  main: {
    flex: 1,
  },
  section: {
    marginBottom: "20px",
  },
  text: {
    lineHeight: "1.6",
    textAlign: "justify",
    fontSize:  "16px",
  },
  keyFeaturesSection: {
    paddingTop: "10px",
  },
  subTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#0eb8da",
  },
  image1: {
    width: "80%",
    height: "auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#0eb8da",
    marginBottom: "20px",
  },
  imageSection2: {
    flex: 1,
    textAlign: "center",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "1200px",
  },
  textSection: {
    flex: 1,
    paddingRight: "20px",
    textAlign: "left",
    fontSize: "16px",
  },
  imageSection: {
    flex: 1,
    textAlign: "center",
  },
  image: {
    maxWidth: "25%",
    height: "auto",
    borderRadius: "8px",
    width:  '100%'
  },
  image5: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  footer: {
    textAlign: "center",
    fontSize:"14px",
    color: "#000000",
    marginTop: "40px",
    borderTop: "1px solid #ccc",
    paddingTop: "10px",
  },
  container: {
  padding: "8px",
  fontFamily: "Arial, sans-serif",
  marginTop: "15px",
},

table: {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "11.5px",
},

th: {
  backgroundColor: "#fff",
  color: "black",
  padding: "5px",
  border: "1px solid #000",
  fontSize: "11.5px",
},

td: {
  border: "1px solid #000",
  padding: "5px",
  fontSize: "11.5px",
  verticalAlign: "top",
  lineHeight: "1.3",
},

  header3: {
    backgroundColor: "#ffff",
    fontWeight: "bold",
  },
  withinFence: {
    backgroundColor: "#ffcc66",
  },
  beyondFence: {
    backgroundColor: "#8db3e2",
  },
  keyBenefits: {
    backgroundColor: "#ffff",
  },
  sectionIcon: {
    marginRight: "10px",
    width: "100px",
  },
  list: {
    listStyleType: "disc",
    marginLeft: "20px",
  },
  priceCell: {
    padding: "10px",
    fontSize: "12px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
  },
   link: {
    color: "#125d81", // example link color
    textDecoration: "none",
  },
};

// Define the mobile screen styles
const mobileStyles: Styles = {
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
    margin: "10px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    fontSize: "12px",
    backgroundColor: "#fff",
  },
  title: {
    fontSize:  "25px",
    fontWeight: "bold",
    margin:  "0 auto 10px auto",
    textDecoration: "underline",
    textAlign: "center",
    wordWrap: "break-word",
    marginTop: "30px",
  },
  main: {
    flex: 1,
  },
  section: {
    marginBottom: "20px",
  },
  text: {
    lineHeight: "1.6",
    textAlign: "justify",
    fontSize:  "16px",
    padding: "0 10px",
  },
  keyFeaturesSection: {
    paddingTop: "10px",
  },
  subTitle: {
    fontSize:  "16px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#0eb8da",
    textAlign: "center",
  },
  image1: {
    width:  "100%",
    maxWidth: "500px",
    height: "auto",
    display: "block",
    margin: "10px auto",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#0eb8da",
    marginBottom: "20px",
    textAlign: "center",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  textSection: {
    flex: 1,
    padding: "0 10px",
    textAlign: "center",
    fontSize: "14px",
  },
  imageSection: {
    flex: 1,
    textAlign: "center",
    marginBottom: "10px",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    marginBottom: "10px",
  },
  footer: {
    textAlign: "center",
    fontSize: "12px",
    color: "#000000",
    marginTop: "20px",
    borderTop: "1px solid #ccc",
    paddingTop: "10px",
  },
  container: {
    padding: "10px",
    fontFamily: "Arial, sans-serif",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "12px",
  },
  th: {
    backgroundColor: "#ffff",
    color: "black",
    padding: "8px",
    border: "1px solid #000",
    fontSize: "12px",
  },
  td: {
    border: "1px solid #000",
    padding: "8px",
    fontSize: "12px",
    verticalAlign: "top",
  },
  image5: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  keyBenefits: {},
  beyondFence: {},
  list: {},
  priceCell: {},
  header3: {  },
  imageSection2: {
    flex: 1,
    textAlign: "center",
  },
  link: {
    color: "#125d81", // Example link color
    textDecoration: "none",
  },
  withinFence: {
    backgroundColor: "#ffcc66",
  },
  sectionIcon: {
    marginRight: "10px",
    width: "100px",
  },
};

// Define the hook for responsive styling
const useResponsiveStyles = (): Styles => {
  const [styles, setStyles] = useState<Styles>(window.innerWidth > 768 ? largeScreenStyles : mobileStyles);

  useEffect(() => {
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

// Define the main component
const A4TemplateLamas: React.FC = () => {
  const styles = useResponsiveStyles();

  return (
    <div style={{ ...styles.wrapper, marginTop: "40px" }}>
      <div style={styles.page}>
        <div style={styles.header}>
          <h1 style={styles.title}>
            Join us in Urban Lake Restoration for a Sustainable Future for our
            Cities
          </h1>
          <img
            src={require("../../src/assets/gcrs_images/template/lamas_logo.png")}
            alt="Logo"
            style={styles.image}
          />
        </div>

        <main style={styles.main}>
          <section style={styles.section}>
            <p style={styles.text}>
              Geo Climate Risk Solutions Pvt. Ltd. (GCRS) seeks support from
              CSR programs to collaborate on the shared mission of restoring
              degraded urban lakes through LAMAS (Lake Management System)—a
              complete solution for sustainable lake rejuvenation. Recognized as
              an Standout City Champion of 2024 by Josh Talks, Omidyar Network
              India, and IIM Calcutta, GCRS was also a Titan Design Impact Award
              finalist in the water sector and received the AMRUT 2.0 Award for
              urban water body rejuvenation. As a GAIL-backed startup, GCRS is
              at the forefront of sustainable water management and urban
              ecosystem revitalization, providing innovative solutions for
              impactful CSR initiatives.
            </p>
          </section>

          <section style={styles.keyFeaturesSection}>
            <div style={styles.contentWrapper}>
              <div style={styles.textSection}>
                <h2 style={styles.subTitle}>Key Features of LAMAS</h2>
                <ul style={styles.list}>
                  <li>
                    Comprehensive Lake Health Diagnostics: Uses geospatial, AI,
                    and ML technologies to assess lake conditions, including
                    physical parameters, water quality, and ecosystem health.
                  </li>
                  <li>
                    Continuous Monitoring: Real-time tracking of water level,
                    water quality changes, and ecosystem disturbances via
                    sensor-based and satellite monitoring.
                  </li>
                  <li>
                    Data-Driven Decision Support: Offers detailed visualizations
                    and reporting to support management decisions. Encroachment
                    detection aids in preventing unauthorized developments.
                  </li>
                  <li>
                    Enhance Urban Water Bodies: Contribute to the sustainable
                    rejuvenation of urban lakes, supporting biodiversity and
                    improved community access to green spaces.
                  </li>
                </ul>
              </div>
              <div style={styles.imageSection}>
                <img
                  src={require("../../src/assets/gcrs_images/template/lamas_earthinfography.png")}
                  alt="Water Stewardship"
                  style={styles.image1}
                />
              </div>
            </div>
          </section>

          <section style={styles.section}>
            <h2 style={styles.subTitle}>
              Why Choose LAMAS for CSR-Funded Lake Restoration?
            </h2>
            <div style={styles.contentWrapper}>
              <div style={styles.textSection}>
                <ul style={styles.list}>
                  <li>
                    End-to-End Restoration: Through a 5-phase approach, LAMAS
                    covers diagnostics, scientific assessments, restoration
                    planning, implementation, and ongoing monitoring.
                  </li>
                  <li>
                    Community and Environmental Impact: Directly supports
                    groundwater recharge, biodiversity conservation, and
                    improved water quality, benefiting surrounding communities.
                  </li>
                  <li>
                    Enhance Urban Water Bodies: Contribute to the sustainable
                    rejuvenation of urban lakes, supporting biodiversity and
                    improved community access to green spaces.
                  </li>
                </ul>
              </div>
            </div>
            <div style={styles.imageSection2}>
              <img
                src="https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/home_icons_new/FifthStep.svg"
                alt="Water Stewardship"
                style={styles.image5}
              />
            </div>
          </section>

          <section style={styles.section}>
            <h2 style={styles.subTitle}>Proven Credentials:</h2>
            <div style={styles.textSection}>
              <ul style={styles.list}>
                <li>
                  Selected by the Ministry of Housing and Urban Affairs under
                  AMRUT 2.0 to monitor lakes in Ayodhya City, Uttar Pradesh.
                </li>
                <li>
                  Implemented by Hyderabad Metropolitan Development Authority
                  (HMDA) for continuously monitoring all the lakes in Hyderabad
                  region.
                </li>
                <li>
                  Empanelled by the Chhattisgarh State Wetland Authority for
                  comprehensive wetland monitoring and management across the
                  state.
                </li>
                <li>
                  Deployed by Indian National Trust for Arts, Culture, and
                  Heritage (INTACH) for monitoring a few heritage lakes in Mysore
                  region.
                </li>
                <li>
                  Deployed across Dal-Nigeen Lake and Manasbal Lake in Jammu & Kashmir for real-time monitoring.
                </li>
              </ul>
            </div>
          </section>

          <div
            className="image-row"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "15px",
              margin: "0 auto",
            }}
          >
            <img
              src={require("../../src/assets/gcrs_images/partners_investers/Amrut.svg").default}
              alt="Amrut"
            />
            <img
              src={require("../../src/assets/gcrs_images/partners_investers/state_wetland.svg").default}
              alt="State Wetland"
            />
            <img
              src={require("../../src/assets/gcrs_images/partners_investers/cgwa.svg").default}
              alt="CGWA"
            />
            <img
              src={require("../../src/assets/gcrs_images/partners_investers/member_of_aws.svg").default}
              alt="AWS Member"
            />
            <img
              src={require("../../src/assets/gcrs_images/partners_investers/city_champions.svg").default}
              alt="City Champions"
            />
            <img
              src={require("../../src/assets/gcrs_images/partners_investers/member_of_iah.svg").default}
              alt="IAH Member"
            />
            <img
              src={require("../../src/assets/gcrs_images/partners_investers/iwa.svg").default}
              alt="IWA"
            />
            <img
              src={require("../../src/assets/gcrs_images/partners_investers/R&D.svg").default}
              alt="R&D"
            />
            <img
              src={require("../../src/assets/gcrs_images/partners_investers/Gail1.svg").default}
              alt="Gail"
            />
            <img
              src={require("../../src/assets/gcrs_images/partners_investers/member_of_hs.svg").default}
              alt="HS Member"
            />
          </div>
        </main>

        <div style={styles.container}>
  <h1 style={styles.title}>Pricing of 5-Phase Process</h1>
  <table style={styles.table}>
    <thead>
      <tr>
        <th style={styles.th}>Phase</th>
        <th style={styles.th}>Activities</th>
        <th style={styles.th}>Pricing Model</th>
        <th style={styles.th}>Price</th>
      </tr>
    </thead>
    <tbody>
      {/* Row 1 */}
      <tr>
        <td style={styles.td}>Screening/Diagnosis</td>
        <td style={styles.td}>
          <ul style={styles.list}>
            <li>
              Screening the physical and water quality parameters of the lake to find out the degradation status and recovery potential
            </li>
            <li>Spatial and temporal analysis</li>
          </ul>
        </td>
        <td style={styles.td}>Annual subscription cost for LAMAS per hectare</td>
        <td style={styles.td} rowSpan={6}>
          <div style={styles.priceCell}>
            Contact us for more information: <br />
            <b>Email:</b> <a href="mailto:business@gcrs.co.in" style={styles.link}>business@gcrs.co.in</a>,{" "}
            <a href="mailto:prasad.babu@gcrs.co.in" style={styles.link}>prasad.babu@gcrs.co.in</a>,{" "}
            <a href="mailto:suraj@gcrs.co.in" style={styles.link}>suraj@gcrs.co.in</a>
            <br />
            <b>Contact No:</b> <br />
            Prasad Babu: +91-9810708901 <br />
            Suraj Nanneti: +91-7583892688
          </div>
        </td>
      </tr>

      {/* Row 2 */}
      <tr>
        <td style={styles.td}>Detailed Scientific Assessment</td>
        <td style={styles.td}>
          <ul style={styles.list}>
            <li>Conduct hydrological and hydrogeological assessments</li>
            <li>Evaluate historical and future submergence and flood intensities of the lake</li>
            <li>Develop flood inundation maps and propose management and mitigation strategies</li>
          </ul>
        </td>
        <td style={styles.td}>Fixed price per catchment/ watershed</td>
      </tr>

      {/* Row 3 */}
      <tr>
        <td style={styles.td}>Design of Restoration</td>
        <td style={styles.td}>
          <ul style={styles.list}>
            <li>Design of restoration and management plans</li>
            <li>Includes the following components:</li>
            <ul>
              <li>Conceptual design</li>
              <li>NBS solutions</li>
              <li>Detailed design</li>
              <li>BOQ</li>
              <li>Civil Designs</li>
              <li>Any additional components</li>
            </ul>
          </ul>
        </td>
        <td style={styles.td}>Pricing to be determined on case-to-case basis depending upon the services offered</td>
      </tr>

      {/* Row 4: Restoration */}
      <tr>
        <td style={styles.td}>Restoration</td>
        <td style={styles.td}>
          <ul style={styles.list}>
            <li>On ground restoration (catchment treatment)</li>
            <li>
              Consists of activities like – removal of obstacles from feeding
              channels, construction of bunds, construction of filtration structures
              along feeding channels using NBS methods, removal of silt, etc.
            </li>
          </ul>
        </td>
        <td style={styles.td}>Price to be determined on case-to-case basis</td>
      </tr>

      {/* Row 5: Monitoring */}
      <tr>
        <td style={styles.td}>Monitoring</td>
        <td style={styles.td}>
          <ul style={styles.list}>
            <li>
              Continuous monitoring of the lake health parameters after restorative
              efforts
            </li>
          </ul>
        </td>
        <td style={styles.td}>Annual subscription cost for LAMAS per hectare</td>
      </tr>
    </tbody>
  </table>
</div>


        <div style={{ textAlign: "center" }}>
          <a
            href={require("../../src/assets/gcrs_images/template/LAMAS_One_Pager_CSR_V2.pdf")}
            id="accred_link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#125d81", fontWeight: "bold", fontSize: "20px" }}
          >
            Click here to Download
          </a>
        </div>

        <footer style={styles.footer}>
          <p>
            For further details or a demo, contact us at{" "}
            <a href="mailto:business@gcrs.co.in">business@gcrs.co.in</a>
          </p>
          <p>
            Visit <a href="https://lamas.co.in" target="_blank" rel="noopener noreferrer">https://lamas.co.in</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default A4TemplateLamas;
