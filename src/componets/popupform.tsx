import React, { useEffect } from 'react'
import './popupform.css'
import logo from '../assets/logo.png';

type Props = {
  shouldHaveDescription:Boolean
}

function popupform({shouldHaveDescription}:Props) {
  //<!--<input type={shouldHaveDescription? "text":"hidden"} name='descrip' id="descri" placeholder='Message'/>>
  function submitForm(formData: React.FormEvent<HTMLFormElement>) {
    formData.preventDefault()
    let name = (document.getElementById("name") as HTMLInputElement);
    let email = (document.getElementById("epost") as HTMLInputElement);
    let tele = (document.getElementById("tele") as HTMLInputElement);
    let comment = (document.getElementById("comment") as HTMLTextAreaElement);
    formData.currentTarget.reset()
  }

 
  const controller = new AbortController();
  const { signal } = controller;

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
      
        <form action="">
            <img src={logo}/>
            <p>{!shouldHaveDescription?"Fyll i din information för att komma igång":"Väligen fyll i formuläret så återkommer vi" }</p>
            <input type="text" name="name" id="name" placeholder='Namn *' required/>
            <input type="email" name="email" id="epost" placeholder='E-post *' required />
            <input type={shouldHaveDescription? "hidden":'tel'} name="tele" id="tele" placeholder='Telefonnummer *' required />
            <textarea id="comment" hidden={shouldHaveDescription?false:true}></textarea>
            <input className="submit" type="submit" value="Kontakta oss" />
        </form>
    </section>
  )
}

export default popupform