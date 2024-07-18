import React from "react";
import { Box, Typography, Button, Input } from "@mui/material";
import bannerImage from "../../assets/home_Intro_banner.png";
import communityCentric from "../../assets/community_centric.png";

const IntroSection: React.FC = () => {
  const products = [
    {
      title: "Planet-Friendly Products",
      description:
        "Discover products that prioritize sustainability and reduce environmental impact.",
      imageUrl: "https://pixlr.com/images/index/product-image-one.webp",
      buttonText: "Shop Product",
    },
    {
      title: "Practical Services",
      description:
        "Access sustainable services designed to simplify your eco-friendly routines.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPYuijaNPmw2QV-Lp96jlXbZMGbkySuZ_5XA&s",
      buttonText: "Explore Services",
    },
    {
      title: "Places & Spaces",
      description:
        "Discover products that prioritize sustainability and reduce environmental impact.",
      imageUrl: "https://fps.cdnpk.net/home/cover/image-14-sm.webp?w=438&h=438",
      buttonText: "Discove Places",
    },
    {
      title: "Collaborative Communities",
      description:
        "Join vibrant communities and Events dedicated to conscious living",
      imageUrl: "https://pixlr.com/images/index/product-image-two.webp",
      buttonText: "Connect",
    },
    // Add more product objects as needed
  ];

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
          gap: "50px",
          flexDirection: { md: "row", xs: "column-reverse" },
        }}
      >
        <Box sx={{ display: "flex", width: { md: "45%", xs: "100%" } }}>
          <img style={{ width: "100%" }} src={bannerImage} alt="bannerimage" />
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
              fontSize: { md: "5em", xs: "4em" },
              margin: "0px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Conscious Sustainable Efficient
          </Box>
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "1.5em", md: "2em" },
              margin: "0px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Embrace the lifestyle you admire
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
          gap: "20px",
        }}
      >
        <Typography sx={{ color: "#9cf5b8", fontSize: "3em" }}>
          Localizing Conscious Living
        </Typography>
        <Typography variant="h6" sx={{ color: "white" }}>
          At Wibhoo, we prioritize making conscious living easy and accessible
          by emphasizing local solutions. This not only helps boost the local
          economy but also reduces negative environmental impacts.
        </Typography>
        <Button
          sx={{
            backgroundColor: "rgb(68, 222, 125)",
            textDecoration: "none",
            color: "black",
            fontSize: "14px",
            fontWeight: "600",
            borderRadius: "10px",
            padding: "8px 16px",
          }}
        >
          Know How
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
          gap: "20px",
          marginTop: "50px",
        }}
      >
        <Typography sx={{ color: "#9cf5b8", fontSize: "3em" }}>
          Explore the ways
        </Typography>
        <Typography variant="h6" sx={{ color: "white" }}>
          Explore Planet-Friendly Choices, Practical Services, Beautiful
          Getaways, and Collaborative Networks
        </Typography>
        {/* <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "48%", md: "23%" }, // Adjust these values as needed
              backgroundImage: `url(https://pixlr.com/images/index/product-image-one.webp)`,
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              height: "400px",
              gap: "20px",
            }}
          >
            <Typography
              sx={{ color: "white", fontSize: "30px", fontWeight: "600" }}
            >
              Planet-Friendly Products
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: "20px", fontWeight: "500" }}
            >
              Discover products that prioritize sustainability and reduce
              environmental impact.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "rgb(68, 222, 125)",
                  textDecoration: "none",
                  color: "black",
                  fontSize: "14px",
                  fontWeight: "600",
                  borderRadius: "10px",
                  padding: "8px 16px",
                }}
              >
                Shop Product
              </Button>
            </Box>
          </Box>
        </Box> */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            // justifyContent: "space-evenly",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {products.map((product, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", sm: "48%", md: "23%" },
                backgroundImage: `url(${product.imageUrl})`,
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                height: "400px",
                gap: "20px",
                borderRadius: "10px",
              }}
            >
              <Typography
                sx={{ color: "white", fontSize: "30px", fontWeight: "600" }}
              >
                {product.title}
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: "20px", fontWeight: "500" }}
              >
                {product.description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{
                    backgroundColor: "rgb(68, 222, 125)",
                    textDecoration: "none",
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "600",
                    borderRadius: "10px",
                    padding: "8px 16px",
                  }}
                >
                  {product.buttonText}
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
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
            src={communityCentric}
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
            Community-Centric Consciousness
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
                <i className="fa-solid fa-location-dot"></i>
              </Box>
              <Box sx={{ color: "#9cf5b8", fontSize: "20px" }}>
                Being Hyperlocal
              </Box>
              <Box sx={{ color: "white", fontSize: "18px" }}>
                Prioritizing local businesses and artisans to stimulate economic
                growth.
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
                <i className="fa-solid fa-handshake"></i>
              </Box>
              <Box sx={{ color: "#9cf5b8", fontSize: "20px" }}>
                Collaborative Engagement
              </Box>
              <Box sx={{ color: "white", fontSize: "18px" }}>
                Cultivating a network of like-minded individuals to drive
                collective action for positive change.
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
                <i className="fa-solid fa-seedling"></i>
              </Box>
              <Box sx={{ color: "#9cf5b8", fontSize: "20px" }}>
                Environmental Impact
              </Box>
              <Box sx={{ color: "white", fontSize: "18px" }}>
                Emphasizing sustainable practices to minimize ecological
                footprints.
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
                <i className="fa-solid fa-infinity"></i>
              </Box>
              <Box sx={{ color: "#9cf5b8", fontSize: "20px" }}>
                Holistic Well-being
              </Box>
              <Box sx={{ color: "white", fontSize: "18px" }}>
                Fostering a culture of mindfulness, health, and social
                responsibility.
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
              But How
            </Box>
            <Box sx={{ width: "40px", fontSize: "30px", color: "#9cf5b8" }}>
              <i className="fa-solid fa-arrow-right"></i>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "50px",
          justifyContent: "center",
          textAlign: "center",
          gap: "85px",
        }}
      >
        <Box sx={{ fontSize: "2em", color: "#9cf5b8" }}>
          Upcoming Sustainable Events and Workshops
        </Box>
        <Box sx={{ color: "#6f6f6f", fontSize: "18px" }}>
          No results found, try adjusting your search and filters.
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "50px",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ color: "#9cf5b8", fontSize: "2em" }}>
          Potential Impact in a year to reach
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "50px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { md: "23%", sm: "48%", xs: "100%" },
              gap: "10px",
            }}
          >
            <Box>
              <img
                alt="first image"
                style={{ width: "100%", height: "200px" }}
                src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/721309a4-01ee-48b2-9ca2-fef0f76cecdc.svg"
              />
            </Box>
            <Box sx={{ color: "#9cf5b8", fontSize: "20px" }}>3000+</Box>
            <Box sx={{ color: "white", fontSize: "18px" }}>
              Conscious Lifestyle Options to Choose from
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { md: "23%", sm: "48%", xs: "100%" },
              gap: "10px",
            }}
          >
            <Box>
              <img
                alt="first image"
                style={{ width: "100%", height: "200px" }}
                src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/b8ea3370-dc9a-44d6-bbf5-9d751b93820c.svg"
              />
            </Box>
            <Box sx={{ color: "#9cf5b8", fontSize: "20px" }}>300+</Box>
            <Box sx={{ color: "white", fontSize: "18px" }}>
              Number of Partnerships with Organisations, businesses, and other
              stakeholders
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { md: "23%", sm: "48%", xs: "100%" },
              gap: "10px",
            }}
          >
            <Box>
              <img
                alt="first image"
                style={{ width: "100%", height: "200px" }}
                src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/964e2f97-b5cf-4b3a-8033-1b9e264d3dab.svg"
              />
            </Box>
            <Box sx={{ color: "#9cf5b8", fontSize: "20px" }}>1000+</Box>
            <Box sx={{ color: "white", fontSize: "18px" }}>
              Tree Plantations for being Carbon Neutral
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { md: "23%", sm: "48%", xs: "100%" },
              gap: "10px",
            }}
          >
            <Box>
              <img
                alt="first image"
                style={{ width: "100%", height: "200px" }}
                src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/ebea225c-9ec1-404a-8ebc-95b71cea9fab.svg"
              />
            </Box>
            <Box sx={{ color: "#9cf5b8", fontSize: "20px" }}>12,000+</Box>
            <Box sx={{ color: "white", fontSize: "18px" }}>
              Kg of Plastic Waste Prevented from Polluting our Environment
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "40px",
          // backgroundColor: "black",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            color: "#9cf5b8",
            fontSize: "2.5em",
            marginTop: "60px",
          }}
        >
          Join the Tribe - It's Free!
        </Box>
        <Box sx={{ color: "white", fontSize: "18px" }}>
          Sign up for budget-friendly offers, trendy arrivals, fabulous events,
          and outstanding workshops.
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "80px",
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            sx={{
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              width: { xs: "80%", md: "500px" },
              border: "1px solid #9cf5b8",
              outline: "none",
              backgroundColor: "white",
            }}
          />
          <Button
            sx={{
              backgroundColor: "rgb(68, 222, 125)",
              color: "black",
              width: { xs: "80%", sm: "100px", md: "auto" },
              minWidth: { xs: "100px", md: "auto" },
              padding: "10px",
            }}
          >
            Join now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroSection;
