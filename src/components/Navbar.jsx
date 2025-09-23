import React, {useState} from 'react'
import logo from '../assets/logo-1.svg'
import hamburger from '../assets/hamburger.svg'
import '../styles/Navbar.css'
import Button from '../components/Button.jsx'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMargin, sethasMargin] = useState(false);

  const toggleMenu = () => {
    console.log("hi");
    setIsOpen(!isOpen);
    sethasMargin(!hasMargin);
  }

  return (
    <div className={`navbar ${hasMargin ? 'margin' : ''}`}>
      <div className='logo-container'>
        <img src={logo}></img>
        <div className='logo-text'>ROASTED</div>
      </div>

      <div className='hamburger-icon' onClick={toggleMenu}>
        <img src={hamburger}></img>
      </div>



      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href='#'><div className='nav-link'>Home</div></a>
        <a href='#menu'><div className='nav-link'>Menu</div></a>
        <a href='#about'><div className='nav-link'>About</div></a>
        <a href='#order'><div className='nav-link'>Contact</div></a>
        <a href='#order'><Button className="nav-button" name='Order' size="small" color='blue'></Button></a>
      </div>
    </div>
  )
}

export default Navbar