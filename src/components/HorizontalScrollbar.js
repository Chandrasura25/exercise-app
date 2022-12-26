import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';
const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext)
    return (
        <Typography onClick={() => scrollPrev()} className='right-arrow'>
            <img src={LeftArrowIcon} alt='right-arrow' />
        </Typography>
    )
}
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext)
    return (
        <Typography onClick={() => scrollNext()} className='left-arrow'>
            <img src={RightArrowIcon} alt='left-arrow' />
        </Typography>
    )
}
const HorizontalScrollbar = ({ data, bodyPart, setbodyPart }) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }}>
            {data.map((item) => (
                <Box key={item.id || item} itemId={item.id || item} title={item.id || item} m='0 40px'>
                    <BodyPart item={item} bodyPart={bodyPart} setbodyPart={setbodyPart} />
                </Box>
            ))}
        </ScrollMenu>
    )
}

export default HorizontalScrollbar