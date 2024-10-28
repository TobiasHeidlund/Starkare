import { useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from './pages/home'
import Top from './componets/top'
import Bootkamp from './pages/bootkamp'
import HomeImage from './componets/homeImage';
import ScrollToAnchor from './componets/ScrollToAnchor';
import Rehab from './pages/rehab';
import Togglemenu from './componets/togglemenu';
import Contactusv2 from './componets/contactusv2'
import PopupPage from './pages/popupPage';
import prop from '../bootcamp.json'
function App() {
 /* var prop = {
    active:true,
    bannerText: 'Tryck här för mer info kring Bootcamp "otränad" start oktober 2024!',
    date :"oktober 2024",
    lengh : "6 veckor",
    time: "söndagar 18.30-19.30 och onsdagar 19.30-20.30",
    price: "3700 kr/person",
    price2: "Early bird pris (boka innan 15/9): 3200kr/person",
    place: "Starkare CrossFit, Analysvägen 7A Mölnlycke företagspark",
    timeofyear: "hösten"
  }*/
  const [dakmode, setDarkmode] = useState(false)
  const [menu, setMenu] = useState(false)
  const toggleMenu = ()=>{
    setMenu(cout => !cout)
  }


  const darkMode = ()=>{
    setDarkmode(count=> !count)
  }

  useEffect(()=>{
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      (document.getRootNode().lastChild?.lastChild as HTMLBodyElement).classList.add("dark")
    }
  },[])
  

  const [count, setCount] = useState(false)
  const [shouldHaveDescription, setshouldHaveDescription] = useState(false)
  const [context, setContext] = useState("")
  const switchViewable = (lcontext:string)=>{
    setCount(count=> !count)
    setContext(lcontext)
    setshouldHaveDescription(false)
  }
  const switchViewabledesc = (lcontext:string)=>{
    setCount(count=> !count)
    setshouldHaveDescription(true)
    setContext(lcontext)
  }

  
  return (
    <BrowserRouter>
    <ScrollToAnchor/>
    <Top bannerText={prop.bannerText} menu={toggleMenu} darkmode={dakmode}/>
    <Togglemenu menu={menu} toggleMeny={toggleMenu}/>
    <HomeImage/>
    <div id='myroot'>
      <PopupPage display={count} switchViewable={switchViewable} shouldHaveDescription={shouldHaveDescription} context={context} />
      <Routes>
        <Route path="/" element={<Home count={count} switchViewable={switchViewable} shouldHaveDescription={shouldHaveDescription}/>}> </Route>
        <Route path="/bootcamp" element={<Bootkamp content={prop}/>} />
        <Route path="/dark" element={ <Home count={count} switchViewable={switchViewable} shouldHaveDescription={shouldHaveDescription}/>} />
        <Route path="/rehab" element={ <Rehab setPopup={switchViewable}/>} />
      </Routes>
      <Contactusv2 setPopup={switchViewabledesc}/>
    </div>
    </BrowserRouter>
  )
}

export default App
