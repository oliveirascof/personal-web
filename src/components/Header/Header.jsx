import React from 'react'
import { Box, Toolbar, AppBar, Typography, Button } from '@mui/material'

function Header() {
  return (
      <AppBar position="fixed" >
        <Toolbar variant="regular" sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", textAlign: 'center' }}>
          <Typography 
            variant="h5" sx={{fontWeight: "bold"}} > Felipe's Portfolio
            </Typography>
            <Box sx={{display: "flex", marginLeft: 10, marginRight: 10}}>
            <Button variant="outline">My projects</Button>
            <Button variant="outline">Social networks</Button>
            <Button variant="outline">Contact me</Button>
          </Box>
        </Toolbar>
      </AppBar>
  )
}

export default Header