import React from 'react'
import Icon from '../assets/icons/gym.png'
import { Stack, Typography } from '@mui/material'
const BodyPart = ({ item, setbodyPart, bodyPart }) => {
  return (
    <Stack alignItems='center' type='button' justifyContent='center' className='bodyPart-card' sx={{ borderTop: bodyPart === item ? '4px solid #ff2625' : '', backgroundColor: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '280px', cursor: 'pointer', gap: '47px' }}>
      <img src={Icon} alt='dumbbell' style={{ width: '40px', height: '40px' }} />
    </Stack>
  )
}

export default BodyPart