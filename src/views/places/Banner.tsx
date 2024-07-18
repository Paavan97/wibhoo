import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Banner: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "50px",
        flexDirection: { md: "row", xs: "column-reverse" },
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "", width: { md: "45%", xs: "100%" } }}>
        <img
          style={{ width: "100%" }}
          src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/703c1bee-ead1-4f04-ac05-50af6fb0ff9c.png"
        ></img>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: { md: "45%", xs: "100%" },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { md: "start", xs: "center" },
          height: "auto",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            color: "#9cf5b8",
            fontSize: { md: "4em", xs: "3em" },
            margin: "0px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Discover Inspiring & Creative Places
        </Box>
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "1.5em", md: "1.5em" },
            margin: "0px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Explore sustainable destinations and artistic venues that inspire
          creativity and foster community
        </Typography>
        <Button
          sx={{
            backgroundColor: "rgb(68, 222, 125)",
            textDecoration: "none",
            color: "black",
            fontSize: "20px",
            fontWeight: "600",
            borderRadius: "10px",
            padding: "8px 16px",
          }}
        >
          Explore Now
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
