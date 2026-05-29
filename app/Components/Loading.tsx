"use client"

import { AnimatePresence, motion } from "motion/react"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import Marquee from "react-fast-marquee";
import Image from "next/image";



interface stateProp {
    setLoadingOn:Dispatch<SetStateAction<boolean>>
    loadingOn:boolean
}




function Loading({setLoadingOn, loadingOn}:stateProp) {

    const [loadProgress, setLoadprogress] = useState(0)
    const [loadPage, setLoadPage] = useState("0")
    const [prevSecBG, setPrevSecBG] = useState("white")
    

    useEffect(()=>{

        const ProgressInt = setInterval(() => {
            setLoadprogress((prev) => prev + 1)
        }, 35); 

        if(loadProgress >= 100){
            clearInterval(ProgressInt)
            setLoadPage("-50%")
           
            setTimeout(() => {
                setPrevSecBG("black")
            }, 2000);

        }

        return ()=> clearInterval(ProgressInt)

    },[loadProgress])



    /////////////// Load Preview Anim ////////////////////

    const loadImg = [
         "https://res.cloudinary.com/dyrzp2wi6/image/upload/v1773603904/codave/loadImg1_zbmmxg.jpg",
         "https://res.cloudinary.com/dyrzp2wi6/image/upload/v1773603903/codave/loadImg2_mqvx5b.jpg",
         "https://res.cloudinary.com/dyrzp2wi6/image/upload/v1773603902/codave/loadImg5_vaefpf.jpg",
         "https://res.cloudinary.com/dyrzp2wi6/image/upload/v1773603902/codave/loadImg6_euvchd.jpg",
         "https://res.cloudinary.com/dyrzp2wi6/image/upload/v1773603903/codave/loadImg4_u4bm64.jpg",
         "https://res.cloudinary.com/dyrzp2wi6/image/upload/v1773603902/codave/loadImg3_qdf5nj.jpg", ]

    const [loadImgNum, setLoadImgNum] = useState(0)


    useEffect(()=>{

        const loadImgInt = setInterval(() => {

            setLoadImgNum(prev => (prev + 1)  % loadImg.length)


        }, 2000);

       
        return ()=> clearInterval(loadImgInt)

    },[loadImgNum])

    const hash = "(*)"


    //////////////////// Background Music //////////////

    const windSound = useRef<HTMLAudioElement | null>(null)

   

    const loadIngOff =()=>{

        setLoadPage("-100%")

      

        const loadOffTimout = setTimeout(() => {
            setLoadingOn(false)
            // windSound.current = new Audio("https://res.cloudinary.com/dyrzp2wi6/video/upload/v1774091048/codave/windsound2_1_d8vyeg.mp3")

            // windSound.current.loop

            // windSound.current?.play()
        }, 1000);

        return()=> clearTimeout(loadOffTimout)
    }
   

  return (
  <>

  <section id="loading">

 
    <motion.section animate={{y:loadPage, transition:{duration:1, ease:"backInOut"}}} className="loadingAlpha" style={{backgroundColor:prevSecBG}}>

      <div className="loadProgressDiv" >

        <motion.div animate={{opacity:[0.5,1,0.5], scale:[0.5,1,0.5], transition:{duration:1, repeat:Infinity, ease:"easeInOut"}}} >

            <Image src={"/logoBlack.png"} height={300} width={300} alt="logo" loading="eager"  /> 

        </motion.div>

            <div className="loadBar" >

                <motion.div className="loadReveal" style={{width:`${loadProgress}%`}} > </motion.div>

                <p className="loadPercent">{loadProgress}%</p>

            </div>

        </div>
 
      

        <motion.section className="previewSec" style={{backgroundColor:prevSecBG}} >

           <Marquee className="loadMarquee"  direction="right" speed={100}>

           STRATEGY · OPIMIZATION · AESTHETIC · CREATIVE

           </Marquee>

            <AnimatePresence mode="wait">
 
                  <motion.div className="prevMaskSec"
                  key={loadImgNum}
                  initial={{opacity:0, y:-20}}
                  animate={{opacity:1, y:0}}
                  exit={{opacity:0, y:-20}}
                  transition={{duration:1, ease:"linear"}}

                     style={{ backgroundImage: `url(${loadImg[loadImgNum]})`,
                       
                        }}
                        
                        >

                  </motion.div>

            </AnimatePresence>

            <div className="prevbottomDiv">
                <p>{hash} WEB ACHIEVE</p>

                <motion.button animate={{rotate:10, }} whileHover={{rotateX:-20}} onClick={loadIngOff} >

                    VIEW SPACE

                </motion.button>

            </div>


        </motion.section> 


        {/* ////// Load Preview Section ////// */}

       

        

    </motion.section>

    </section>
  </>
  )
}

export default Loading
