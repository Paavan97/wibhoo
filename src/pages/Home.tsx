import React from "react";
import IntroSection from "../views/home/IntroSection";
import { Box } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 1200, margin: '0 auto' }}>
    <IntroSection/>
  </Box>
  );
};

export default Home;
