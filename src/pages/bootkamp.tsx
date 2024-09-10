import React from 'react'
import './bootkamp.css'
import b3 from '../assets/b3.jpg';
import Popupform from '../componets/popupform'

type Props = {
    content:{
        active:Boolean,
        bannerText: String,
        date :String,
        lengh : String,
        time: String,
        price: String,
        price2:String,
        place:String,
        timeofyear:String,
    }
}



function bootkamp(prop:Props) {
  return (
    <div id='bootcamp' className='bootcamp'>
        <section className='head'>
            <h1>Bootcamp start {prop.content.date}</h1>
        </section>
        <section className='body'>
            <h2>Nytt bootcamp startar i {prop.content.date}</h2>
            <p>Fyll i formuläret nedan för att boka din plats</p>
            <p>Känner du dig otränad och behöver komma igång med något nytt till {prop.content.timeofyear}?<br/>Eller vill du hitta en ny träningsform?🏋</p>
            <p>Till {prop.content.timeofyear} startar en ny Bootcamp-grupp!<br/>
            Målet med gruppen är att komma igång med träningen på ett bra sätt och göra det till en del i din vardag.
            Gruppen är dessutom ett perfekt sätt att lära sig grunderna i CrossFit för att sen börja träna hos oss 🎉</p>
            <p className='margin0bottom'>Detta ingår:</p>
            <ul className='list'>
                <li>2 pass/vecka i 6 veckor</li>
                <li>Varje pass leds av en utbildad instruktör</li>
                <li>Rolig och effektiv träning som ger resultat</li>
                <li>Kostrådgivning med personligt anpassat upplägg efter dina mål</li>
                <li>2 InBody-vägningar</li>
                <li>Tips och råd för att förbättra sömn och hantera stress</li>
                <li>Mängder med recept och tips</li>
                <li>Max 12 platser så att du får mycket hjälp och uppmärksamhet</li>
            </ul>
            <ul className='list2'>
                <li>Start: {prop.content.date}</li>
                <li>Längd: {prop.content.lengh}</li>
                <li>Tid: {prop.content.time}</li>
                <li>Pris: {prop.content.price}</li>
                <li>{prop.content.price2}</li>
                <li>Plats: {prop.content.place}</li>
            </ul>
            <h3>Vi kommer höra av oss till dig så fort vi kan för att bekräfta din bokning. Vi ser fram emot att träffa dig!</h3>
            <p>Betalning sker via faktura 30 dagar. Det går bra att använda sig av friskvård. för avbokning krävs uppvisande läkarintyg.</p>
            <form action="">
                <input type="text" name="name" id="name" placeholder='Namn *' required/>
                <input type="email" name="email" id="epost" placeholder='E-post *' required />
                <input type="tel" name="tel" id="tel" placeholder='Mobilnummer *' required />
                <input type="text" name="hitta" id="hitta" placeholder='Hur hittade ni oss?' />
                <textarea name="quest" id="quest" placeholder='Frågor eller kommentarer?'></textarea>
                <input className="submit" type="submit" value="Skicka" />
            </form>
        </section>
    
    
    
    
    </div>
  )
}

export default bootkamp