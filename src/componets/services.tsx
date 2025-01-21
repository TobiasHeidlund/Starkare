import React from 'react'

import CardBox from '../componets/cardBox'

import "./Services.css"

function services( ) {
  return (
    <div className='cardwrapper'>
      <h1>Vad erbjuder vi?</h1>
      <div className="anchor" id='cards'></div>
      <section className='cardContaienr'>
        <CardBox title={"Kostrådgivning"} text={"Få en individuellt anpassad plan från en licensierad kostrådgivare för att nå dina mål."}  boxname={"cardbox"}/>
        <CardBox title={"CrossFit Kids"} text={"Vårt barn-och ungdomsprogram lär ut rätt teknik i träningspass som ser olika ut varje gång. Vi har ett stort fokus på att barnen ska tycka det är roligt."+
          " Från barn från 3+. Barnen delas upp i åldersgrupper. terminen är just nu fullbokad men för mer information om nästa termin (HT-25) kontakta oss på starkare@starkarecrossfit.se. \nPris: 2400kr/termin"} boxname={"cardbox"}/>
        <CardBox title={"Gruppträning"} text={"Vi har träningspass på morgonen, lunch samt eftermiddagar och kvällar. Varje pass varar i 60 minuter och genomförs under ledning av en coach."+
        " Varje träningspass inkluderar uppvärmning, styrketräning och konditionsträning. Coachen hjälper dig med tekniken, eventuella viktrekommendationer samt mängder med pepp! "} boxname={"cardbox"}/>
        <CardBox title={"Personlig träning"} text={"Träning med en personlig coach innebär ett skräddarsytt upplägg som är helt anpassat efter dina behov och mål. Här får du individuell guidning,"+
        " kontinuerlig feedback och ett program som optimerar din utveckling, oavsett om du vill bli starkare, förbättra din kondition eller skapa en hälsosam livsstil. \nPris: 850kr/timme. "} boxname={"cardbox"}/>
        <CardBox title={"Physioterap/rehab"} text={"Om du har en långvarig smärtproblematik, eller om du har råkat ut för en akut skada kan vi på Starkare CrossFit hjälpa dig att bli av med dina smärtor i muskler och leder. "+
        "Detta gör vi med hjälp av individanpassad rehab och manuell behandling. \nPriser: Nybesök 650kr/45 min. Återbesök 500kr/30min. "} boxname={"cardbox"}/>
        <CardBox title={"Företagsträning"} text={"Om ni vill ha en piggare, friskare och mer motiverad personal är detta en del av lösningen! Vi erbjuder skräddarsydd träning för ert företag, där vi kombinerar hälsa med team-building."+
          " Ett utmärkt sätt att stärka gemenskapen samtidigt som ni satsar på välmående och prestation. En investering som gynnar både medarbetare och företagets framgång. Hör av er för en offert!"} boxname={"cardbox"}/>
      </section>
    </div>
  )
}

export default services