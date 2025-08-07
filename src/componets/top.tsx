import React from 'react';
import logo from '../assets/logo.png';
import logoW from '../assets/slogan-starkare-logo-white.png';
import './top.css'
import Banner from './banner';
import {Link} from 'react-router-dom'
import { Contrast, Menu } from '@mui/icons-material';
type Props={
  bannerText:String;
  menu: ()=>void;
  darkmode: Boolean;
  active: Boolean;
}

function header({bannerText, menu, darkmode, active}:Props) {
  var click = ()=>{
    var element = document.getRootNode().lastChild?.lastChild as HTMLBodyElement;
    console.log(element)
    if(element?.classList.contains("light")){
      element?.classList.remove("light")
      element?.classList.add("dark")
    }else{
      element?.classList.remove("dark")
      element.classList.add("light")
    }
  }
  var onMenu = ()=>{
    
  }
  
  return (
    <header className='header'>
    {active?<Banner bannerText={bannerText}/>:""}
    <div className='container'>
    <div className='flex'>
        <Link to='/#home'>
        <img src={logoW} className="imageLight"/>
        <img src={logo} className="imageDark"/>
        </Link>
        <ul className='list'>
            <li><Link to='/#home'>HEM</Link></li>
            <li><Link to='/kids#rehab'>KIDS</Link></li>
            <li><Link to='/#cards'>VÅRA TJÄNSTER</Link></li>
            <li><Link to='/#faq'>VANLIGA FRÅGOR</Link></li>
            <li><Link to='/#schema'>SCHEMA</Link></li>
            <li><Link to='/#contactus'>KONTAKTA OSS</Link></li>
            <li onClick={click}><Contrast/></li>
        </ul>
        <Menu className='expand' onClick={menu}/>
    </div>
    </div>

    </header>
  
  )
}

export default header