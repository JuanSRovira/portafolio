import React from 'react'
import viejito from '../assets/viejito.png'
import verde from '../assets/Green.png'
import white from '../assets/cigue.svg'
import amarillo from '../assets/amarillo.png'
import rojo from '../assets/mujer.png'
import saxofon from '../assets/saxofon.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import fondo from '../assets/fondo.png'

const Home = () => {
  return (

    <div className='Home-body'>

      <Parallax pages={3} className='parallax-Home'>
        <img src={fondo} style={{ height: '110%' }} className='fondo' onContextMenu={{ return: false }} />

        <ParallaxLayer className='green' offset={1.9} speed={0.3} onContextMenu={{ return: false }} style={{ backgroundImage: `url(${verde})`, backgroundSize: 'cover' }} />
        <ParallaxLayer className='green-text' offset={1.9} speed={0.5}>
          <p>"Innovative and imaginative artist with junior fullstack development skills, proficient in bringing artistic concepts to life through modern web technologies and programming languages.</p>
        </ParallaxLayer>

        <ParallaxLayer className='amarillo' offset={1} speed={0.5} style={{ backgroundImage: `url(${amarillo})`, backgroundSize: '25%' }} />
        <ParallaxLayer className='saxofon' offset={1} speed={0.5} style={{ backgroundImage: `url(${saxofon})`, backgroundSize: '25%' }} />
        <ParallaxLayer className='rojo' offset={1} speed={0.5} style={{ backgroundImage: `url(${rojo})`, backgroundSize: '25%' }} />

        <ParallaxLayer className='viejito' offset={0} speed={0.1} style={{ backgroundImage: `url(${viejito})`, backgroundSize: 'cover' }} />

        <ParallaxLayer offset={0.15} speed={0.5}>
          <div className='Home-content'>
            <h1>Juan Rovira</h1>
            <h3>Junior Developer and Artist</h3>
          </div>
        </ParallaxLayer>

        <ParallaxLayer className='top' offset={0.9} speed={0.4}>
          <p>As a developer I am specialized in the creation and styling of web pages, my knowledge in Visual Arts allows me to create immersive and unique visual experiences that help users connect with the content in an emotional and creative way</p>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1.9, end: 1.7 }} className='cigueña' style={{ width: '30%' }}>
          <img src={white} onContextMenu={{ return: false }} />
        </ParallaxLayer>

      </Parallax>
    </div>

  )
}

export default Home
