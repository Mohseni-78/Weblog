import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Typography
        component="div"
        variant="div"
        bgcolor="#f7f7f7"
        textAlign="center"
        padding={1}
        mt={10}
        color="primary"
      >
        Copy Right
      </Typography>
    </footer>
  );
};

export default Footer;
