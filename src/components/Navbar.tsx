import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import {MenuIcon} from '@mui/icons-material/Menu';
import {KeyboardArrowDown} from '@mui/icons-material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';

const CustomAppBar = styled(AppBar)({
    backgroundColor: '#111917',
  });

const Navbar:React.FC = () => {
  
  return (
      <CustomAppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
            {/* ---logo hear--- */}
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Wibhoo
        </Typography>
        <Box>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Shop <KeyboardArrowDown/></Button>
          <Button color="inherit">Use <KeyboardArrowDown/> </Button>
          <Button color="inherit">Places</Button>
          <Button color="inherit">Communites</Button>
          <Button color="inherit">Our Stroy</Button>
          <Button variant="contained" sx={{background:"#43db7b", color:"black"}}>My Profile</Button>
        </Box>
      </Toolbar>
    </CustomAppBar>
  )
}

export default Navbar
