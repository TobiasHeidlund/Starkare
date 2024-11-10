import React, { useEffect, useState } from 'react'
import './popupform.css'
import logo from '../assets/logo.png';
import axios from 'axios';

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
  const apiUrl = import.meta.env.VITE_BACKENDURL;
 
  //<!--<input type={shouldHaveDescription? "text":"hidden"} name='descrip' id="descri" placeholder='Message'/>>
  function submitForm(formData2: React.FormEvent<HTMLFormElement>) {
    formData2.preventDefault()
    
    console.log(formData)
    //MAKE SURE THAT THE USER UNDERSTAD THAT IS DOES NOT WORK
    axios.post('/api/emailApi',formData).then((res) =>{
      if(res.status == 200){
        setSubmitted(true);
        console.log("SUBMITED WITH STATUS 200")
      }else{
        alert("Något gick fel vänligen försök igen")
      }
      console.log("SUBMITED WITH STATUS")
      console.log(res.status)

      setFormData({ name: '', email: '', phone: '', comment: '', fcontext: '' });
    }).catch(error => {
      console.log(error)
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
            <p className={submitted?'form-hidden':''}>{!shouldHaveDescription?"Fyll i din information för att komma igång":"Väligen fyll i formuläret så återkommer vi" }</p>
            <input type="text" name="name" id="name" placeholder='Namn *' required value={formData.name} // Controlled component
            className={submitted?'form-hidden':''}
                onChange={handleChange} // Handle changes
                autoComplete='name'
                />
            <input type="email" name="email" id="epost" placeholder='E-post *' required  value={formData.email} // Controlled component
                onChange={handleChange} // Handle changes
                autoComplete='email'
                className={submitted?'form-hidden':''}
                />
            <input type={shouldHaveDescription? "hidden":'tel'} name="phone" id="tele" placeholder='Telefonnummer *' required  value={formData.phone} // Controlled component
                onChange={handleChange} // Handle changes
                autoComplete='tel'
                className={submitted?'form-hidden':''}
                
                />
            <textarea id="comment" name='comment' hidden={shouldHaveDescription?false:true} value={formData.comment} // Controlled component
                onChange={handleChange} // Handle changes
                className={submitted?'form-hidden':''}
                ></textarea>
            <input className={submitted?'form-hidden':'submit'} type="submit" value="Kontakta oss" />
            <div className={submitted?'':'form-hidden'}>
            <h2>Välkommen till Starkare</h2>
            <p>Vi kommer att ta kontakt med dig så snart som möjligt för att komma igång</p>
            </div>
        </form>
        



    </section>
  )
}

export default popupform