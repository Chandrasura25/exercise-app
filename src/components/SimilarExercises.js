import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: 0 } }}>
      <Typography variant='h3' mb={5} >Same <span style={{color:'#ff2625', textTransform:'capitalize'}}>muscle group</span> Exercises</Typography>
      <Stack sx={{ p: '2', position: 'relative' }}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </Stack>
      <Typography mt={4} variant='h3' mb={5}>Exercises with <span style={{color:'#ff2625', textTransform:'capitalize'}}>same equipment</span></Typography>
      <Stack sx={{ p: '2', position: 'relative' }}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises