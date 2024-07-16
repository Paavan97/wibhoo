import * as React from 'react';
import { Grid, Box } from '@mui/material';

// Import your images
import image1 from '../../assets/goal_align_8.png';
import image2 from '../../assets/goal_align_9.png';
import image3 from '../../assets/goal_align_11.png';
import image4 from '../../assets/goal_align_12.png';
import image5 from '../../assets/goal_align_13.png';
import image6 from '../../assets/goal_align_14.png';
import image7 from '../../assets/goal_align_15.png';
import image8 from '../../assets/goal_align_17.png';
// import image5 from '../../assets/goal_align_13.png';
// import image6 from '../../assets/goal_align_14.png';

const images = [
  { id: 1, src: image1, title: 'Image 1' },
  { id: 2, src: image2, title: 'Image 2' },
  { id: 3, src: image3, title: 'Image 3' },
  { id: 4, src: image4, title: 'Image 4' },
  { id: 5, src: image5, title: 'Image 5' },
  { id: 6, src: image6, title: 'Image 6' },
  { id: 7, src: image7, title: 'Image 7' },
  { id: 8, src: image8, title: 'Image 8' },
];

const GoalsImageGrid: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2} >
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={3} key={image.id} sx={{marginTop:{xs:'20px'}}}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img src={image.src} alt={image.title} style={{ width: '100%', borderRadius: '8px' }} />
              {/* <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
                {image.title}
              </Typography> */}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GoalsImageGrid;
