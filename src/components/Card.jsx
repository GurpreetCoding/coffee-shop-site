import React from 'react'
import '../styles/Card.css'

function Card(props) {
  return (
    <div className='card-container'>
      <div>
        <img className='card-image' src={props.image}></img>
      </div>
      <div>
        <div className='card-title'>{props.title}</div>
        <div className='card-description'>{props.description}</div>
        <div className='card-price'>{props.price}</div>
      </div>

    </div>
  )
}

export default Card