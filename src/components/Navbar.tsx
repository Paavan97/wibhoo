import React from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import wibhooIcon from "../assets/wibhoo_logo.png";
import "../App.css";

const Navbar: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#111917",
        display: "flex",
        width: "90%",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box>
        <img
          src={wibhooIcon}
          alt="Wibhoo Logo"
          style={{ height: 80, width: "auto" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
          "& .header-common-ui": {
            color: "white",
            fontSize: "14px",
            fontWeight: 300,
          },
        }}
      >
        <Button className="header-common-ui">Home</Button>
        <Button className="header-common-ui">
          Shop <KeyboardArrowDown />
        </Button>
        <Button className="header-common-ui">
          Use <KeyboardArrowDown />{" "}
        </Button>
        <Button className="header-common-ui">Places</Button>
        <Button className="header-common-ui">Communites</Button>
        <Button className="header-common-ui">
          Our Stroy <KeyboardArrowDown />{" "}
        </Button>
        <Button
          variant="contained"
          sx={{
            background: "#43db7b",
            color: "black",
            padding: "9px 18px",
            borderRadius: "10px",
          }}
        >
          My Profile
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
