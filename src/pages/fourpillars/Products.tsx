import { Box, Typography, Button } from "@mui/material";
import productsFooter from "../../assets/productsFooter.png";
import DoneIcon from "@mui/icons-material/Done";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import HandshakeIcon from "@mui/icons-material/Handshake";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import ProductCategories from "../../views/ProductsFooter/Productcategories";

const Product: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "50px",
          flexDirection: { md: "row", xs: "column-reverse" },
        }}
      >
        <Box sx={{ display: "flex", width: { md: "45%", xs: "100%" } }}>
          <img
            style={{ width: "100%" }}
            src={productsFooter}
            alt="bannerimage"
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
              color: "#fff",
              fontSize: { md: "3em", xs: "4em" },
              margin: "0px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Discover Treasures
          </Box>
          <Box
            sx={{
              color: "#9cf5b8",
              fontSize: { md: "3em", xs: "4em" },
              margin: "0px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Eco-Friendly
          </Box>
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "1.5em", md: "1.2em" },
              margin: "0px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Discover conscious services that enhance your own well-being and
            support the planet too
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
            Shop Them
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            color: "#9cf5b8",
            fontSize: { md: "3em", xs: "4em" },
            margin: "0px",
            marginBottom: "20px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Select the Category
        </Box>
        <ProductCategories />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "20px",
          gap: "50px",
          flexDirection: { md: "row", xs: "column-reverse" },
        }}
      >
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
              fontSize: { md: "3em", xs: "3em" },
              margin: "0px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Next generation Service Platform
          </Box>
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "1.5em", md: "1.2em" },
              margin: "0px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            At Wibhoo, our service marketplace is your gateway to a sustainable
            lifestyle. We offer eco-friendly services that promote well-being
            while minimizing our environmental impact. From holistic health
            practices to ethical living services, we empower individuals to make
            conscious choices for a healthier planet and a happier community.
            <br />
            <br />
            <DoneIcon sx={{ color: "rgb(68, 222, 125)" }} />
            Community-Centric
            <br />
            <DoneIcon sx={{ color: "rgb(68, 222, 125)" }} />
            Curated Variety
            <br />
            <DoneIcon sx={{ color: "rgb(68, 222, 125)" }} />
            Seamless Experience
            <br />
            <DoneIcon sx={{ color: "rgb(68, 222, 125)" }} />
            Impactful Connections
            <br />
          </Typography>
          <br />
          <br />

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
            Read More
          </Button>
        </Box>
        <Box sx={{ display: "flex", width: { md: "45%", xs: "100%" } }}>
          <img
            style={{ width: "90%" }}
            src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/6cbe92bf-e2e6-4dd4-a092-d5bb2b79ba79.png"
            alt="bannerimage"
          />
        </Box>
      </Box>
      <Box
        sx={{
          color: "#9cf5b8",
          fontSize: "2em",
          marginTop: "100px",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        What is different
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "60%",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "70px",
          gap: "10px",
          textAlign: "center",
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
          <Box sx={{ color: "#9cf5b8" }}>
            <VolunteerActivismIcon fontSize="large" />
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
          <Box sx={{ color: "#9cf5b8" }}>
            <HandshakeIcon fontSize="large" />
          </Box>
          <Box sx={{ color: "#9cf5b8", fontSize: "20px" }}>
            Collaborative Engagement
          </Box>
          <Box sx={{ color: "white", fontSize: "18px" }}>
            Cultivating a network of like-minded individuals to drive collective
            action for positive change.
          </Box>
        </Box>
        <Box
          sx={{
            width: { sm: "45%", xs: "100%" },
            gap: "10px",
            display: "flex",
            marginTop: "20px",
            flexDirection: "column",
          }}
        >
          <Box sx={{ color: "#9cf5b8" }}>
            <FingerprintIcon fontSize="large" />
          </Box>
          <Box sx={{ color: "#9cf5b8", fontSize: "20px" }}>
            Environmental Impact
          </Box>
          <Box sx={{ color: "white", fontSize: "18px" }}>
            Emphasizing sustainable practices to minimize ecological footprints.
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Product;
