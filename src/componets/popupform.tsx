import React, { useEffect, useState } from 'react'
import './popupform.css'
import logo from '../assets/logo-starkare-logo-white.png';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import {Link} from 'react-router-dom'
type Props = {
  shouldHaveDescription:Boolean,
  context:String
}

function popupform({shouldHaveDescription,context}:Props) {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
    fcontext: context
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_BACKENDURL;
 
  //<!--<input type={shouldHaveDescription? "text":"hidden"} name='descrip' id="descri" placeholder='Message'/>>
  function submitForm(formData2: React.FormEvent<HTMLFormElement>) {
    formData2.preventDefault()
    setLoading(true)
    console.log(formData)
    //MAKE SURE THAT THE USER UNDERSTAD THAT IS DOES NOT WORK
    axios.post('/api/emailApi',formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) =>{
      if(res.status == 200){
        setSubmitted(true);
      }else{
        alert("Något gick fel vänligen försök igen")
        setFormData({ name: '', email: '', phone: '', comment: '', fcontext: '' });
      }
      setLoading(false)
    }).catch(error => {
      console.log(error)
      setLoading(false)
      alert("Något gick fel vänligen försök igen")
    })


    //formData.currentTarget.reset()
  }

 
  const controller = new AbortController();
  const { signal } = controller;
  


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value // Update the specific field in state
    });
};

  useEffect(()=>{
    function scrollEvent(event:WheelEvent) {
      event.preventDefault();
      event.stopPropagation();
      // now define custom functionality
    }

    window.addEventListener("wheel", scrollEvent,{passive:false});
    return () => window.removeEventListener("wheel", scrollEvent);
  },[])


  return (
    

    <section className='form-section' >
      
        <form onSubmit={submitForm} >
            <img src={logo}/>
            <p className={(submitted||loading)?'form-hidden':''}>{!shouldHaveDescription?"Fyll i din information för att komma igång":"Väligen fyll i formuläret så återkommer vi" }</p>
            <input type="text" name="name" id="name" placeholder='Namn *' required value={formData.name} // Controlled component
            className={(submitted||loading)?'form-hidden':''}
                onChange={handleChange} // Handle changes
                autoComplete='name'
                />
            <input type="email" name="email" id="epost" placeholder='E-post *' required  value={formData.email} // Controlled component
                onChange={handleChange} // Handle changes
                autoComplete='email'
                className={(submitted||loading)?'form-hidden':''}
                />
            <input type={shouldHaveDescription? "hidden":'tel'} name="phone" id="tele" placeholder='Telefonnummer *' required  value={formData.phone} // Controlled component
                onChange={handleChange} // Handle changes
                autoComplete='tel'
                className={(submitted||loading)?'form-hidden':''}
                
                />
            <textarea id="comment" name='comment' hidden={false} value={formData.comment} // Controlled component
                onChange={handleChange} // Handle changes
                className={(submitted||loading)?'form-hidden':''}
                ></textarea>
            <p className={(submitted||loading)?'form-hidden abort':'abort'}>
              Genom att skicka formuläret godkänner ni våran <Link to='/GDPR-POLICY'>GDPR policy</Link>
            </p>
            <input className={(submitted||loading)?'form-hidden':'submit'} type="submit" value="Kontakta oss" />
            <div className={(submitted && !loading)?'':'form-hidden'}>
            <h2>Välkommen till Starkare</h2>
            <p>Vi kommer att ta kontakt med dig så snart som möjligt för att komma igång</p>
            </div>
            <div className={(!submitted && loading)?'':'form-hidden'}>
                <CircularProgress />
            </div>
        </form>
        



    </section>
  )
}

export default popupform