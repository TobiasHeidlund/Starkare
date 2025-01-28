import React from 'react'
import './faq.css'
import CardExp from '../componets/cardExpandable'


function faq() {
  return (
    <section className="faq">
      <div id='faq' className='anchor'></div>
        <h1>Vanliga Frågor</h1>
        <CardExp 
        title="Vad kostar det att träna på Starkare CrossFit?"
        text="10 pass/månad: 975kr/månad (3 månaders uppsägningstid)
        Obegränsat antal pass/månad: 1225kr/månad (3 månaders uppsägningstid)
        Klippkort 10 pass: 1800kr
        Årskort: 13 475kr/år"
        />
        <CardExp 
        title="Jag känner mig osäker på att hoppa in i gruppträningen hos er, kan jag få en introduktion?"
        text="Självklart! Vi rekommenderar starkt alla som inte tränat CrossFit förut att gå någon form av introduktion. 
        Vi har kontinuerligt olika introduktioner i grupp, såsom nybörjarkurser och Bootcamps, men om det inte är något aktuellt just nu så kan du gå en individuell introduktion. 
        Då går du på 3 PT-pass á 60 min för 2500kr (dagtid, vardagar) alternativt 3500kr (helger). "
        />
        <CardExp 
        title="Hur blir man medlem på Starkare CrossFit?"
        text="Det enklaste sättet att bli medlem på är att fylla i vårat kontaktformulär här på hemsidan, så kontaktar vi dig för att boka ett NSI."
        />
        <CardExp 
        title="Kan man få hjälp med kostrådgivning hos er?"
        text="Absolut! Vi erbjuder indivuellt anpassad kostrådgivning utefter dina mål. 
        Priser från 800kr/månad."
        />
        <CardExp 
        title="Kan man kombinera era tjänster?"
        text="Självklart kan man det. Många kombinerar gruppträning, personlig träning och/eller kostrådgivning för att verkligen maximera sina resultat."
        />
    </section>
  )
}


export default faq