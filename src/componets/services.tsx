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
        <CardBox title={"CrossFit Kids"} text={"Vårt barn-och ungdomsprogram lär ut rätt teknik i träningspass som ser olika ut varje gång. Vi har ett stort fokus på att barnen ska tycka det är roligt. Från barn från 3+. Barnen delas upp i åldersgrupper."} boxname={"cardbox"}/>
        <CardBox title={"Personlig Träning"} text={"TEXT"} boxname={"cardbox"}/>
        <CardBox title={"Gruppträning"} text={"TEXT"} boxname={"cardbox"}/>
        <CardBox title={"Gruppträning"} text={"TEXT"} boxname={"cardbox"}/>
        <CardBox title={"Gruppträning"} text={"TEXT"} boxname={"cardbox"}/>
      </section>
    </div>
  )
}

export default services