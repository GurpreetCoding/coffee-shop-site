import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Menu from './sections/Menu.jsx'
import Order from './sections/Order.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About id='about'/>
      <Menu id='menu'/>
      <div className='container' id='order/contact'>
        <Order />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
