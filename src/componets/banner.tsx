import React from 'react'
import './bannner.css'
import {Link } from "react-router-dom";
type Props = {
    bannerText:String
}

function banner({bannerText}:Props) {
  return (
    <div className='bannercontainer'>
      <div className="bannerflex">
          <Link to="/bootcamp#bootcamp" className='banner'><b>{bannerText}</b></Link>
        </div>
    </div>
    
  )
}

export default banner