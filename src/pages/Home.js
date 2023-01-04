import { Box } from '@mui/material'
import React,{useState} from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
  const [exercises, setexercises] = useState([])
  const [bodyPart, setbodyPart] = useState('all')

  return (
    <Box>
        <HeroBanner/>
        <SearchExercises setexercises={setexercises} setbodyPart={setbodyPart} bodyPart={bodyPart} />
        <Exercises setexercises={setexercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home