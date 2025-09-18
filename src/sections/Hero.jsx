import React from 'react'
import '../styles/Hero.css'
import Button from '../components/Button'
import img1 from '../assets/img-2.svg'

function Hero() {
  return (
    <div className='hero-section'>
      <div className='hero-left'>
        <div className='hero-title'>Start your Morning with Something Better.</div>
        <div className='hero-tagline'>Coffee. Comfort. Community.</div>
        <div className='hero-buttons'>
          <a href='../App.jsx#order/contact'><Button className="hero-left-button" name="Order" size="large" color="blue"/></a>
          <a href='../App.jsx#menu'><Button name="Menu" size="large2" color="transparent"/></a>
        </div>
      </div>
      <div className='hero-right'>
        <img src={img1}></img>
      </div>
    </div>
  )
}

export default Hero