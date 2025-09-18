import React from 'react'
import '../styles/Contact.css'
import Textbox from '../components/Textbox.jsx'
import Button from '../components/Button.jsx'
import icon4 from '../assets/icon-4.svg'
import icon5 from '../assets/icon-5.svg'
import icon6 from '../assets/icon-6.svg'
import icon7 from '../assets/icon-7.svg'

function Contact() {
  return ( 
    <div className='contact-container' id='contact'>
      <div className='contact-title'>Contact</div>
      <form className='contact-info'>
        <Textbox 
          icon = {icon4}
          placeholder="First Name *"
        />
        <Textbox 
          icon = {icon4}
          placeholder="Last Name *"
        />
        <Textbox 
          icon = {icon5}
          placeholder="Telephone Number *"
        />
        <Textbox 
          icon = {icon6}
          placeholder="Email Address *"
        />
        <div className='textarea-container'>
          <img className='textarea-icon' src={icon7}></img>
          <textarea className='contact-textarea' placeholder='Description *' required></textarea>
        </div>
        <Button  name="Order" size="small" color="blue"/>
      </form>
    </div>
  )
}

export default Contact