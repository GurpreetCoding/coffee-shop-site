import React from 'react'
import '../styles/Textbox.css'
import tempImg from '../assets/icon-4.svg'

function Textbox(props) {
  return (
    <div className='textbox-container'>
      <img className='textbox-icon' src={props.icon}></img>
      <input className='textbox-input' type='text' placeholder={props.placeholder} required></input>
    </div>
  )
}

export default Textbox