import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import post1 from "../assets/place_post_crousele_1.png";
import post2 from "../assets/place_post_crousel_2.png";
import post4 from "../assets/place_post_crousel_4.png";
import post3 from "../assets/place_post_crousel_3.png";

const poster = [
  {
    id: 1,
    title: "Vibrant Cultural Hubs",
    image: `${post1}`,
    description:
      "Explore diverse cultural hotspots and vibrant neighborhoods, each with its own unique charm and character",
  },
  {
    id: 2,
    title: "Artistic Venues",
    image: `${post2}`,
    description:
      "Immerse yourself in creativity at curated art galleries, studios, and performance spaces, showcasing local talent and innovative expressions.",
  },
  {
    id: 3,
    title: "Community Gathering Spaces",
    image: `${post3}`,
    description:
      "Discover communal spaces and event venues designed to bring people together, fostering connections and collaboration.",
  },
  {
    id: 4,
    title: "Natural Retreats",
    image: `${post4}`,
    description:
      "Escape to tranquil parks, scenic gardens, and serene landscapes, offering moments of relaxation and rejuvenation amidst natures beauty.",
  },
];

const PosterCrousel: React.FC = () => {
  const [currentPoster, setCurrentPoster] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPoster((currentPoster) => {
        if (currentPoster === 3) return 0;
        return currentPoster + 1;
      });
    }, 2000);
    return () => clearInterval(interval);
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        gap: "20px",
      }}
    >
      <Typography
        sx={{
          fontSize: "2em",
          color: "#9cf5b8",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        You will Find here
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: { md: "space-around" },
          alignItems: { xs: "center" },
          gap: { xs: "20px" },
          maxWidth: "1200px",
        }}
      >
        <Box sx={{ width: { xs: "90%", md: "45%" } }}>
          <img
            style={{ width: "100%" }}
            src={`${poster[currentPoster].image}`}
          ></img>
        </Box>
        <Box sx={{ width: { xs: "90%", md: "35%" } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              gap: "5px",
              paddingX: "8px",
              paddingY: "8px",
              borderRadius: "15px",
              backgroundColor: `${currentPoster === 0 ? "#1C523A" : ""}`,
            }}
          >
            <Typography variant="h5">{poster[0].title}</Typography>
            {currentPoster === 0 && (
              <Typography variant="body1" sx={{ textAlign: "left" }}>
                {poster[0].description}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              gap: "5px",
              paddingX: "8px",
              paddingY: "8px",
              borderRadius: "15px",
              backgroundColor: `${currentPoster === 1 ? "#1C523A" : ""}`,
            }}
          >
            <Typography variant="h5">{poster[1].title}</Typography>
            {currentPoster === 1 && (
              <Typography variant="body1" sx={{ textAlign: "left" }}>
                {poster[1].description}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              gap: "5px",
              paddingX: "8px",
              paddingY: "8px",
              borderRadius: "15px",
              backgroundColor: `${currentPoster === 2 ? "#1C523A" : ""}`,
            }}
          >
            <Typography variant="h5">{poster[2].title}</Typography>
            {currentPoster === 2 && (
              <Typography variant="body1" sx={{ textAlign: "left" }}>
                {poster[2].description}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              gap: "5px",
              paddingX: "8px",
              paddingY: "8px",
              borderRadius: "15px",
              backgroundColor: `${currentPoster === 3 ? "#1C523A" : ""}`,
            }}
          >
            <Typography variant="h5">{poster[3].title}</Typography>
            {currentPoster === 3 && (
              <Typography variant="body1" sx={{ textAlign: "left" }}>
                {poster[3].description}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PosterCrousel;
