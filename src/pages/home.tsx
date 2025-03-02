import { useState,useEffect } from 'react'
import Faq from '../componets/faq'
import Reviews from '../pages/reviews'
import Schema from '../componets/schema'
import Splash from '../componets/splash'
import PopupPage from '../pages/popupPage'

import Services from '../componets/services'
import './home.css'

type Props = {
  count: boolean
  switchViewable: (s:string)=>void
  shouldHaveDescription: boolean;
}


function home({count,switchViewable,shouldHaveDescription}:Props) {

  shouldHaveDescription = true

  return (
    <div className={count?'app-wrapper no-scroll':'app-wrapper'} >
      {//<PopupPage display={count} switchViewable={switchViewable} shouldHaveDescription={shouldHaveDescription} />
      }
      <div className='app-content'>
      <Splash setPopup={switchViewable}/>
      <Services/>
      <Faq/>
      <Reviews/>
      <Schema/>
      
      </div>
    </div>
  )
}

export default home