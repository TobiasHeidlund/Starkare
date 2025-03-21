import React from 'react'
import './cardBox.css'

type Props = {
    title:String,
    text:String,
    boxname:string
}



function cardBox({title, text, boxname}:Props) {
  return (
    <div className={boxname}>
        <h2>{title}</h2>
        {text.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
    </div>
  )
}

export default cardBox