import {
  Box,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const categories = ["Art", "Food", "Other", "Studio"];

const ExplorePlaces: React.FC = () => {
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
          textAlign:'center'
        }}
      >
        Explore the Places
      </Typography>

      <Typography
        sx={{
          fontSize: "",
        }}
      >
        ALL CATEGORIES
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: "14px",
        }}
      >
        {categories.map((category, index) => {
          return (
            // <Button key={index} sx={{ fontSize: '12px', backgroundColor:"#9cf5b8", color:'black', margin: '0.5em' }}>
            <Typography
              key={index}
              variant="body1"
              sx={{
                fontSize: "12px",
                backgroundColor: "#9cf5b8",
                color: "#2F4F4F",
                paddingX: "8px",
                paddingY: "5px",
                // margin:'0.5em',
                borderRadius: "8px",
                fontWeight: "600",
              }}
            >
              {category}
            </Typography>
            //    </Button>
          );
        })}
      </Box>

      <Box
        sx={{
          width: "100%",
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "5px",
        }}
      >
        <IconButton sx={{ p: "0"}} aria-label="search">
          <SearchIcon sx={{ fontSize: {xs:"22px" ,md:"32px"} }} />
        </IconButton>
        <InputBase
          placeholder="Type here to Search"
          sx={{
            width: "100%",
            height: {xs:'28px', md:"40px"},
            color: "black",
            paddingLeft: "10px",
            fontSize: {xs:'22px',md:"26px"},
            borderRadius: "10px",
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </Box>
    </Box>
  );
};

export default ExplorePlaces;
