import React,{useState,useEffect} from 'react'
import Pagination from '@mui/material/Pagination';
import {Box,Stack,Typography} from '@mui/material'
import { fetchData, exerciseOptions } from '../utils/fetchData';

const Exercises = ({setexercises,exercises,bodyPart }) => {
  return (
    <Box id='exercises' sx={{mt:{lg:'110px'}}} mt='50px' p='20px'>
    <Typography></Typography>
    </Box>
  )
}

export default Exercises