import React from "react";
import { Box, Typography, useMediaQuery, useTheme, Link as MuiLink } from "@mui/material";
// import bgImage from "../../assets/gcrs_images/newHomeIcons/privacy policy.png";

const OurPrivacyPolicy: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url("https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/privacy%20policy.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "start",
            flexDirection: "row",
            textAlign: "start",
          }}
        >
          {!isMobile && (
            <a href="#scroll-section" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  marginTop: "190px",
                  fontSize: "15px",
                  transform: "rotate(-90deg)",
                  color: "#fff",
                  marginRight: "140px",
                }}
              >
                SCROLL
              </Typography>
            </a>
          )}

          <Box
            sx={{
              color: "#fff",
              marginLeft: isMobile ? 0 : "70px",
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "center" : "flex-start",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: isMobile ? "15px" : "20px", color: "#fcb22f" }}
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: isMobile ? "20px" : "40px",
                fontWeight: "bold",
                padding: isMobile ? 2 : 0,
              }}
            >
              Our Privacy Terms
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box id="scroll-section" sx={{ px: isMobile ? 2 : 8, pt: 6 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Geo Climate Risk Solutions Pvt. Ltd. (GCRS) Privacy Policy
        </Typography>

        {[
          ["Introduction", `Welcome to Geo Climate Risk Solutions Pvt. Ltd. (GCRS). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.`],
          ["Data Controller",`Geo Climate Risk Solutions Pvt. Ltd. is the data controller and responsible for your personal data (collectively referred to as "GCRS", "we", "us", or "our" in this privacy policy).`],
          ["Information We Collect About You", `Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).`],
          ["", `In particular, we have collected the following categories of personal information from our users within the last twelve (12) months:`],
        ].map(([heading, para], idx) => (
          <Box key={idx} sx={{ mb: 4 }}>
            {heading && (
              <Typography variant="h5" sx={{ mb: 1 }}>
                {heading}
              </Typography>
            )}
            <Typography sx={{ fontSize: "1rem", pr: 3 }}>{para}</Typography>
          </Box>
        ))}

        <Box sx={{ mb: 4, pl: 2 }}>
          <ul>
            <li>Identity Data includes first name, last name, username or similar identifier.</li>
            <li>Contact Data includes email address and telephone numbers.</li>
            <li>
              Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.
            </li>
            <li>Usage Data includes how you use our website and services.</li>
          </ul>
        </Box>

        {[
          ["How Is Your Personal Data Collected?", "We use different methods to collect data from and about you including through:"],
          ["", ``],
        ].map(([heading, para], idx) => (
          <Box key={idx + 10} sx={{ mb: 4 }}>
            {heading && (
              <Typography variant="h5" sx={{ mb: 1 }}>
                {heading}
              </Typography>
            )}
            {para && <Typography sx={{ fontSize: "1rem", pr: 3 }}>{para}</Typography>}
          </Box>
        ))}

        <Box sx={{ mb: 4, pl: 2 }}>
          <ul>
            <li>
              Direct interactions. You may give us your Identity and Contact by filling in forms or by corresponding with us by post, phone, email, or otherwise.
            </li>
            <li>
              Automated technologies or interactions. As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions, and patterns.
            </li>
          </ul>
        </Box>

        <Typography variant="h5" sx={{ mb: 2 }}>How We Use Your Personal Data</Typography>
        <Typography sx={{ fontSize: "1rem", pr: 3, mb: 2 }}>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
        </Typography>
        <Box sx={{ pl: 2, mb: 4 }}>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>
        </Box>

        <Typography variant="h5" sx={{ mb: 2 }}>Disclosure of Your Personal Data</Typography>
        <Typography sx={{ fontSize: "1rem", pr: 3, mb: 2 }}>
          We may have to share your personal data with the parties set out below for the purposes set out in paragraph 4 above.
        </Typography>
        <Box sx={{ pl: 2, mb: 4 }}>
          <ul>
            <li>External Third Parties Service providers acting as processors who provide IT and system administration services.</li>
            <li>Professional advisers including lawyers, bankers, auditors, and insurers who provide consultancy, banking, legal, insurance, and accounting services.</li>
            <li>Regulators and other authorities who require reporting of processing activities in certain circumstances.</li>
          </ul>
        </Box>

        {[
          ["Data Security", `We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.`],
          ["Data Retention", `We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.`],
          ["Your Legal Rights", `Under certain circumstances, you have rights under data protection laws in relation to your personal data including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data, and (where the lawful ground of processing is consent) to withdraw consent.`],
          ["Contact Us", `If you have any questions about this privacy policy or our privacy practices, please contact us in the following ways: Full name of legal entity: Geo Climate Risk Solutions Pvt. Ltd.`],
        ].map(([heading, para], idx) => (
          <Box key={idx + 20} sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ mb: 1 }}>{heading}</Typography>
            <Typography sx={{ fontSize: "1rem", pr: 3 }}>{para}</Typography>
          </Box>
        ))}

        <Typography sx={{ fontSize: "1rem", pr: 3 }}>
          Email address: <MuiLink href="mailto:info@gcrs.co.in">info@gcrs.co.in</MuiLink>
        </Typography>
        <Typography sx={{ fontSize: "1rem", pr: 3 }}>
          Postal address: Innovation Valley, Hill-3, IT SEZ, Madhurawada, Visakhapatnam - 530048
        </Typography>

        <Box sx={{ mt: 4, mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>Changes to the Privacy Policy</Typography>
          <Typography sx={{ fontSize: "1rem", pr: 3 }}>
            We keep our privacy policy under regular review. This version was last updated on [Insert Date]. Historic versions can be obtained by contacting us.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default OurPrivacyPolicy;