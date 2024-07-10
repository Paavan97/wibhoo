import React, { useState } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import wibhooIcon from "../assets/wibhoo_logo.png";
import "../App.css";
import {
  alpha,
  AppBar,
  IconButton,
  InputBase,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:767px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const menuItems = [
    "Home",
    "Shop",
    "Use",
    "Places",
    "Communities",
    "Our Story",
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{ backgroundColor: "#023020" }}>
            <Toolbar>
              {isMobile && (
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Typography variant="h6" noWrap component="div">
                    <img
                      src={wibhooIcon}
                      alt="Wibhoo Logo"
                      style={{ height: 70 }}
                    />
                  </Typography>
                  <Box sx={{ marginTop: "20px" }}>
                    {!isMobile && (
                      <Box
                        sx={{
                          // backgroundColor: "#111917",
                          display: "flex",
                          // width: "100%",
                          marginLeft: "30px",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
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
                          <Button className="header-common-ui">
                            Communities
                          </Button>
                          <Button className="header-common-ui">
                            Our Story <KeyboardArrowDown />{" "}
                          </Button>
                        </Box>
                      </Box>
                    )}
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "30px",
                  }}
                >
                  <Box sx={{ width: "250px", marginTop: "20px" }}>
                    <Search>
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                      />
                    </Search>
                  </Box>

                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar
                        alt="Profile Picture"
                        src="data:image/jpeg;base64,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"
                      />
                    </ListItemAvatar>
                    <ListItemText />
                  </ListItemButton>
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </Box>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((text, index) => (
              <ListItem button key={index}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
