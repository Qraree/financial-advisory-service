import React from 'react'
import './Input.css'

const Input = (props) => {
  return (
    <div>
      <input type={props.type} value={props.value} onChange={props.onChange} className={props.className}>

      </input>
    </div>
  )
}

export default Input
