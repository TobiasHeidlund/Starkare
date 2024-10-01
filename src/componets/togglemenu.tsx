import React from 'react'
import { Link } from 'react-router-dom'
import "./toggleMenu.css"
import { Contrast } from '@mui/icons-material';

type Props={
    menu: boolean;
    toggleMeny: ()=>void;
  }

function togglemenu({menu,toggleMeny}:Props) {
    var click = ()=>{
        var element = document.getRootNode().lastChild?.lastChild as HTMLBodyElement;
        console.log(element)
        if(element?.classList.contains("light")){
          element?.classList.remove("light")
          element?.classList.add("dark")
        }else{
          element?.classList.remove("dark")
          element.classList.add("light")
        }
      }

  return (
    <div className={menu? "toggleMenu": "toggleMenuHidden"} onClick={e =>{
            toggleMeny()
        }}>
    <ul className="toggleMenuList list">
            <li><Link to='/#home'>HEM</Link></li>
            <li><Link to='/rehab#rehab'>REHAB</Link></li>
            <li><Link to='/#cards'>VÅRA TJÄNSTER</Link></li>
            <li><Link to='/#faq'>VANLIGA FRÅGOR</Link></li>
            <li><Link to='/#schema'>SCHEMA</Link></li>
            <li><Link to='/#contactus'>KONTAKTA OSS</Link></li>
            
        </ul>
        <button onClick={click}><Contrast/></button>
    </div>
  )
}

export default togglemenu