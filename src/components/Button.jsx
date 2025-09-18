import React from 'react'
import '../styles/Button.css'

function Button(props) {
  return (
    <button
      className={`button ${props.size} ${props.color}`}
    >{props.name}</button>
  )
}

export default Button