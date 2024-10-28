import React from 'react'
import './rehab.css'
import Contactus from '../componets/contactusv2'
import CardBox from '../componets/cardBox'

type Prop = {
  setPopup: (s:string)=>void
}

function rehab({setPopup}:Prop) {
  return (
    <div  className='rehab'>
    <div className="anchorbig" id="rehab"></div>
    <section className='body'>
    <div className='section2'>
    <h1>REHAB & FYSIOTERAPI</h1>
    <h3>Upplever du muskel- eller ledsmärtor? Här kan du få hjälp med behandling och träning av utbildad fysioterapeut.</h3>
    <div className='space'></div>
    <button onClick={()=>{setPopup("Boka fysioterapeut")}}>Klicka här för att boka ett första besök hos vår fysioterapeut.</button>    
    </div> 
    <h1>Är du i behov av manuell behandling?</h1>
    <h3>Om du har en långvarig smärtproblematik, eller om du har råkat ut för en akut skada kan vi på Starkare CrossFit hjälpa dig att bli av med dina smärtor i muskler och leder. Detta gör vi med hjälp av individanpassad rehab och manuell behandling.</h3>
    <section className='cardContaienr'>
    <CardBox title={"Nybesök"} text={"Vid ett nybesök får du förklara din smärtproblematik för din terapeut. Efter konsultationen utförs ortopediska tester och en behandlingsplan tas fram."} boxname={"cardbox2"}/>
    <CardBox title={"Rehab"} text={"Beroende på hur länge du upplevt din smärta behövs ett eller fler återbesök, detta sker i samråd med din terapeut."}boxname={"cardbox2"}/>
    <CardBox title={"Återbesök"} text={"Under återbesöken får du ett individanpassat rehab-upplägg för att du ska kunna bli smärtfri. Övningarna gås igenom tillsammans med din terapeut i vårt gym."}boxname={"cardbox2"}/>
    <CardBox title={"Smärtfrihet"} text={"Målet med behandlingarna och rehab-träningen är att du på sikt ska bli smärtfri, kunna återgå till din vardag och att smärtproblematiken inte ska komma tillbaka."}boxname={"cardbox2"}/>
    </section>
    <button onClick={()=>{setPopup("Boka fysioterapeut")}}>Klicka här för att boka ett första besök hos vår fysioterapeut.</button>    
        
 
    </section>
    </div>
  )
}


export default rehab