import React, { useEffect, useState, useRef  } from 'react'

import AnimatedText from '../components/AnimatedText'
import Cube from '../components/AnimatedCube'
import AnimatedButton from '../components/AnimatedButton'


const Cover = () => {

  const constraintsRef = useRef(null);

  return (
    <div className='container cover_container'>
      <div className='window' ref={constraintsRef}>
        <div className='greeting'>
          <div className='main__greeting'>
            <AnimatedText text={"Hello!"} delay={0} />
            <AnimatedText text={"I'm Juan"} delay={.3} clase='name'/>
          </div>
          <div className='desc__greeting'>
            <AnimatedText text={"Web Dev"} delay={.7} />
            <AnimatedButton text={'My Proyects '} arrow={"🡢"} clase='myProjects_B'/>

          </div>
       
        </div>
        <div className='side_cont'>
            <Cube 
            clase='cmdComand'
            dragLimits={constraintsRef}
            animateObj={{
              scale: [1, .5, 1.5],
              rotate: [0, 90, 0],
              opacity: [0, 1, 1]
            }}
            />  
            <Cube
            clase='anvile'
            dragLimits={constraintsRef}
            animateObj={{
              scale: [0, 1, 1.25],
              opacity: [0, 0, 1]
            }}
            />
              <Cube 
              clase='redStone'
              dragLimits={constraintsRef}
              animateObj={{
                scale: [1, .5, 1.5],
                rotate: [0, -90, 0],
                opacity: [0, 1, 1],
            }}
            />
            <p className='dragMe'>Drag_me!</p>
        </div>

      </div>  
      <div className='go_to'>
            <p>Let's Work Together!</p>
          
      </div>

    </div>
  )
}

export default Cover