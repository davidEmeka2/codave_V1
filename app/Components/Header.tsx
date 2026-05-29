"use client"

import { Cross as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'motion/react'





function Header() {

  const [isOpen, setOpen] = useState(false)
  const [height, setHeight]  = useState("10vh")

  const menuDetails =()=>{
    if(!isOpen){
      setHeight("120vh")
      setBgCol("white")
     
    }
    else{
      setHeight("10vh")

      const bgColInterval =  setTimeout(() => {
        setBgCol("")
      }, 400);

      return()=> clearInterval(bgColInterval)


    }
  }


   ///////////////////////////////////// Up and down header effect onScroll ///////////////////////


 const [goingUp, setGoingUp] = useState(0)
 const [bgCol, setBgCol] = useState("")


 const {scrollY} = useScroll()

/////////////

 useMotionValueEvent(scrollY, "change", (value)=>{
 
  const prevValue:any = scrollY.getPrevious()

  if(value > prevValue && value > 150){
    setGoingUp(-100)
    
  }
  else{
    setGoingUp(0)
   
  }
 })



 ///////////////////////////////////// Up and down header effect onScroll Ends ///////////////////////


  return (

    <>
   
   

   
   <motion.header style={{height:height, backgroundColor:bgCol}}  animate={{y:goingUp}} >

    <nav className='headerMenu'>

       <Image src={"/logoGrey.png"} height={50} width={50} alt='header-logo' className='headerLogo'  />

      <button onClick={menuDetails}>

      <Hamburger toggled={isOpen} toggle={setOpen}  size={48} rounded label="Show Header" hideOutline={false} color='#aaaaaa' duration={0.8} />

      </button> 

    </nav>


    <nav className='menuList'>

      <motion.li
      whileHover={{
        y:-20,
        scale:1.5,
       
      }}
      onClick={()=>{
        window.scrollTo(0,0)
        setHeight("10vh")
        setOpen(false)
        const bgColInterval =  setTimeout(() => {
          setBgCol("")
        }, 400);
  
        return()=> clearInterval(bgColInterval)
      }}
      >HOME</motion.li>

      <motion.li
       whileHover={{
        y:-20,
        scale:1.5,
       
      }}

      onClick={()=>{
        window.scrollTo({
          top:(300/100) * window.innerWidth
        })
        setHeight("10vh")
        setOpen(false)
        const bgColInterval =  setTimeout(() => {
          setBgCol("")
        }, 400);
  
        return()=> clearInterval(bgColInterval)
      }}
      >ABOUT</motion.li>


      <motion.li
       whileHover={{
        y:-20,
        scale:1.5,
       
      }}

      onClick={()=>{
        window.scrollTo({
          top:(1020/100) * window.innerWidth
        })
        setHeight("10vh")
        setOpen(false)
        const bgColInterval =  setTimeout(() => {
          setBgCol("")
        }, 400);
  
        return()=> clearInterval(bgColInterval)
      }}

      >PROJECTS</motion.li>

      {/* <motion.li
       whileHover={{
        y:-20,
        scale:1.5,
        
      }}

      onClick={()=>{
        window.scrollTo({
          top:(1500/100) * window.innerWidth
        })
        setHeight("10vh")
        setOpen(false)
        const bgColInterval =  setTimeout(() => {
          setBgCol("")
        }, 400);
  
        return()=> clearInterval(bgColInterval)
      }}
      >JOIN US</motion.li> */}

    </nav>



    

   </motion.header>



    

   </>



  )
}

export default Header
