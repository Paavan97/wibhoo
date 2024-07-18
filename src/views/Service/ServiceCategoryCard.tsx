// CardComponent.tsx
import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom"; // Import useNavigate

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  path: string; // Add path prop
}

const HoverButton = styled(Button)({
  display: "none",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
});

const HoverBox = styled(Box)({
  position: "relative",
  "&:hover": {
    ".hoverButton": {
      display: "block",
    },
  },
});

const ServiceCategoryCard: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  path,
}) => {
  const navigate = useNavigate(); // Use useNavigate to get navigation function

  return (
    <Card sx={{ width: "300px", height: "350px", margin: 2 }}>
      <HoverBox>
        <CardActionArea>
          <CardMedia component="img" height="240" image={image} alt={title} />
          <CardContent>
            <Typography
              gutterBottom
              textAlign={"left"}
              variant="h5"
              component="div"
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              textAlign={"left"}
              color="text.secondary"
            >
              {subtitle}
            </Typography>
          </CardContent>
        </CardActionArea>
        <HoverButton
          className="hoverButton"
          variant="contained"
          sx={{
            color: "#44de7d",
            backgroundColor: "#111917",
          }}
          onClick={() => navigate(path)} // Navigate on button click
        >
          Access It
        </HoverButton>
      </HoverBox>
    </Card>
  );
};

export default ServiceCategoryCard;
