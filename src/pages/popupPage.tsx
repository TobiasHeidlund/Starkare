import "./popupPage.css"
import React from 'react'
import Popupform from '../componets/popupform'

type Props = {
    display: boolean
    switchViewable: ()=>void
    shouldHaveDescription: boolean;
}


function PopupPage({display,switchViewable,shouldHaveDescription}:Props) {
  return (
    <div className={display?"popup-page":""} onClick={e =>{
        if(!(e.target instanceof HTMLFormElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)){
            switchViewable()
        };
        }}>      
        {
        display?<Popupform shouldHaveDescription={shouldHaveDescription}/>:''
      }</div>
  )
}

export default PopupPage