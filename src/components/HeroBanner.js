import { Box, Typography } from '@mui/material'
import React from 'react'

const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'212px',xs:'70px'},ml:{sm:'50px'}}} position='relative' p='20px'>
        <Typography color='#ff2625' fontWeight='600' fontSize='26px'>Fitness Club</Typography>
    </Box>
  )
}

export default HeroBanner