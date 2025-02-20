import { Box } from "@mui/material";
import wibhooIcon from "../assets/wibhoo_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        // marginTop: "60px",
        // backgroundColor: "black",
        padding: "80px 30px",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: { sm: "row", xs: "column" },
        gap: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: { sm: "30%", xs: "90%" },
        }}
      >
        <Box>
          <img src={wibhooIcon} alt="whibhooicon" style={{ height: "70px" }} />
        </Box>
        <Box sx={{ fontSize: "16px", color: "white", maxWidth: "500px" }}>
          Wibhoo is your hub for sustainable living. Discover eco-friendly
          products, empowering services, and vibrant communities, all in one
          place. Join us in shaping a greener future, effortlessly.
        </Box>
        <Box
          sx={{ fontSize: "20px", color: "gray", display: "flex", gap: "6px" }}
        >
          <Box
            sx={{
              border: "1px solid white",
              padding: "10px",
              height: "15px",
              width: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i className="fa-brands fa-facebook-f" />
          </Box>
          <Box
            sx={{
              border: "1px solid white",
              padding: "10px",
              height: "15px",
              width: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i className="fa-brands fa-x-twitter" />
          </Box>
          <Box
            sx={{
              border: "1px solid white",
              padding: "10px",
              height: "15px",
              width: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i className="fa-brands fa-instagram" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: { sm: "30%", xs: "90%" },
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ gap: "15px", display: "flex", flexDirection: "column" }}>
          <Box sx={{ fontSize: "18px", fontWeight: "600", color: "white" }}>
            4 Pillars
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "13px" }}>
            <Link
              style={{
                fontSize: "14px",

                color: "white",
              }}
              className="FooterPagesHover"
              to={"/Product"}
            >
              Products
            </Link>
            <Link
              to={"/service"}
              style={{
                fontSize: "14px",

                color: "white",
              }}
              className="FooterPagesHover"
            >
              Services
            </Link>
            <Link
              to={"/places-spaces"}
              style={{
                fontSize: "14px",

                color: "white",
              }}
              className="FooterPagesHover"
            >
              Places
            </Link>
            <Link
              to={"/communities"}
              style={{
                fontSize: "14px",

                color: "white",
              }}
              className="FooterPagesHover"
            >
              Communities
            </Link>
          </Box>
        </Box>
        <Box sx={{ gap: "15px", display: "flex", flexDirection: "column" }}>
          <Box sx={{ fontSize: "18px", fontWeight: "600", color: "white" }}>
            About us
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "13px" }}>
            <Link
              to={"/what-is-wibhoo"}
              style={{
                fontSize: "14px",
                color: "white",
              }}
              className="FooterPagesHover"
            >
              Our Story
            </Link>
            <Link
              to={"/how-we-onboard"}
              style={{
                fontSize: "14px",

                color: "white",
              }}
              className="FooterPagesHover"
            >
              Our Approach
            </Link>
          </Box>
        </Box>
        <Box style={{ gap: "15px", display: "flex", flexDirection: "column" }}>
          <Box style={{ fontSize: "18px", fontWeight: "600", color: "white" }}>
            Support
          </Box>
          <Box
            style={{ display: "flex", flexDirection: "column", gap: "13px" }}
          >
            <Link
              to={"/terms"}
              style={{
                fontSize: "14px",

                color: "white",
              }}
              className="FooterPagesHover"
            >
              Terms of Service
            </Link>
            <Link
              to={"/shipping"}
              style={{
                fontSize: "14px",

                color: "white",
              }}
              className="FooterPagesHover"
            >
              Shipping & Return
            </Link>
            <Link
              to={"/privacy"}
              style={{
                fontSize: "14px",

                color: "white",
              }}
              className="FooterPagesHover"
            >
              Privacy
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
