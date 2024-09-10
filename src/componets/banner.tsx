import React from 'react'
import './bannner.css'
import {Link } from "react-router-dom";
type Props = {
    bannerText:String
}

function banner({bannerText}:Props) {
  return (
    <Link to="/bootcamp#bootcamp" className='banner'><b>{bannerText}</b></Link>
  )
}

export default banner