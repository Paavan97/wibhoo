import { Box, Typography } from "@mui/material";
import React from "react";

const WhatIsWibhoo: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "90%",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;",
        }}
      >
        <Typography sx={{ fontSize: "35px", color: "#023020" }}>
          Our Story
        </Typography>

        <Box sx={{ marginTop: "50px" }}>
          <Typography sx={{ fontSize: "25px" }}>What is Wibhoo?</Typography>
          <Typography>
            Wibhoo is your gateway to effortless conscious living. We've curated
            a diverse ecosystem where sustainability meets convenience, offering
            everything you need to embrace a mindful lifestyle. From
            eco-conscious products to practical services, rejuvenating
            destinations, and inspiring communities, Wibhoo makes it easy for
            you to make a positive impact on the planet and connect with
            like-minded individuals. With a focus on accessibility and
            collaboration, we're committed to empowering you to live more
            sustainably, one mindful choice at a time.
          </Typography>
        </Box>
        <Box sx={{ marginTop: "30px" }}>
          <Typography sx={{ fontSize: "25px" }}>
            How do we see the world after Wibhoo ?
          </Typography>
          <Typography>
            Our vision at Wibhoo is to create a world where conscious living is
            not just a choice, but a way of life embraced by all. We envision a
            future where sustainability is seamlessly integrated into every
            aspect of daily life, where individuals are empowered to make
            informed and ethical choices that benefit both themselves and the
            planet. Through Wibhoo, we aspire to foster a global community that
            prioritizes environmental stewardship, social responsibility, and
            holistic well-being. We envision a world where every action, no
            matter how small, contributes to a brighter, more sustainable future
            for generations to come.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatIsWibhoo;
