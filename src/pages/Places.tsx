import React, { useEffect } from 'react'
import Banner from '../views/places/Banner'
import { Box } from '@mui/material'
import ExplorePlaces from '../views/places/ExplorePlaces'
import Products from '../views/places/Products'
import PosterCrousel from './PosterCrousel'

const Places:React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box  sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%', 
      maxWidth: 1200, 
      margin: '0 auto',
      gap:{xs:'30px', md:'50px'}
    }}>
      <Banner/>
      <ExplorePlaces/>
      <Products/>
      <hr style={{backgroundColor:'rgb(68, 222, 125)',width:'100%',height:'1px'}}/>
      <PosterCrousel/>
    </Box>
  )
}

export default Places
