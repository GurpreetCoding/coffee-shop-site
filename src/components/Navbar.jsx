import React from 'react'
import logo from '../assets/logo-1.svg'
import '../styles/Navbar.css'
import Button from '../components/Button.jsx'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo-container'>
        <img src={logo}></img>
        <div className='logo-text'>ROASTED</div>
      </div>
      <div className='nav-links'>
        <a href='#'><div className='nav-link'>Home</div></a>
        <a href='../App.jsx#menu'><div className='nav-link'>Menu</div></a>
        <a href='../App.jsx#about'><div className='nav-link'>About</div></a>
        <a href='../App.jsx#order/contact'><div className='nav-link'>Contact</div></a>
        <a href='../App.jsx#order/contact'><Button className="nav-button" name='Order' size="small" color='blue'></Button></a>
      </div>
    </div>
  )
}

export default Navbar