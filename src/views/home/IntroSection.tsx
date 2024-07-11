import React from "react";
import { Box, Typography, Button } from "@mui/material";
import bannerImage from "../../assets/home_Intro_banner.png"; // Make sure to replace this with the actual path to your image

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
        <Typography
          sx={{ color: "white", fontSize: "16px", fontWeight: "100" }}
        >
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
        <Typography
          sx={{ color: "white", fontSize: "16px", fontWeight: "100" }}
        >
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
    </Box>
  );
};

export default IntroSection;
