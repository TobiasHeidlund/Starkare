import { useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/home'
import Top from './componets/top'
import Bootkamp from './pages/bootkamp'
import HomeImage from './componets/homeImage';
import ScrollToAnchor from './componets/ScrollToAnchor';
function App() {
  var prop = {
    active:true,
    bannerText: 'Tryck här för mer info kring Bootcamp "otränad" start oktober 2024!',
    date :"oktober 2024",
    lengh : "6 veckor",
    time: "söndagar 18.30-19.30 och onsdagar 19.30-20.30",
    price: "3700 kr/person",
    price2: "Early bird pris (boka innan 15/9): 3200kr/person",
    place: "Starkare CrossFit, Analysvägen 7A Mölnlycke företagspark",
    timeofyear: "hösten"
  }
  const [dakmode, setDarkmode] = useState(false)

  const darkMode = ()=>{
    setDarkmode(count=> !count)
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    (document.getRootNode().lastChild?.lastChild as HTMLBodyElement).classList.add("dark")
  }
  
  return (
    <BrowserRouter>
    <ScrollToAnchor/>
    <Top bannerText={prop.bannerText}/>
    <HomeImage/>
    <div id='myroot'>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/bootcamp" element={<Bootkamp content={prop}/>} />
        <Route path="/dark" element={ <Home/>} />
      </Routes>
    
    </div>
    </BrowserRouter>
  )
}

export default App
