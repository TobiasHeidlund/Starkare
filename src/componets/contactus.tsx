import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Popupform from './popupform';
import './contactus.css'

function contactus() {
  return (
    <section className='contactus'>
        
        <div className='row'>
            <a href='https://maps.app.goo.gl/Gha9eR3vJ7i4PLdeA'>
                <HomeIcon/>
                <p>Analysvägen 7A, <br/>Mölnlycke Företagspark</p>
            </a>
            <a href='tel:+46764792433'>
                <LocalPhoneIcon/>
                <p>0764-792433</p>
            </a>
            <a href='mailto:starkare@starkarecrossfit.se'>
                <EmailIcon/>
                <p>starkare@<br/>starkarecrossfit.se</p>
            </a>
            <div className='socials'>
            <a href='https://www.instagram.com/starkarecrossfit/'><InstagramIcon/></a>
            <a href='https://www.facebook.com/starkarecrossfit/'><FacebookIcon/></a>
            </div>
        </div>
        <div className='row'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17064.84017819241!2d12.086163091603263!3d57.68069408235191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff116ba6d7f19%3A0x1b4425fcb78b0189!2sStarkare%20CrossFit!5e0!3m2!1ssv!2sse!4v1724234041052!5m2!1ssv!2sse"> </iframe> 
        <form action="">
            <input type="text" name="name" id="name" placeholder='Namn*' required/>
            <input type="email" name="email" id="epost" placeholder='E-post*' required />
            <input type="tel" name="tele" id="tele" placeholder='Telefonnummer*' required />
            <textarea  name='descrip' id="descri" placeholder='Message' className='descri'/>
            <input className="submit" type="submit" value="Kontakta oss" />
        </form>
        </div>

        
    </section>


  )
}

export default contactus