"use client"

import { useEffect, useState } from "react";
import Loading from "./Components/Loading";
import "./CSS/Loading.css"
import "./CSS/Section1.css"
import "./CSS/Section2.css"
import "./CSS/Section2_5.css"
import "./CSS/Section3.css"
import "./CSS/Section4.css"
import "./CSS/Section5.css"
import "./CSS/Section6.css"
import "./CSS/Header.css"
import Lenis from "lenis";
import Sections from "./Components/Sections";
import "./CSS/TiltedCard.css"





export default function Home() {


  ////////////// Lenis ///////////////////

  useEffect(()=>{
    const lenis = new Lenis();
  
  // Use requestAnimationFrame to continuously update the scroll
  function raf(time:any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
     requestAnimationFrame(raf);
  },[])


   ////////////// Lenis ///////////////////


   const [loadingOn, setLoadingOn] = useState<boolean>(true)
  
  

  return (
    <>

    {loadingOn ? <Loading setLoadingOn={setLoadingOn} loadingOn={loadingOn} />

    : <Sections/>}

    
    </>
  );
}
