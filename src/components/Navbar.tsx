import React, { useState } from "react";
import { KeyboardArrowDown, ExpandLess, ExpandMore } from "@mui/icons-material";
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
  Collapse,
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
  const isTablet = useMediaQuery("(max-width:1113px)");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false); // State for search bar visibility
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [shopAnchorEl, setShopAnchorEl] = useState<null | HTMLElement>(null);
  const [useAnchorEl, setUseAnchorEl] = useState<null | HTMLElement>(null);
  const [openSubmenu, setOpenSubmenu] = useState<{ [key: string]: boolean }>(
    {}
  );

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
    setSearchBarOpen((prev) => !prev);
  };

  const handleMenuClick = (
    event: React.MouseEvent<HTMLElement>,
    setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (
    setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
  ) => {
    setAnchorEl(null);
  };

  const handleSubmenuToggle = (
    menu: string,
    event: React.MouseEvent<HTMLElement>
  ) => {
    event.stopPropagation();
    setOpenSubmenu((prevOpenSubmenu) => ({
      ...prevOpenSubmenu,
      [menu]: !prevOpenSubmenu[menu],
    }));
  };

  const menuItems = [
    { text: "Home", path: "home" },
    {
      text: "Shop",
      subMenu: [
        { text: "Home & Living", path: "products/home-living" },
        { text: "Fashion & Clothing", path: "products/fashion-clothing" },
        { text: "Beauty & Care", path: "products/beauty-care" },
        { text: "Eat & Drink", path: "products/eat-drink" },
        { text: "Lifestyle Essentials", path: "products/lifestyle-essentials" },
      ],
    },
    {
      text: "Use",
      subMenu: [
        { text: "Wellbeing & Care", path: "use/wellbeing-care" },
        { text: "Eco-Tourism", path: "use/eco-tourism" },
        { text: "Waste Management", path: "use/waste-management" },
        { text: "Home & Garden", path: "use/home-garden" },
        { text: "Event Planning", path: "use/event-planning" },
        { text: "Building & Architecture", path: "use/building-architecture" },
        { text: "Transport & Logistic", path: "use/transport-logistic" },
        { text: "Green Energy & Audits", path: "use/green-energy-audits" },
      ],
    },
    { text: "Places", path: "places-spaces" },
    { text: "Communities", path: "communities" },
    {
      text: "Our Story",
      subMenu: [
        { text: "What Is Wibhoo", path: "what-is-wibhoo" },
        { text: "How We Onboard", path: "how-we-onboard" },
      ],
    },
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
                          {menuItems.map((item) => (
                            <Box key={item.text}>
                              <Button
                                className="header-common-ui"
                                component={Link}
                                to={item.path || "#"}
                                onClick={
                                  item.subMenu
                                    ? (e) =>
                                        handleMenuClick(
                                          e,
                                          item.text === "Shop"
                                            ? setShopAnchorEl
                                            : item.text === "Use"
                                            ? setUseAnchorEl
                                            : setAnchorEl
                                        )
                                    : undefined
                                }
                              >
                                {item.text}{" "}
                                {item.subMenu && <KeyboardArrowDown />}
                              </Button>
                              {item.subMenu && (
                                <Menu
                                  sx={{
                                    paddingTop: "0px",
                                    paddingBottom: "0px",
                                  }}
                                  anchorEl={
                                    item.text === "Shop"
                                      ? shopAnchorEl
                                      : item.text === "Use"
                                      ? useAnchorEl
                                      : anchorEl
                                  }
                                  open={Boolean(
                                    item.text === "Shop"
                                      ? shopAnchorEl
                                      : item.text === "Use"
                                      ? useAnchorEl
                                      : anchorEl
                                  )}
                                  onClose={() =>
                                    handleMenuClose(
                                      item.text === "Shop"
                                        ? setShopAnchorEl
                                        : item.text === "Use"
                                        ? setUseAnchorEl
                                        : setAnchorEl
                                    )
                                  }
                                >
                                  {item.subMenu.map((subItem) => (
                                    <MenuItem
                                      sx={{
                                        background: "#111917",
                                      }}
                                      component={Link}
                                      to={subItem.path || "#"}
                                      key={subItem.text}
                                      onClick={() =>
                                        handleMenuClose(
                                          item.text === "Shop"
                                            ? setShopAnchorEl
                                            : item.text === "Use"
                                            ? setUseAnchorEl
                                            : setAnchorEl
                                        )
                                      }
                                    >
                                      <Link
                                        to={`/${subItem.path}`}
                                        style={{
                                          textDecoration: "none",
                                          color: "#fff",
                                        }}
                                        onMouseEnter={(e) =>
                                          (e.currentTarget.style.color =
                                            "#9cf5b8")
                                        }
                                        onMouseLeave={(e) =>
                                          (e.currentTarget.style.color = "#fff")
                                        }
                                      >
                                        {subItem.text}
                                      </Link>
                                    </MenuItem>
                                  ))}
                                </Menu>
                              )}
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Search sx={{ display: "flex" }}>
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                      />
                    </Search>

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

                    <Box sx={{ marginTop: "17px", marginLeft: "-14px" }}>
                      <IconButton
                        color="inherit"
                        aria-label="search"
                        onClick={handleSearchIconClick}
                      >
                        <SearchIcon fontSize="large" />
                      </IconButton>
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

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": { backgroundColor: "#111917", color: "white" },
        }} // Set drawer background color
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <Typography variant="h6" noWrap component="div">
              <img src={wibhooIcon} alt="Wibhoo Logo" style={{ height: 70 }} />
            </Typography>
          </Box>
          <List>
            {menuItems.map((item) => (
              <React.Fragment key={item.text}>
                <ListItem
                  button
                  component={Link}
                  to={item.path || "#"}
                  onClick={(event) =>
                    item.subMenu
                      ? handleSubmenuToggle(item.text, event)
                      : undefined
                  }
                >
                  <ListItemText primary={item.text} />
                  {item.subMenu ? (
                    openSubmenu[item.text] ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : null}
                </ListItem>
                {item.subMenu && (
                  <Collapse
                    in={openSubmenu[item.text]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {item.subMenu.map((subItem) => (
                        <ListItem
                          key={subItem.text}
                          button
                          component={Link}
                          to={`/${subItem.path}`}
                          sx={{ pl: 4 }}
                        >
                          <ListItemText primary={subItem.text} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>

      {searchBarOpen && (
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 1000,
            backgroundColor: "#fff",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "10px",
          }}
        >
          <Search sx={{ display: "flex" }}>
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
  );
};

export default Navbar;
