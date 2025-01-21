import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Popupform from './popupform';
import './contactusv2.css'
import { LiveHelp } from '@mui/icons-material';
import { Link } from 'react-router-dom';

type Props = {
    setPopup: (s:string)=>void
} 
function contactus({setPopup}:Props) {
  return (
    <section className='contactus'>
        <div id='contactus' className='anchor'></div>
        <h2>Kontakta oss</h2>
        <div className='row2'>
            <a className='side' href='tel:+46764792433'>
                    <LocalPhoneIcon/>
                    <p>0764-792433</p>
            </a>
            <a className='mid' href='mailto:starkare@starkarecrossfit.se'>
                    <EmailIcon/>
                    <p>starkare@starkarecrossfit.se</p>
            </a>
            <a className='side' onClick={()=>{setPopup("Fråga")}}>
                    <LiveHelp/>
                    <p>Frågor</p>
            </a>
        </div>
        <h2>Besök Oss</h2>
        <div className="row">
        <div className='column right'>
            <a href='https://maps.app.goo.gl/Gha9eR3vJ7i4PLdeA'>
                <HomeIcon/>
                <p>Analysvägen 7A, <br/>Mölnlycke Företagspark</p>
            </a>
           
            <a href='https://www.instagram.com/starkarecrossfit/'>
                <InstagramIcon/>
                <p>Instagram</p>
            </a>

            <a href='https://www.facebook.com/starkarecrossfit/'>
                <FacebookIcon/>
                <p>Facebook</p>
            </a>
         
        </div>
        <iframe className="left" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17064.84017819241!2d12.086163091603263!3d57.68069408235191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff116ba6d7f19%3A0x1b4425fcb78b0189!2sStarkare%20CrossFit!5e0!3m2!1ssv!2sse!4v1724234041052!5m2!1ssv!2sse"> </iframe> 
        </div>

        <p className='copyright'>© Starkare Crossfit - All rights reserved | By Tobias Heidlund</p> <Link to='/GDPR-POLICY'>GDPR policy</Link>
    </section>


  )
}

export default contactus