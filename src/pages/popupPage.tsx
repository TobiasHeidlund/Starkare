import "./popupPage.css"
import React from 'react'
import Popupform from '../componets/popupform'
import {Link} from 'react-router-dom'
type Props = {
    display: boolean
    switchViewable: (s:string)=>void
    shouldHaveDescription: boolean
    context:String
}


function PopupPage({display,switchViewable,shouldHaveDescription,context}:Props ) {
  
  return (
    <div className={display?"popup-page":""} onClick={e =>{
        //if(!(e.target instanceof HTMLFormElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)){
        var target = (e.target as HTMLElement).parentElement as HTMLElement;
        var parentIsForm = false;
        while(target != null){
          if(target.className == "abort"){
            parentIsForm = false;
            break;
          }
          if(target.className == "form-section"){
            parentIsForm = true;
            break;
          }
          target = target.parentElement as HTMLElement;
        }


        if(!parentIsForm){
            switchViewable("no")
        };
        }}>      
        {
        display?<Popupform shouldHaveDescription={shouldHaveDescription} context={context}/>:''
      }</div>
  )
}

export default PopupPage