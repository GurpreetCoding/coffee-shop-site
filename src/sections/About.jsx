import React from 'react'
import '../styles/About.css'
import img3 from '../assets/img-3.svg'

function About() {
  return (
    <div className='about-container' id='about'>
      <div className='about-left'>
        <img src={img3}></img>
      </div>
      <div className="about-right">
        <div className='about-title'>About</div>
        <div className='about-tagline'><span className='text-to-blue'>Made for </span>coffee lovers, by <span className='text-to-blue'>coffee lovers.</span></div>
        <div className='about-p1'>We believe coffee is more than just a drink — it's a moment of pause, a reason to gather, and a daily ritual worth savoring.</div>
        <div className='about-p2'>At Roasted, we serve freshly brewed coffee using responsibly sourced beans and local ingredients. Whether you're grabbing a quick espresso or settling in with a good book, our space is crafted for comfort and community.</div>
      </div>

    </div>
  )
}

export default About