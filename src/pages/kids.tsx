import React from 'react'
import './kids.css'
import Contactus from '../componets/contactusv2'
import CardBox from '../componets/cardBox'

type Prop = {
  setPopup: (s:string)=>void
}

function kids({setPopup}:Prop) {
  return (
    <div  className='rehab'>
    <div className="anchorbig" id="rehab"></div>
    <section className='body'>
    <div className='section2'>
    <h1>CrossFit Starkare Kids</h1>
    <h3>Rolig och funktionell träning för barn och ungdomar</h3>
    <div className='space'></div>
    <button onClick={()=>{setPopup("Boka Kidsträninig")}}>Klicka här för att anmälans????.</button>    
    </div> 
    <section className='cardContaienr2'>
      <CardBox title={"Välkommen till Starkare Kids - där nästa generation får växa genom rörelse, styrka och gemenskap!"} text={"Våra lekfulla och inspirerande träningspass för barn och ungdomar fokuserar på att bygga en stark grund i kroppskontroll, koordination och självförtroende. Genom funktionell träning, lättare lyft och inslag av gymnastik får barnen utvecklas i en trygg och rolig miljö - alltid med rörelseglädjen i centrum."} boxname={"cardbox3"}/>
      <CardBox title={"Ge dina barn en stark start i livet - med Starkare Kids!"} text={"Hos Starkare CrossFit får barn träna i en trygg och peppande miljö där rörelseglädje och gemenskap står i centrum. Våra engagerade och erfarna coacher hjälper barnen att bygga en stark grund inom funktionell träning - samtidigt som de utvecklar självförtroende, kroppskontroll och samarbetsförmåga. \n\n Anmäl ditt barn till Starkare Kids och låt dem upptäcka hur kul det är att röra på sig, växa med utmaningar och få nya kompisar på köpet!"} boxname={"cardbox3"}/>
    </section>
    <div className='localcardbox'>
      <h2>Träning som passar alla - från nyfikna nybörjare till unga atleter</h2>
      <p>Starkare Kids riktar sig till barn i åldrarna 7-16 år och är uppdelat i tre grupper baserat på ålder och erfarenhet. Våra pass är utformade för att vara roliga, utmanande och inkluderande, med fokus på lekfull funktionell träning, kroppskontroll och lagkänsla.<br></br><br></br>Här bygger vi inte bara starka kroppar - vi bygger starka barn!</p>
      <section className='cardContaienr3'>
      <CardBox title={"Grupp 1: "} text={"7-10 år: \nMåndagar 16.00-16.45"} boxname={"cardbox4"}/>
      <CardBox title={"Grupp 2: "} text={"11-15 år: \nTorsdagar 16.00-16:45"}boxname={"cardbox4"}/>
      <CardBox title={"Grupp 3: "} text={"13-16 år: \nTisdagar 19.30-20.30"}boxname={"cardbox4"}/>
      </section>
      <p>Det behöver vara minst 5 barn i en grupp för att gruppen ska bli av. Vi skickar ut faktura via mail för terminen när vi har fastställt att en grupp blir av. Återanmälningar från vårens termin har förtur fram tills den 4 augusti, sen släpper vi platser till väntelista.</p>
      <h3>Terminen startar v. 35 och håller på till v.50 med uppehåll för höstlov och röda dagar.</h3>
    </div>
   

    <button onClick={()=>{setPopup("Boka fysioterapeut")}}>Klicka här för att anmälan.????</button>    
        
 
    </section>
    </div>
  )
}


export default kids