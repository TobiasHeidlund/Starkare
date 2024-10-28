import "./splash.css"
import React, { useEffect } from 'react'
import logo from '../assets/b1.jpg';

type Props = {
    setPopup: (s:string)=>void
} 


function Splash({setPopup}:Props) {
  
  useEffect(()=>{
    document.getElementById("homeimage")?.classList.add("home")
    
    return () => document.getElementById("homeimage")?.classList.remove("home");
  },[])

  


  return (
    <section id="splash" className="splash">
        <div id='home'className="anchorbig"></div>
        <div className="centered">
        <h1>Kom i Form, Bli Stark & Må Bra</h1>
        <h3>Vi hjälper dig komma igång</h3>
        <button onClick={()=>{
          setPopup("Boka kostnadsfri konsutation nu")}}><b>Boka kostnadsfri konsutation nu</b></button>
        </div>
    </section>

    
  )
}

export default Splash