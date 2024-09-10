import React from 'react'
import './cardBox.css'

type Props = {
    title:String,
    text:String
}



function cardBox({title, text}:Props) {
  return (
    <div className='cardBox'>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default cardBox