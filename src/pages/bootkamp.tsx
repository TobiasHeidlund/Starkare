import React,{useState} from 'react'
import axios, { Axios } from 'axios';
import './bootkamp.css'
import b3 from '../assets/b3.jpg';
import Popupform from '../componets/popupform'
import {Link} from 'react-router-dom'

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
    const apiUrl = import.meta.env.VITE_BACKENDURL;
    const [submitted, setSubmitted] = useState(false);
        // State for form fields
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          phone: '',
          hitta: '',
          quest: '',
        });
      
        // Handle input changes
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        };
      
        // Handle form submission
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
          try {
            const response = await axios.post(apiUrl, formData);
            console.log('Form submitted successfully:', response.data);
            if(response.status != 200){
                alert("Något gick fel vänligen försök igen")
            }else{
                setSubmitted(true)
            }
            // Optionally reset form
            setFormData({
              name: '',
              email: '',
              phone: '',
              hitta: '',
              quest: '',
            });
          } catch (error) {
            console.error('Error submitting form:', error);
            alert("Något gick fel vänligen försök igen")
          }
        };
  return (
    <div  className='bootcamp'>
        
        <div className="anchorbig" id="bootcamp"></div>
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
            <p className='lowtrans'> Betalning sker via faktura 30 dagar. Det går bra att använda sig av friskvård. för avbokning krävs uppvisande läkarintyg.</p>
            <form onSubmit={handleSubmit} className={submitted?'form-hidden':''}>
      <input
        type="text"
        name="name"
        placeholder="Namn *"
        required
        autoComplete="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="E-post *"
        required
        autoComplete="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Telefonnummer *"
        required
        autoComplete="tel"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="hitta"
        placeholder="Hur hittade ni oss?"
        autoComplete="off"
        value={formData.hitta}
        onChange={handleChange}
      />
      <textarea
        name="quest"
        placeholder="Frågor eller kommentarer?"
        autoComplete="off"
        value={formData.quest}
        onChange={handleChange}
      ></textarea>
      Genom att skicka formuläret godkänner ni våran <Link to='/GDPR-POLICY'>GDPR policy</Link>
      <input className="submit" type="submit" value="Skicka" />
    </form>
    <div className={submitted?'':'form-hidden'}>
            <h2>Välkommen till Starkare</h2>
            <p>Vi kommer att ta kontakt med dig så snart som möjligt för att komma igång</p>
    </div>
        </section>
    
    
    
    
    </div>
  )
}

export default bootkamp;