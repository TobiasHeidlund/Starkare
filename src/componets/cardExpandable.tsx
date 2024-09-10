import React from 'react'
import './cardExpandable.css'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react'
type Props = {
    title:String,
    text:String
}

function cardExpandable({title,text}:Props) {
  const [count, setCount] = useState(0)
  return (
    <div className='card-expandable' onClick={()=>{
      setCount(count? 0:1)
    }}>
        <div className="title">
            <h3>{title}</h3>
            <AddIcon/>
        </div>
        <div className={count == 0?"hide":"expand"}>
        <p>{text}</p>
        </div>
    </div>
  )
}

export default cardExpandable