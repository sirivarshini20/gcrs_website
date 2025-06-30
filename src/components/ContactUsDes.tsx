import React from "react";
import { Box } from "@mui/material";

const ContactUsDes: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        mt: 0,
        pt: 0,
        mb: 0,
        pb: 0,
        px: 0,
      }}
    >
      <Box
        component="iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.621365229124!2d83.38540371411398!3d17.80948348782689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b7f153e7305%3A0x1b566e748a14d77e!2sGCRS%2C%20APIS%2FNASSCOM%2C%20Innovation%20Valley%2C%20Hill%20No%203%2C%20IT%20SEZ%2C%20Madhurawada%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530048!5e0!3m2!1sen!2sbd!4v1640367566928!5m2!1sen!2sbd"
        title="GCRS Location Map"
        loading="lazy"
        allowFullScreen
        sx={{
          width: "100%",
          height: { xs: 300, sm: 450, md: 500 },
          border: "none",
          display: "block",
          margin: 0,
          padding: 0,
        }}
      />
    </Box>
  );
};

export default ContactUsDes;
