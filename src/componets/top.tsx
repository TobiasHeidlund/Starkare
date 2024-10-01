import React from 'react';
import logo from '../assets/logo.png';
import './top.css'
import Banner from './banner';
import {Link} from 'react-router-dom'
import { Contrast, Menu } from '@mui/icons-material';
type Props={
  bannerText:String;
  menu: ()=>void;
}

function header({bannerText, menu}:Props) {
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
    <Banner bannerText={bannerText}/>
    <div className='container'>
    <div className='flex'>
        <Link to='/#home'><img src={logo} /></Link>
        <ul className='list'>
            <li><Link to='/#home'>HEM</Link></li>
            <li><Link to='/rehab#rehab'>REHAB</Link></li>
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