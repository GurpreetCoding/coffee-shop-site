import React from 'react'
import '../styles/Menu.css'
import Card from '../components/Card.jsx'
import menu1 from '../assets/menu-1.svg'
import menu2 from '../assets/menu-2.svg'
import menu3 from '../assets/menu-3.svg'
import menu4 from '../assets/menu-4.svg'
import menu5 from '../assets/menu-5.svg'
import menu6 from '../assets/menu-6.svg'
import menu7 from '../assets/menu-7.svg'
import menu8 from '../assets/menu-8.svg'

function Menu() {
  return (
    <div className='menu-container' id='menu'>
      <div className='menu-title'>Menu</div>
      <div className='menu-tagline'>What's <span className='text-to-green'>Brewing</span> & What's <span className='text-to-green'>Baking</span></div>
      <div className='menu-grid-container'>
        <div className='menu-grid'>
            <Card 
              image={menu1}
              title="Expresso"
              description="Bold & Intense coffee shot"
              price="$3.99"
            />
            <Card
              image={menu2}
              title="Latte"
              description="Creamy espresso with steamed milk"
              price="$5.99" 
            />
            <Card
              image={menu3}
              title="Banana Bread"
              description="Moist, sweet, and banana-rich."
              price="$3.99" 
            />
            <Card 
              image={menu4}
              title="Muffins"
              description="Soft, fluffy muffins in assorted flavors"
              price="$2.99"
            />
            <Card 
              image={menu5}
              title="Americano"
              description="Espresso diluted with hot water"
              price="$4.99"
            />
            <Card 
              image={menu6}
              title="Iced Coffee"
              description="Chilled brewed coffee over ice"
              price="$5.49"
            />
            <Card 
              image={menu7}
              title="Cookies"
              description="Soft, chewy or crisp cookies"
              price="$1.99"
            />
            <Card 
              image={menu8}
              title="Bagels"
              description="Chewy, golden rings — classic or topped."
              price="$2.49"
            />
        </div>
      </div>
    </div>  
  )
}

export default Menu