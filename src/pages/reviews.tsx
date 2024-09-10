import React, { useEffect } from 'react'
import './reviews.css'
import Review from '../componets/review'
import { useState } from 'react'
function reviews() {
    var reviews = [
        {
          comment:"Bästa boxen! Har tränat hos Starkare i drygt ett år nu och kommer aldrig att sluta. De hjälpte mig att komma tillbaka efter en axelskada när jag aldrig trodde jag skulle kunna träna ngt ovanför axelhöjd igen. Utöver det är det så fantastiskt go stämning. Kunniga och engagerade coacher och härliga medlemmar!",
          author:"Elin Schylander"  
        },
        {
            comment: "Att börja träna på Starkare är det bästa beslutet jag tagit inom träning! Otroligt duktiga och engagerade coacher och bra stämning mellan alla medlemmar :)",
            author: "Paulina Villman"    
        },
        {
            comment:"Väldigt kunniga och trevliga coacher samt roliga och mångsidiga pass! Vill även varmt rekommendera kostrådgivningen samt PT som har bidragit till en drastisk förändring i både styrka och ork.",
            author: "Niklas Lundberg"
        }
    ]


  const [count, setCount] = useState(0)

  function sliderNext(){
     setCount(val => val==reviews.length-1? 0:val+1)
     
  }

  useEffect(()=>{
    const val = count
    const setclock = setInterval(()=>{
        sliderNext()
    },5000);
    
  },[])

  return (
   <section className='review-contaiener'>
   <section className="reviews">
        <h1>Vad tycker våra medlemmar?</h1>
        <div className="review-box fade">
            <span className="nav" onClick={()=>{
                setCount(count-1)
            }}></span>
            <div className="reviews">
            {reviews.map((item,index)=>{
                return <Review author={item.author} text={item.comment} active={count} index={index}/>
            })}
            </div>
            
            <span className="nav" onClick={()=>{
                console.log("CLICKED")
                sliderNext()
            }}></span>
        </div>
        <div className='dot-bar'>
            {reviews.map((item,index) => {
                return <span className='dot' onClick={()=>{
                    setCount(index)
                }}></span>
            })}
        </div>
   </section>
   </section> 
  )
}

export default reviews