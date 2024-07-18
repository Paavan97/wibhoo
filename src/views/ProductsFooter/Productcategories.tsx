// App.tsx
import React from "react";
import { Container, Grid } from "@mui/material";
import ServiceCategoryCard from "../Service/ServiceCategoryCard";

const categories = [
  {
    title: "Home & Living",
    path: "home-living",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/cc3a8a05-aa7a-4b88-b0c0-ff9a445dded3.jpeg",
  },
  {
    title: "Fashion & Clothing",
    path: "fashion-clothing",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/105b2caa-92db-4215-82ee-f4b03d1165dc.jpeg",
  },
  {
    title: "Food & Eating",
    path: "eat-drink",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/21f54bbc-2930-4b21-a2e1-057cb04d6350.jpeg",
  },
  {
    title: "Beauty & Care",
    path: "beauty-care",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/b00d6d9e-7e46-444f-9329-945af544930a.jpeg",
  },
  {
    title: "Life Essentials",
    path: "lifestyle-essentials",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/37e9af6a-4ec3-4b9d-8383-33717f8a7678.jpeg    ",
  },
];

const ProductCategories: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        {categories.map((card) => (
          <Grid item key={card.path}>
            <ServiceCategoryCard
              image={card.image}
              title={card.title}
              subtitle=""
              path={card.path}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductCategories;
