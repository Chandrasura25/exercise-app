import { Box, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const SearchExercises = () => {
  return (
    <Stack alignItems='ceneter' mt='37px' p='20px' justifyContent='center'>
      <Typography fontWeight={700} mb='50px' textAlign='center' sx={{ fontSize: { lg: '44px', xs: '30px' } }}>
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }} height='76px' value='' onChange={(e) => { }} placeholder='Search Exercises' type='text' />
      </Box>
    </Stack>
  )
}

export default SearchExercises