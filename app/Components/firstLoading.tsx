"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"
import Image from "next/image"



function firstLoading() {

    const [testBlink, setTestBlink] = useState(true)

    const [numChange, setNumChange] = useState(0)

    const imgNumbers = ["/loadAnim/loadAni1.png", "/loadAnim/loadAni1.png", "/loadAnim/loadAnim2.png", "/loadAnim/loadAnim2.png", "/loadAnim/loadAnim3.png", "/loadAnim/loadAnim3.png", "/loadAnim/loadAnim4.png", "/loadAnim/loadAnim4.png", "/loadAnim/loadAnim5.png" , "/loadAnim/loadAnim5.png", "/loadAnim/loadAni1.png"]


    useEffect(()=>{

       const loadInt = setInterval(() => {

        setTestBlink(true)

            if(testBlink === true){
                setTestBlink(false)
                
            }

        }, 1000);

        return()=> clearInterval(loadInt)


    },[testBlink])


    useEffect(()=>{
        const numChangeInt = setInterval(() => {
            setNumChange((prev)=> (prev + 1) )
        }, 1000);

        if(numChange > 9){
            setNumChange(0)
            console.log(numChange)

        }

       

        return ()=> clearInterval(numChangeInt)
    },[numChange])

   


  return (
    <>

    <section className="loadingSec">



    <motion.div initial={{scale:0}} animate={{scale:1, transition:{duration:0.5, ease:"backOut"}}}  layout  className="loadImgDiv" >

      
       <Image src={"/loadAnim/loadAni1.png"} height={250} width={250} alt="Load Animation" className="loadAnim1" /> 

       <Image src={"/loadAnim/loadAnim2.png"} height={250} width={250} alt="Load Animation" className="loadAnim2" /> 

       <Image src={"/loadAnim/loadAnim3.png"} height={250} width={250} alt="Load Animation" className="loadAnim3" /> 

       <Image src={"/loadAnim/loadAnim4.png"} height={250} width={250} alt="Load Animation" className="loadAnim4" /> 

       <Image src={"/loadAnim/loadAnim5.png"} height={250} width={250} alt="Load Animation" className="loadAnim5" /> 


    </motion.div>   




    <div className="loadBarAphla">

        <motion.div className="loadProgress" initial={{x:"-100%"}} animate={{x:0, transition:{duration:5, ease:"easeInOut"}}} ></motion.div>

    </div>

    </section>
 
    </>
  )
}

export default firstLoading
