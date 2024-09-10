import "./splash.css"
import React from 'react'
import logo from '../assets/b1.jpg';

type Props = {
    setPopup: ()=>void
} 


function Splash({setPopup}:Props) {
  return (
    <section id="splash" className="splash">
        <div className="centered">
        <h1>Kom i Form, Bli Stark & Må Bra</h1>
        <h3>Vi hjälper dig komma igång</h3>
        <button onClick={setPopup}>Boka kostnadsfri konsutation nu</button>
        </div>
    </section>

    
  )
}

export default Splash