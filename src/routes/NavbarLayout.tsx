import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

const NavbarLayout : React.FC = () => {
  return (
    <>
      <Navbar/>
      <Box component="main" sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Outlet />
      </Box>
    </>
  )
}

export default NavbarLayout
