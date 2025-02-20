import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import OutlinedTimeline from "../views/whatIsWibhoo/TimeLine";
import GoalsImageGrid from "../views/whatIsWibhoo/GoalAlignment";

const WhatIsWibhoo: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "justify",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          padding: "20px",
          color: "white",
          borderRadius: "20px",
          gap: "30px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#8FE1AA",
            marginY: { xs: "20px", md: "30px" },
          }}
        >
          Our Story
        </Typography>

        <Box sx={{ marginTop: "10px" }}>
          <Typography
            variant="h4"
            sx={{
              marginBottom: "10px",
              color: "#8FE1AA",
            }}
          >
            What is Wibhoo?
          </Typography>
          <Typography variant="h6" sx={{ lineHeight: "2" }}>
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
          <Typography
            variant="h4"
            sx={{
              marginBottom: "10px",
              color: "#8FE1AA",
            }}
          >
            How do we see the world after Wibhoo ?
          </Typography>
          <Typography variant="h6" sx={{ lineHeight: "2" }}>
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

      {/* --------------- */}
      <Box
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#8FE1AA",
            marginTop: "48px",
          }}
        >
          Potential Impact in a Upcoming Year
        </Typography>
        <Typography
          variant="h6"
          sx={{
            width: { xs: "100%", md: "80%" },
            textAlign: "center",
            lineHeight: "2",
          }}
        >
          Measuring impact is crucial as it directs us towards achieving our
          ideal outcomes. Impact is the single most important factor that shapes
          our journey towards a better future.
        </Typography>
        <OutlinedTimeline />

        <hr style={{ width: "100%" }}></hr>

        <Box sx={{ marginTop: "50px" }}>
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "32px" },
              fontWeight: "600",
              marginBottom: "10px",
              color: "#8FE1AA",
              textAlign: "center",
            }}
          >
            Sustainable Development Goals we align with
          </Typography>
        </Box>
        {/* <Box>
        </Box> */}
        <GoalsImageGrid />
      </Box>
    </Box>
  );
};

export default WhatIsWibhoo;
