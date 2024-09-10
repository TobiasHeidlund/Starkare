import { useState,useEffect } from 'react'
import Faq from '../componets/faq'
import Reviews from '../pages/reviews'
import Schema from '../componets/schema'
import Splash from '../componets/splash'
import PopupPage from '../pages/popupPage'
import Contactusv2 from '../componets/contactusv2'
import Services from '../componets/services'
import './home.css'




function home() {
  const [count, setCount] = useState(false)
  const [shouldHaveDescription, setshouldHaveDescription] = useState(false)

  const switchViewable = ()=>{
    setCount(count=> !count)
    setshouldHaveDescription(false)
  }
  const switchViewabledesc = ()=>{
    setCount(count=> !count)
    setshouldHaveDescription(true)
  }


  return (
    <div className={count?'app-wrapper no-scroll':'app-wrapper'} >
      <PopupPage display={count} switchViewable={switchViewable} shouldHaveDescription={shouldHaveDescription} />
      <div className='app-content'>
      <Splash setPopup={switchViewable}/>
      <Services/>
      <Faq/>
      <Reviews/>
      <Schema/>
      <Contactusv2 setPopup={switchViewabledesc}/>
      </div>
    </div>
  )
}

export default home