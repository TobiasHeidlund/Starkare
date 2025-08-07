import React from 'react'
import './cardBox.css'
import {Link} from 'react-router-dom'

type Props = {
    title:String,
    text:String,
    boxname:string
    link?: React.ReactNode
}



function cardBox({title, text, boxname, link}:Props) {
  return (
    <div className={boxname}>
        <h2>{title}</h2>
        {text.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        {link}
    </div>
  )
}

export default cardBox