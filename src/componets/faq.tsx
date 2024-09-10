import React from 'react'
import './faq.css'
import CardExp from '../componets/cardExpandable'


function faq() {
  return (
    <section className="faq">
      <div id='faq' className='anchor'></div>
        <h1>Vanliga Frågor</h1>
        <CardExp 
        title="Hur blir man medlem på Starkare CrossFit?"
        text="Det enklaste sättet att bli medlem på är att fylla i vårat kontaktformulär här på hemsidan, så kontaktar vi dig för att boka ett NSI."
        />
        <CardExp 
        title="Hur blir man medlem på Starkare CrossFit?"
        text="Det enklaste sättet att bli medlem på är att fylla i vårat kontaktformulär här på hemsidan, så kontaktar vi dig för att boka ett NSI."
        />
        <CardExp 
        title="Hur blir man medlem på Starkare CrossFit?"
        text="Det enklaste sättet att bli medlem på är att fylla i vårat kontaktformulär här på hemsidan, så kontaktar vi dig för att boka ett NSI."
        />
        <CardExp 
        title="Hur blir man medlem på Starkare CrossFit?"
        text="Det enklaste sättet att bli medlem på är att fylla i vårat kontaktformulär här på hemsidan, så kontaktar vi dig för att boka ett NSI."
        />
    </section>
  )
}


export default faq