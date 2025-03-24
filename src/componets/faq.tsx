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
        text="Det enklaste sättet att bli medlem är att fylla i vårat kontaktformulär för att boka ett möte med oss så hjälper vi dig att komma igång."
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
        <CardExp 
        title="Kan jag frysa mitt kort? "
        text="Ja, vi fryser kort vid särskilda omständigheter, t.ex skada, sjukdom eller graviditet. Vid frysning av medlemskap för sjukdom, skada och/eller graviditet skall intyg om orsak utfärdas av läkare, barnmorska, sjukgymnast naprapat eller motsvarande uppvisas. Frysning vid skada, sjukdom och graviditet gäller minst 30 dagar och max 365 dagar. 

Frysning av medlemskap vid länge utlandsvistelse, högskolestudier, arbete eller militärtjänstgörning görs om minst 60 dagar och längst 365 dagar. Arbetsgivarintyg, studieintyg eller resehandling ska mailas in till starkare@starkarecrossfit.se i samband med att ansökan om frysning via formulär nedan skickas in. 

Vi fryser inte kort retroaktivt. 

Maila er ansökan till starkare@starkarecrossfit.se "
        />
        <CardExp 
        title="Jag vill säga upp mitt kort, vad gäller?"
        text="Månadskort (10 pass/månad eller obegränsat) har alltid 3 månaders uppsägning. Uppsägningstiden räknas från det datumet då uppsägningen kom in. Månadskort är ett löpande avtal som fortsätter månad för månad tills en ansökan via formuläret nedan skickas in eller via mail."
        />
    </section>
  )
}


export default faq