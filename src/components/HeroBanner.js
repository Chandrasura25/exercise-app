import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'70px'},ml:{sm:'50px'}}} position='relative' p='20px'>
        <Typography color='#ff2625' fontWeight='600' fontSize='32px'>Fitness Club</Typography>
        <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'40px'}}}mb='23px' mt='10px'>
          Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography fontSoze='22px' lineHeight='35px' mb={3}>
         Check out the most effective exercises
        </Typography>
        <Button variant='contained' color='error' href='#exercises' sx={{backgroundColor:'#ff2625',padding:'10px'}}>Explore Exercises</Button>
        <Typography fontWeight={600} color='#ff2625' fontSize='200px' sx={{opacity:0.1,display:{lg:'block',xs:'none'}}}>Exercise</Typography>
        <div className='hero-banner-img'>
        <img src={HeroBannerImage} alt='banner'/></div>
    </Box>
  )
}

export default HeroBanner