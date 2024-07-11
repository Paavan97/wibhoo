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
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

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
  const isMobile = useMediaQuery("(max-width:900px)");
  const isTablet = useMediaQuery("(max-width:1113px)");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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

  const handleSearchIconClick = () => {
    setShowSearch(!showSearch);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
              {!isTablet ? (
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
                      <Box
                        sx={{
                          display: "flex",
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
                          <Button
                            className="header-common-ui"
                            onClick={handleMenuClick}
                          >
                            Our Story <KeyboardArrowDown />{" "}
                          </Button>
                          <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                          >
                            <MenuItem onClick={handleMenuClose}>
                              <Link
                                to="/what-is-wibhoo"
                                style={{ textDecoration: "none" }}
                              >
                                What Is Wibhoo
                              </Link>
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                              How We Onboard
                            </MenuItem>
                          </Menu>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: isMobile ? "10px" : "30px",
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
                          src="https://www.google.com/imgres?q=profile%20pic%20sample&imgurl=https%3A%2F%2Fwww.corporatephotographerslondon.com%2Fwp-content%2Fuploads%2F2021%2F07%2FLinkedIn_profile_photo_sample_1-300x300.jpg&imgrefurl=https%3A%2F%2Fwww.corporatephotographerslondon.com%2Ftips-and-ideas-for-a-great-linkedin-profile-photo%2F&docid=BYOjBJUgXTpvnM&tbnid=8qH9raV8mxcwZM&vet=12ahUKEwiUrsCRzp-HAxUOka8BHe2uAbAQM3oFCIYBEAA..i&w=300&h=300&hcb=2&ved=2ahUKEwiUrsCRzp-HAxUOka8BHe2uAbAQM3oFCIYBEAA"
                        />
                      </ListItemAvatar>
                      <ListItemText />
                    </ListItemButton>
                  </Box>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ marginTop: "13px", marginLeft: "-14px" }}>
                      <ListItemButton>
                        <ListItemAvatar>
                          <Avatar
                            alt="Profile Picture"
                            src="https://www.google.com/imgres?q=profile%20pic%20sample&imgurl=https%3A%2F%2Fwww.corporatephotographerslondon.com%2Fwp-content%2Fuploads%2F2021%2F07%2FLinkedIn_profile_photo_sample_1-300x300.jpg&imgrefurl=https%3A%2F%2Fwww.corporatephotographerslondon.com%2Ftips-and-ideas-for-a-great-linkedin-profile-photo%2F&docid=BYOjBJUgXTpvnM&tbnid=8qH9raV8mxcwZM&vet=12ahUKEwiUrsCRzp-HAxUOka8BHe2uAbAQM3oFCIYBEAA..i&w=300&h=300&hcb=2&ved=2ahUKEwiUrsCRzp-HAxUOka8BHe2uAbAQM3oFCIYBEAA"
                          />
                        </ListItemAvatar>
                        <ListItemText />
                      </ListItemButton>
                    </Box>

                    <Box
                      sx={{ marginTop: "25px", marginLeft: "-14px" }}
                      onClick={handleSearchIconClick}
                    >
                      <SearchIcon fontSize="large" />
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="h6" noWrap component="div">
                      <img
                        src={wibhooIcon}
                        alt="Wibhoo Logo"
                        style={{ height: 70, marginRight: "60px" }}
                      />
                    </Typography>
                  </Box>
                  <Box sx={{ marginRight: "-10px" }}>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="open drawer"
                      sx={{ mr: 2, marginTop: "15px" }}
                      onClick={toggleDrawer(true)}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Box>
                </Box>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      </Box>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((text, index) => (
              <ListItem
                button
                key={index}
                sx={{
                  textAlign: "center",
                }}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          {showSearch && (
            <Box sx={{ width: "100%", padding: "10px" }}>
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
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
