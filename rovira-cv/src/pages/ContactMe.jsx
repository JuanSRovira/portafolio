import React from 'react'
import lineas from '../assets/Lineas.png'
import flecha from '../assets/circulo-de-flecha.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import casa from '../assets/casa.png'
import targetA from '../assets/tarjeta1.png'
import targetB from '../assets/tarjeta2.png'
import targetC from '../assets/tarjeta3.png'
import labelA from '../assets/label1.png'
import labelB from '../assets/label2.png'
import labelC from '../assets/label3.png'
import instagram from '../assets/instalogo.png'
import linkedin from '../assets/linklogo.png'
import whatsapp from '../assets/whalogo.png'

const ContactMe = () => {
  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    formData.append('access_key', '6026e9e9-d603-41cc-894a-1484e0e2454d')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: json
    }).then((res) => res.json())

    if (res.success) {
      console.log('Success', res)
      window.location.href = 'https://web3forms.com/success'
    }
  }

  const redirigirInstagram = () => {
    window.open('https://www.instagram.com/juanito.dibuja/', '_blank', 'noopener,noreferrer')
  }
  const redirigirLinkedin = () => {
    window.open('https://www.linkedin.com/in/juan-manuel-sanchez-rovira-4062ab274/', '_blank', 'noopener,noreferrer')
  }
  const redirigirWhatsapp = () => {
    window.open('https://wa.me/527225551462', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className='parallax-contact'>
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={0.1} style={{ backgroundImage: `url(${labelA})`, backgroundSize: '100%', opacity: '0.8' }} />
        <ParallaxLayer offset={0.9} speed={0.1} style={{ backgroundImage: `url(${labelB})`, backgroundSize: '100%' }} />
        <ParallaxLayer offset={0.5} speed={0.1} style={{ backgroundImage: `url(${labelC})`, backgroundSize: '100%' }} />
        <ParallaxLayer offset={0.1} speed={0.3}>
          <img src={targetA} className='targetA' alt='targetA' />
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={0.3}>
          <img src={targetB} className='targetB' alt='targetB' />
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={0.3}>
          <img src={targetC} className='targetC' alt='targetC' />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} style={{ backgroundImage: `url(${casa})`, backgroundSize: 'cover' }} />
        <ParallaxLayer offset={1} speed={1}>
          <div className='contact-me-body'>
            <div className='contact-container'>
              <form onSubmit={onSubmit} className='contact-left'>
                <div className='contact-left-title'>
                  <h2>Get in touch</h2>
                  <hr />
                </div>
                <input type='text' name='name' placeholder='Your Name' className='contact-inputs' required />
                <input type='email' name='email' placeholder='Your Email' className='contact-inputs' required />
                <textarea name='message' placeholder='your message' className='contact-inputs' required />
                <button type='submit'> Submit <img src={flecha} alt='' /></button>
              </form>
              <div className='contact-right'>
                <img src={lineas} />
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.5}>
          <button onClick={redirigirInstagram} style={{ border: 'none', background: 'none', padding: 0 }}>
            <img className='instagram' src={instagram} alt='Mi Instagram' style={{ cursor: 'pointer' }} />
          </button>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.5}>
          <button onClick={redirigirLinkedin} style={{ border: 'none', background: 'none', padding: 0 }}>
            <img className='Linkedin' src={linkedin} alt='Mi linkedin' style={{ cursor: 'pointer' }} />
          </button>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.5}>
          <button onClick={redirigirWhatsapp} style={{ border: 'none', background: 'none', padding: 0 }}>
            <img className='whatsapp' src={whatsapp} alt='Mi whatsapp' style={{ cursor: 'pointer' }} />
          </button>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default ContactMe
