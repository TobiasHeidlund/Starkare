import React from 'react'
import './mamma.css'
import Contactus from '../componets/contactusv2'
import CardBox from '../componets/cardBox'

type Prop = {
  setPopup: (s:string)=>void
}

function mamma({setPopup}:Prop) {

  return (
    <div  className='mamma'>
    <div className="anchorbig" id="mamma"></div>
    <section className='body'>
    <div className='section2'>
    <h1>Starkare Mamma</h1>
    <h3>Syftet är att du ska få komma igång med din träning på ett roligt, effektivt och inspirerande sätt. Träningsglädje och gemenskap står i fokus och alla kan delta – ingen tidigare kunskap eller träningserfarenhet krävs.</h3>
    <div className='space'></div>
    <button onClick={()=>{setPopup("Boka Mammaträning")}}>Kontakta oss</button>
    </div>
    <section className='cardContaienr2'>
      <CardBox title={""} text={"Träningen utgår från övningar inom CrossFit men är anpassade i svårighetsgrad, vikt och repsantal. I träningen förekommer inga hopp eller maxinsatser i lyft utan fokus ligger på att bygga upp styrka, rörlighet, uthållighet och koordination efter graviditet och förlossning. Vi utgår från att alla graviditeter, förlossningar och återhämtning efteråt ser olika ut och därför kommer vi att ha olika alternativ på övningar utifrån varje deltagares förutsättningar."} boxname={"cardbox3"}/>
      <CardBox title={""} text={"Barn är givetvis välkomna att följa med under passet. Ta gärna med dig babysitter, bilskydd, lekmatta, bärsele eller något annat som du vet att ditt barn trivs i."} boxname={"cardbox3"}/>
      <CardBox title={""} text={"I anmälningen ingår det även 2 pass/vecka på ordinarie schema. Bokas på egen hand i vår bokningsapp. "} boxname={"cardbox3"}/>
      <CardBox title={""} text={"Vi rekommenderar att det har gått minst 12 veckor sedan din förlossning och att du har varit på efterkontroll hos din barnmorska. "} boxname={"cardbox3"}/>
      <CardBox title={""} text={"Tid: Tisdagar 10.30-11.30\nStart: Vecka 5\n\nLängd: 6 veckor\n\nPris: 1600kr"} boxname={"cardbox3"}/>
    </section>
    <button onClick={()=>{setPopup("Boka Mammaträning")}}>Kontakta oss</button>
    </section>
    </div>


  )
}

export default mamma
/*








*/
