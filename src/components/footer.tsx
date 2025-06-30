import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#071220",
        color: "#fff",
        px: { xs: 2, sm: 6, md: 10 },
        py: { xs: 4, sm: 4 }, // Reduced vertical padding for height
        fontFamily: "Calibri",
      }}
    >
      <Grid container spacing={4}>
        {/* Logo & Description */}
        <Grid item xs={12} sm={6} md={3}>
          <Box>
            <img
              src="https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/footer_icons/gcrslogo.svg"
              alt="GCRS Logo"
              style={{ maxHeight: 60 }}
            />
            <Typography fontWeight="bold" mt={1}>
              GEO CLIMATE RISK SOLUTIONS PVT LTD
            </Typography>
            <Typography fontStyle="italic" fontSize="13px" mt={0.5}>
              ....for sustainability
            </Typography>
            <Typography fontSize="14px" mt={1}>
              GCRS is a solution provider, consultancy, and advisory services firm that focuses on environmental and sustainability challenges.
            </Typography>

            {/* Social Icons */}
            <Box mt={2} display="flex" gap={1}>
              <a href="https://instagram.com/gcrs_2014" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" width="30" alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/company/geo-climate-risk-solutions-pvt-ltd/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="30" alt="LinkedIn" />
              </a>
              <a href="https://www.youtube.com/channel/UC3pBDmo664dV8QAjYsSRpfA" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174883.png" width="30" alt="YouTube" />
              </a>
            </Box>
          </Box>
        </Grid>

        {/* Information */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography fontWeight="bold" fontSize="18px" mb={1}>
            Information
          </Typography>
          <Box sx={{ width: "70%", borderBottom: "2px solid #fff", mb: 2 }} />
          {[
            "CIN No: U74930AP2014PTC095735",
            "GSTIN: 37AAFCG8137J1Z9",
            "Start-up India Recognised: DIPP3449",
            "ISO Certified: ISO 9001:2015",
            "Unique Entity ID: S6BYJWKHNMW8"
          ].map((info, i) => (
            <Typography fontSize="14px" key={i} sx={{ mb: 1, display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: 8 }}>{">>"}</span> {info}
            </Typography>
          ))}
        </Grid>

        {/* Important Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography fontWeight="bold" fontSize="18px" mb={1}>
            Important Links
          </Typography>
          <Box sx={{ width: "70%", borderBottom: "2px solid #fff", mb: 2 }} />
          {[
            { text: "Terms and Conditions", url: "/" },
            { text: "Privacy Policy", url: "/OurPrivacyPolicy" },
            { text: "Commitments", url: "/Commitments" },
            { text: "Clients", url: "/Clients" },
            { text: "Accreditation", url: "/Capabilities" }
          ].map((link, i) => (
            <Typography fontSize="14px" key={i} sx={{ mb: 1, display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: 8 }}>{">>"}</span>
              <Link href={link.url} color="inherit" underline="hover">
                {link.text}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* Contact Us */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography fontWeight="bold" fontSize="18px" mb={1}>
            Contact Us
          </Typography>
          <Box sx={{ width: "70%", borderBottom: "2px solid #fff", mb: 2 }} />

          <Box display="flex" alignItems="center" mb={1}>
            <MailOutlineIcon fontSize="small" sx={{ mr: 1 }} />
            <Typography fontSize="14px">business@gcrs.co.in</Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={1}>
            <MailOutlineIcon fontSize="small" sx={{ mr: 1 }} />
            <Typography fontSize="14px">info@gcrs.co.in</Typography>
          </Box>
          <Box display="flex" alignItems="flex-start" mb={1}>
            <LocationOnIcon fontSize="small" sx={{ mr: 1, mt: "2px" }} />
            <Typography fontSize="14px">
              Innovation Valley, Hill-3, IT SEZ, Madhurawada, Visakhapatnam - 530048
            </Typography>
          </Box>
          <Box display="flex" alignItems="flex-start">
            <LocationOnIcon fontSize="small" sx={{ mr: 1, mt: "2px" }} />
            <Typography fontSize="14px">
              TP-125, First floor, Technopark@iitk, Phase-I Building, R&D Centre, Indian Institute of Technology (IIT) Kanpur, Uttar Pradesh – 208016
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box mt={4} textAlign="center">
        <Typography fontSize="13px">
          Copyright © 2023 Geo Climate Risk Solutions Pvt. Ltd.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
