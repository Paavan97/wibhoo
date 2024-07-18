// App.tsx
import React from "react";
import { Container, Grid } from "@mui/material";
import ServiceCategoryCard from "./ServiceCategoryCard";

const categories = [
  {
    title: "Wellbeing & Care",
    subtitle: "Holistic health & Ayurveda",
    path: "wellbeing-care",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/2788ebc7-3951-4f83-a449-a764ff376637.png",
  },
  {
    title: "Eco-Tourism",
    subtitle: "Agro, Forest, and Adventure",
    path: "eco-tourism",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/eea039dd-df9c-42a1-9aa0-deb3a5429c9e.jpeg",
  },
  {
    title: "Waste Management",
    subtitle: "Collection, Recycling, & Management",
    path: "waste-management",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/6c82a1fe-2502-4ff7-a9fb-606853cda517.jpeg",
  },
  {
    title: "Home & Garden",
    subtitle: "Maintainance, Housekeeping, & Fixing",
    path: "home-garden",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/7c9fc849-0eb6-4c73-a8a5-7412732a4eb9.jpeg",
  },
  {
    title: "Event Planning",
    subtitle: "Weddings, Corporates, & Shows",
    path: "event-planning",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/0f92adaf-987d-4769-9d5b-316692b2e55f.jpeg",
  },
  {
    title: "Building & Architecture",
    subtitle: "Architecture, Interior, and Solutions",
    path: "building-architecture",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/8a4e6007-d04f-422c-8167-3dac007d56a0.jpeg",
  },
  {
    title: "Transport & Logistic",
    subtitle: "Traveling, Shipping & more",
    path: "transport-logistic",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/fb10fd53-7ea2-4186-80f0-681c0a640a6d.jpeg",
  },
  {
    title: "Green Energy & Audits",
    subtitle: "Energy saving, Certificates & Auditing",
    path: "green-energy-audits",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/ffa65d48-1064-4068-b2da-9c20fd5ccdf6.jpeg",
  },
];

const App: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        {categories.map((card) => (
          <Grid item key={card.path}>
            <ServiceCategoryCard
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
              path={card.path}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
