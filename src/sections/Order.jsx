import React from 'react'
import '../styles/Order.css'
import icon1 from '../assets/icon-1.svg'
import icon2 from '../assets/icon-2.svg'
import icon3 from '../assets/icon-3.svg'

function Order() {
  return (
    <div className='order-container' id="order">
      <div className='order-title'>Order</div>
      <div className='order-info'>
        <div className='order-phone'>
          <img src={icon1}></img>
          <div className='phone-style'>+1 123 123 1234</div>
        </div>
        <div className='order-hours'>
          <img src={icon2}></img>
          <div>
            <div className='hours-style'>Monday To Friday <br></br> 09:00 AM To 06:00 PM </div>
          </div>
        </div>
        <div className='order-location'>
          <img src={icon3}></img>
          <div>
            <div className='location-style'>123 Main Street <br></br> Suite 4B <br></br> Anytown, AL 31401 <br></br> United States</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order