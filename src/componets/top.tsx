import React from 'react';
import logo from '../assets/logo.png';
import './top.css'
import Banner from './banner';
import {Link} from 'react-router-dom'
type Props={
  bannerText:String;
}

function header({bannerText}:Props) {
  return (
    
    <header className='header'>
    <Banner bannerText={bannerText}/>
    <div>
        <Link to='/#splash'><img src={logo} /></Link>
        <ul className='list'>
            <li><Link to='/#splash'>HEM</Link></li>
            <li><Link to='/#cards'>VÅRA TJÄNSTER</Link></li>
            <li><Link to='/#faq'>VANLIGA FRÅGOR</Link></li>
            <li><Link to='/#schema'>SCHEMA</Link></li>
            <li><Link to='/#contactus'>KONTAKTA OSS</Link></li>
        </ul>
    </div>
    </header>
  
  )
}

export default header