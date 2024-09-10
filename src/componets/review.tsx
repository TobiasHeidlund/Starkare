import React from 'react'
import './review.css'


type Props = {
    author:String,
    text:String,
    active:Number,
    index:Number
}

function review({author,text,active,index}: Props) {
    return (
    <div id={index+""} className={active==index? "fade-in":"fade-out"}>
        <p className="text">{text}</p>
        <p className='author'>{author}</p>
    </div>
  )
}

export default review