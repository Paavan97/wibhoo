import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import bannerImage from '../../assets/home_Intro_banner.png'; // Make sure to replace this with the actual path to your image

const IntroSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 'calc(100vh - 64px)', // Adjust based on your navbar height
        padding: '0 24px',
        backgroundColor: '#111917',
        color:'white'
      }}
    >
      <Box sx={{ flex: 1, paddingRight: '24px' }}>
        <Typography variant="h1" component="h1" gutterBottom sx={{color:'#94EFA8'}}>
        Conscious Sustainable Efficient
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          Embrace the lifestyle you admire        </Typography>
        <Button variant="contained" sx={{backgroundColor:"#44de7d", color:'black',fontSize:"32"}}>
          Explore Now
        </Button>
      </Box>
      <Box sx={{ flex: 1 }}>
        <img src={bannerImage} alt="Banner" style={{ width: '90%', height: 'auto' }} />
      </Box>
    </Box>
  );
};

export default IntroSection;
