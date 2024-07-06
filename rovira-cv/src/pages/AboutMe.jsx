import React from 'react'
import viejito from '../assets/viejito.png'
import verde from '../assets/Green.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const AboutMe = () => {
  return (
    <div className='Aboutme-div'>
      <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={0.5} style={{ backgroundImage: `url(${viejito})`, backgroundSize: 'cover' }}>
          <h2>Sobre mi</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} style={{ backgroundImage: `url(${verde})`, backgroundSize: 'cover' }}>
          <h2>Web Development is hard but fun</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default AboutMe
