import React from 'react'
import AnimatedBg from '../components/AnimatedPic'

const food = [
  ["🍊"],

];

const AboutMe = () => {
  
  return (
  <div className='container about_container'>
  {food.map(([emoji]) => (
    <AnimatedBg   key={emoji} />
    ))}
  </div>
  )
}

export default AboutMe