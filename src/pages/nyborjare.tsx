import React from 'react'
import './nyborjare.css'
import Contactus from '../componets/contactusv2'
import CardBox from '../componets/cardBox'

type Prop = {
  setPopup: (s:string)=>void
}

function nyborjare({setPopup}:Prop) {

  return (
    <div  className='nyborjare'>
    <div className="anchorbig" id="nyborjare"></div>
    <section className='body'>
    <div className='section2'>
    <h1>Nybörjarkurs i CrossFit – start vecka 46</h1>
    <h3>Fem veckor för att lära dig grunderna i CrossFit</h3>
    <div className='space'></div>
    <button onClick={()=>{setPopup("Boka Nybörjarkurs")}}>Kontakta oss</button>
    </div>
    <section className='cardContaienr2'>
      <CardBox title={"Vill du komma igång med träningen men vet inte riktigt var du ska börja?"} text={"Hos Starkare CrossFit möter vi dig precis där du är. Vår nybörjarkurs är skapad för dig som vill lära känna CrossFit i en varm och välkomnande miljö – utan press eller prestation."} boxname={"cardbox3"}/>
      <CardBox title={""} text={"Under fem veckor (onsdagar kl. 19.30–20.30) guidar våra erfarna coacher dig genom grunderna inom CrossFit. Du får lära dig rätt teknik i övningar som knäböj, marklyft, pressar och dragövningar – rörelser som bygger styrka, stabilitet och kroppskontroll."} boxname={"cardbox3"}/>
      <CardBox title={""} text={"Kursen ger dig inte bara kunskap om hur du tränar säkert och effektivt, utan också en starkare grund för din fortsatta träning – oavsett om du vill fortsätta hos oss eller på egen hand. Många som går kursen upptäcker hur mycket glädje, energi och gemenskap som finns i CrossFit – och fortsätter som en del av vårt härliga Starkare-gäng."} boxname={"cardbox3"}/>
      <CardBox title={""} text={"💛 Alla kan börja någonstans. Låt oss hjälpa dig hitta glädjen i träning och bygga en styrka som håller – både i kroppen och i vardagen. \n👉 Begränsat antal platser – anmäl dig och säkra din plats redan idag!"} boxname={"cardbox3"}/>
      <CardBox title={""} text={"START: 12/11 2025 \nLÄNGD: 5 veckor\nTID: Onsdagar 19.30-20.30\n PLATS: Starkare Crossfit, Analysvägen 7A\n PRIS: 1500 kr, faktura 30 dagar. Friskvård går bra att använda. "} boxname={"cardbox3"}/>
    </section>
    <button onClick={()=>{setPopup("Boka Nybörjarkurs")}}>Kontakta oss</button>
    </section>
    </div>


  )
}

export default nyborjare
/*








*/