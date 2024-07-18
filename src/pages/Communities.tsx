import { Box, Divider, InputBase } from "@mui/material";
import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";

const Communities: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        gap: "50px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "fit-content",
            width: { md: "45%", xs: "100%" },
          }}
        >
          <img
            style={{ width: "100%" }}
            src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/bc29e66f-5d42-4695-82b6-8e2db273abdf.png"
            alt="communityCentricimage"
          />
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
              fontSize: "3em",
              margin: "0px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Meet & Join like-minded people
          </Box>
          <Box sx={{ fontSize: "18px", color: "white" }}>
            Discover engaging events and vibrant communities that celebrate art,
            culture, and conscious living
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: { xs: "center", md: "flex-start" },
              flexWrap: "wrap",
              gap: "20px",
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <Box
              sx={{
                width: { sm: "45%", xs: "100%" },
                gap: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ fontSize: "40px", color: "#9cf5b8" }}>
                <i className="fa-solid fa-paintbrush"></i>
              </Box>
              <Box sx={{ color: "White", fontSize: "20px", fontWeight: "700" }}>
                Artistic Exploration
              </Box>
              <Box sx={{ color: "white", fontSize: "18px" }}>
                Immerse yourself in a world of creativity with Exhibitions,
                Workshops, and Performances
              </Box>
            </Box>
            <Box
              sx={{
                width: { sm: "45%", xs: "100%" },
                gap: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ fontSize: "40px", color: "#9cf5b8" }}>
                <i className="fa-solid fa-hands-asl-interpreting"></i>
              </Box>
              <Box sx={{ color: "White", fontSize: "20px", fontWeight: "700" }}>
                Holistic Wellness
              </Box>
              <Box sx={{ color: "white", fontSize: "18px" }}>
                Join wellness retreats that promote balance and harmony for
                mind, body, and soul.
              </Box>
            </Box>
            <Box
              sx={{
                width: { sm: "45%", xs: "100%" },
                gap: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ fontSize: "40px", color: "#9cf5b8" }}>
                <i className="fa-solid fa-leaf"></i>
              </Box>
              <Box sx={{ color: "White", fontSize: "20px", fontWeight: "700" }}>
                Sustainable Living
              </Box>
              <Box sx={{ color: "white", fontSize: "18px" }}>
                Engage in eco-friendly initiatives, and Social groups to empower
                the community
              </Box>
            </Box>
            <Box
              sx={{
                width: { sm: "45%", xs: "100%" },
                gap: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ fontSize: "40px", color: "#9cf5b8" }}>
                <i className="fa-solid fa-fan"></i>
              </Box>
              <Box sx={{ color: "White", fontSize: "20px", fontWeight: "700" }}>
                Creative Collaboration
              </Box>
              <Box sx={{ color: "white", fontSize: "18px" }}>
                Collaborate with artists, entrepreneurs, and changemakers to
                drive innovation
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: "50px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                color: "#9cf5b8",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              What you'll get
            </Box>
            <Box sx={{ width: "40px", fontSize: "30px", color: "#9cf5b8" }}>
              <i className="fa-solid fa-arrow-right"></i>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "30px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Box sx={{ fontSize: "2em", color: "#9cf5b8" }}>
          Upcoming Sustainable Events and Workshops
        </Box>
        <Box sx={{ fontSize: "14px", color: "white" }}>ALL CATEGORIES</Box>
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "5px",
          }}
        >
          <SearchIcon sx={{ fontSize: { xs: "22px", md: "32px" } }} />
          <InputBase
            placeholder="Type here to Search"
            sx={{
              width: "100%",
              height: { xs: "28px", md: "40px" },
              color: "black",
              paddingLeft: "10px",
              fontSize: { xs: "22px", md: "26px" },
              borderRadius: "10px",
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>
        <Box sx={{ padding: "30px 0px", color: "gray" }}>
          No results found, try adjusting your search and filters.
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "30px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Box sx={{ fontSize: "2em", color: "#9cf5b8" }}>
          Explore the Groups & Communities
        </Box>
        <Box sx={{ fontSize: "14px", color: "white" }}>ALL CATEGORIES</Box>
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "5px",
          }}
        >
          <SearchIcon sx={{ fontSize: { xs: "22px", md: "32px" } }} />
          <InputBase
            placeholder="Type here to Search"
            sx={{
              width: "100%",
              height: { xs: "28px", md: "40px" },
              color: "black",
              paddingLeft: "10px",
              fontSize: { xs: "22px", md: "26px" },
              borderRadius: "10px",
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>
        <Box sx={{ padding: "30px 0px", color: "gray" }}>
          No results found, try adjusting your search and filters.
        </Box>
      </Box>
      <Divider
        sx={{ height: "1px", backgroundColor: "#9cf5b8" }}
        variant="fullWidth"
      />
      <Box
        sx={{
          marginTop: "30px",
          marginBottom: "50px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Box sx={{ fontSize: "2em", color: "#9cf5b8" }}>
          Projection for a Better Community
        </Box>
        <Box sx={{ fontSize: "16px", color: "white" }}>
          In a year, Wibhoo will potentially execute the following initiatives
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            marginTop: "50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              width: { md: "22%", sm: "46%", xs: "90%" },
            }}
          >
            <Box sx={{ color: "#9cf5b8", fontSize: "3em" }}>50+</Box>
            <Box sx={{ color: "white", fontSize: "18px", fontWeight: "700" }}>
              Onboarding of Events & Communities
            </Box>
            <Box sx={{ color: "white" }}>
              Wibhoo aims to bring together diverse communities and vibrant
              events, fostering connections and collaboration.
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              width: { md: "22%", sm: "46%", xs: "90%" },
            }}
          >
            <Box sx={{ color: "#9cf5b8", fontSize: "3em" }}>10+</Box>
            <Box sx={{ color: "white", fontSize: "18px", fontWeight: "700" }}>
              Events in Collaboration
            </Box>
            <Box sx={{ color: "white" }}>
              Through strategic partnerships, Wibhoo will host enriching events
              that promote sustainability, creativity, and social impact.
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              width: { md: "22%", sm: "46%", xs: "90%" },
            }}
          >
            <Box sx={{ color: "#9cf5b8", fontSize: "3em" }}>10+</Box>
            <Box sx={{ color: "white", fontSize: "18px", fontWeight: "700" }}>
              Volunteer Programs
            </Box>
            <Box sx={{ color: "white" }}>
              Wibhoo will organize volunteer programs focused on environmental
              conservation, social welfare, and community development.
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              width: { md: "22%", sm: "46%", xs: "90%" },
            }}
          >
            <Box sx={{ color: "#9cf5b8", fontSize: "3em" }}>20+</Box>
            <Box sx={{ color: "white", fontSize: "18px", fontWeight: "700" }}>
              Workshops in Collaboration
            </Box>
            <Box sx={{ color: "white" }}>
              Join hands with experts and thought leaders to conduct workshops
              on sustainable living, wellness, art, and personal development.
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider
        sx={{ height: "1px", backgroundColor: "#9cf5b8" }}
        variant="fullWidth"
      />
    </Box>
  );
};

export default Communities;
