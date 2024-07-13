import { Box, Typography } from "@mui/material";
import React from "react";

const products = [];

const Products: React.FC = () => {
  return (
    <Box sx={{marginX:'auto', textAlign:'center'}}>
      {
        products.length === 0 ? (
          <Box sx={{ marginY: {xs:'0px' ,md:"30px"}, color:'gray' }}>
            <Typography sx={{fontSize:{sm:'18', md:'22px'}}}>
              No results found, try adjusting your search and filters.{" "}
            </Typography>
          </Box>
        ) : (
           <Box>products</Box> //[pemporery]
        )
      }
    </Box>
  );
};

export default Products;
