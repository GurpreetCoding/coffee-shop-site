import React, { useState, useEffect} from 'react'
import '../styles/Hero.css'
import Button from '../components/Button'
import img1 from '../assets/img-2.svg'
import img2 from '../assets/img-2-resize.svg'

function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 600);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <div className='hero-section'>
      <div className='hero-left'>
        <div className='hero-title'>Start your Morning with Something Better.</div>
        <div className='hero-tagline'>Coffee. Comfort. Community.</div>
        <div className='hero-buttons'>
          <a href='../App.jsx#order/contact'><Button className="hero-left-button" name="Order" size={`${isMobile ? 'small' : 'large'}`} color="blue"/></a>
          <a href='../App.jsx#menu'><Button name="Menu" size={`${isMobile ? 'small2' : 'large2'}`} color="transparent"/></a>
        </div>
      </div>
      <div className='hero-right'>
        <img className='hero-desktop' src={img1}></img>
        <img className='hero-mobile' src={img2}></img>
      </div>
    </div>
  )
}

export default Hero