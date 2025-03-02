import "./splash.css"
import React, { useEffect, useState} from 'react'
import logo from '../assets/b1.jpg';

type Props = {
    setPopup: (s:string)=>void
} 


function Splash({setPopup}:Props) {
  const [homeImageHeight, setHomeImageHeight] = useState<number | null>(null);
  const [splashHeight, setSplashHeight] = useState<number | null>(null);


  useEffect(()=>{
    document.getElementById("homeimage")?.classList.add("home")
    
    return () => document.getElementById("homeimage")?.classList.remove("home");
  },[])
  useEffect(() => {
    const homeImageElement = document.getElementById("homeimage");
    if (homeImageElement) {
        const height = homeImageElement.getBoundingClientRect().height;
        setHomeImageHeight(height);
    }
}, []);

useEffect(() => {
    const splashElement = document.getElementById("splash");
    if (splashElement) {
        const height = splashElement.getBoundingClientRect().height;
        setSplashHeight(height);
    }
}, []);

const bottomMargin = homeImageHeight && splashHeight ? homeImageHeight - splashHeight - 100 : 0;



  return (
    <section id="splash" className="splash" style={{ marginBottom: bottomMargin ? `${bottomMargin}px` : '0' }}>
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