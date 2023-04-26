import React from 'react'
import {motion} from 'framer-motion'


const Cube = ({animateObj, styled, dragLimits, clase}) => {


  return (
    <motion.div  
    drag
    dragConstraints={dragLimits}
    style={styled}
    animate={animateObj}
    transition={{
      duration: .75,
      ease: "easeInOut",
      times: [0, 0.2, 1],
      
    }}
  
    whileTap={{  
    rotate: [0, 45, 0],
    
  }}
    className={'cube '+clase}></motion.div>
  )
}

export default Cube