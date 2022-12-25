import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const SearchExercises = () => {
  const [search, setsearch] = useState('')
  const handleSearch =async()=>{
    if(search){
      // const exercisesData = await fetchData();
    }
  }
  return (
    <Stack alignItems='center' mt='37px' p='20px' justifyContent='center'>
      <Typography fontWeight={700} mb='50px' textAlign='center' sx={{ fontSize: { lg: '44px', xs: '30px' } }}>
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '800px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }} height='76px' value={search} onChange={(e) => setsearch(e.target.value.toLowerCase())} placeholder='Search Exercises' type='text' />
        <Button className='search-btn' sx={{ width: { lg: '175px', xs: '80px' }, textTransform: 'none', color: '#fff', backgroundColor: '#ff2625', fontSize: { lg: '20px', xs: '14px', height: '56px', position: 'absolute', right: '0' } }} onClick={handleSearch}>Search</Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises