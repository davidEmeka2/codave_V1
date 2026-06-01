"use client"

import { motion, useMotionValueEvent, useScroll, useTransform  } from "motion/react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import TextType from "./TextType"

import CountUp from './CountUp'




function Section1() {

    const sec1ScrollRef = useRef<any>(null)

    const {scrollYProgress:sec1ScrollProgress} = useScroll({
        target:sec1ScrollRef,
    })

    const sec1X = useTransform(sec1ScrollProgress, [0,1], ["0" , "-200vw"])

    const moonRotate = useTransform(sec1ScrollProgress, [0,1], [0, 400])


    
    ///////////////////////// Animated codave-sprites /////////////////////////


    const frames = [
        "/codave-sprites/codave figure animation-01.png",
        "/codave-sprites/codave figure animation-02.png",
        "/codave-sprites/codave figure animation-03.png",
        "/codave-sprites/codave figure animation-05.png",
        "/codave-sprites/codave figure animation-06.png",
        "/codave-sprites/codave figure animation-07.png",
        "/codave-sprites/codave figure animation-08.png",
        "/codave-sprites/codave figure animation-09.png",
        "/codave-sprites/codave figure animation-13.png",
        "/codave-sprites/codave figure animation-14.png",
        
      ]

      const [frameIndex, setFrameIndex] = useState(0)
      const [isScrolling, setIsScrolling] = useState(false)

      const intervalRef = useRef<any>(null)
      const scrollTimeoutRef = useRef<any>(null)

      useEffect(() => {

        
        const onScroll = () => {

          setIsScrolling(true)

          clearTimeout(scrollTimeoutRef.current)

          scrollTimeoutRef.current = setTimeout(() => {
           setIsScrolling(false)
         }, 30) 

         }
      
        
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
      }, [])


      useEffect(() => {
        if (isScrolling ) {
          intervalRef.current = setInterval(() => {
            setFrameIndex((prev) => (prev + 1) % frames.length)
          }, 60)
        } else {
          clearInterval(intervalRef.current)
        }
      
        return () => clearInterval(intervalRef.current)

      }, [isScrolling])


       /////////////// Movement////////////////////////
      
      

   

     const [moveBack, setMoveback] = useState("rotateY(0deg)")

     const [sec1MainBgCol, setSec1MainBgCol]= useState<string>("")

     const [sec2Close, setSec2Close] = useState<boolean>(true)

     

     const [sec1NumCount, setSec1NumCount] = useState <boolean>(false)

     const[ statsUp, setStatsUp] = useState("100%")

    

     useMotionValueEvent(sec1ScrollProgress, "change" , (value)=>{

        const prevValue:any = sec1ScrollProgress.getPrevious()

        if(prevValue > value){
            setMoveback("rotateY(180deg)")
        }else{
            setMoveback("rotateY(0deg)")
        }

        if(value < 0.7){
          setSec1MainBgCol("")
          setSec2Close(true)
         
        }

        if(value > 0.7){
          setSec1MainBgCol("black")
          setSec2Close(false)
        
        }

        if(value > 0.85){
          setStatsUp("0%")

        }

        if(value < 0.85){
          setStatsUp("100%")
        }

        if(value > 0.9){
          setSec1NumCount(true)
        }

         if(value < 0.9){
          setSec1NumCount(false)
        }
       
        
       
       

     })

     const sec1XRight = useTransform(sec1ScrollProgress, [0,1], ["0" , "300vw"])



    
     /////////////// Movement End ////////////////////////


     ///////////////////// Change BG Color ///////////////

    
     const apos = "'"


     ////////////// Scroll enter of Sec1Main 3 (Hand etc) /////////////////////

     const handY = useTransform(sec1ScrollProgress, [0.7, 1], ["-100%", "0%"])

    //  const statsY = useTransform(sec1ScrollProgress, [0.7, 1], ["100%", "0%"])
     


  return (
   <>

 

   

   <motion.section id="section1" ref={sec1ScrollRef} initial={{opacity:0, y:50}} animate={{opacity:1, y:0, transition:{ duration:0.3, ease:"easeInOut",}}} >

{/* 
   <Image src={"/aboutImgs/mouseScroll.png"} height={100}  width={100} alt="scrollIndicator"  className="scrollIndicator" /> */}

   
      
      


    <section className="sec1Sticker" >

        <motion.section className="sec1Main" style={{x:sec1X, backgroundColor:sec1MainBgCol}} >

    


            
      <motion.div  style={{x:sec1XRight }} className="chracterDiv" > 

        <Image
           src={frames[frameIndex]}
           height={60}
           width={60}
           alt="codave-sprites"
           style={{ transform: moveBack }} />
     

      </motion.div>



       {/* ///////////////////// Section Main 1 //////////////////////// */}



            <section className="sec1MainSec1">


            <TextType 
                 text={["Codave Designs & Develops Websites" , "Where logics Meets aesthetics"]}
                 typingSpeed={50}
                 pauseDuration={1000}
                 showCursor
                 cursorCharacter="_"
                 deletingSpeed={10}
                 className="sec1Sec1txt1"
                  />

              <TextType 
                 text={["Logic makes it work","Aesthetics make it Better"]}
                 typingSpeed={50}
                 pauseDuration={500}
                 showCursor
                 cursorCharacter="_"
                 deletingSpeed={10}
                 className="sec1Sec1txt2"
                  />

              <div className="cloudsDiv">

                <Image src={"/clouds/cloud1.png"} height={200}  width={400} alt="clouds" className="cloud1" />

              </div>


               {/* <div className="cloudsDiv2">

                <Image src={"/clouds/cloud2.png"} height={200}  width={400} alt="clouds" className="cloud2" />

              </div> */}



              <div className="treeDiv">

              <Image src={"/trees/tree2.gif"} height={500}  width={600} alt="tree" className="treeImg1" unoptimized />

              </div>


            <div className="grassDiv">
              <Image src={"/grassMain.png"} height={100}  width={700} alt="grass" className="grassImg"/>
            </div>


            <div className="grassDiv2">
              <Image src={"/grassMain.png"} height={100}  width={700} alt="grass" className="grassImg2"/>
            </div>

            </section>




            {/* ///////////////////// Section Main 2 //////////////////////// */}

            

            <section className="sec1MainSec2">


            {sec2Close ? 


           <section className="sec1MainSec2_1">

            


            <TextType 
                 text={["Every scroll tells a story", "Created to be felt" ]}
                 typingSpeed={50}
                 pauseDuration={500}
                 showCursor
                 cursorCharacter="_"
                 deletingSpeed={10}
                 className="sec1Sec2txt"
                  />

            
              <div className="treeDiv1">

              <Image src={"/trees/tree8.png"} height={500}  width={600} alt="tree" className="treeImg2" />

              </div>


                <div className="treeDiv2">

              <Image src={"/trees/tree9.png"} height={500}  width={600} alt="tree" className="treeImg3"/>

              </div>


               <div className="cloudsDiv1">

                <Image src={"/clouds/cloud1.png"} height={200}  width={400} alt="clouds" className="cloud1" />

              </div>


               <div className="cloudsDiv2">

                <Image src={"/clouds/cloud2.png"} height={200}  width={400} alt="clouds" className="cloud2" />

              </div>
              
            <div className="grassDiv">
              <Image src={"/grassMain.png"} height={100}  width={700} alt="grass" className="grassImg"/>
            </div>

            <div className="grassDiv2">
              <Image src={"/grassMain.png"} height={100}  width={700} alt="grass" className="grassImg2"/>
            </div>

            </section> :
            
             <section className="sec1MainSec2_2">

              <TextType 
              text={["Every scroll tells a story", "Aesthetics makes it matter" ]}
              typingSpeed={50}
              pauseDuration={500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={10}
              className="sec1Sec2txt2"
              />

          

              {/* <motion.div className="sec1Img1Div"  >

                <Image src={"/photos/submit.png"} height={500} width={500} alt="submitImg" />

              </motion.div> */}

             

             </section>

             

            
          }



            </section>



             {/* ///////////////////// Section Main 3 //////////////////////// */}



            <section className="sec1MainSec3">

          
              

            <motion.div className="handImgDiv" style={{y:handY}} >

              <Image src={"/photos/hand.png"} height={600} width={600} alt="sec1Hand" className="sec1HandDiv" />

             </motion.div>


                <motion.h1 className="sec3Mainh1"  > <span>WHY</span> <span>US?</span> </motion.h1>   

               <motion.div className="sec1Stats" 
                 animate={{y:statsUp}}
               > 

               <div className="heroStats1">

                   <p>

                   <span>
                  
                  {sec1NumCount? <CountUp
                   from={0}
                   to={5}
                   separator=","
                   direction="up"
                   duration={0.1}
                   className="count-up-text"/> : "0" } +
                    
                    </span>

                    </p>

                <p> Years of Experience</p>

               </div>


               <div className="heroStats2">

                  <p>

                  <span>

                    {sec1NumCount? <CountUp
                   from={0}
                   to={50}
                   separator=","
                   direction="up"
                   duration={0.1}
                   className="count-up-text"/> : "0" }+

                    </span>

                    </p>

                <p>Projects Completed</p>

               </div>

               <div className="heroStats3">

                  <p>

                  <span>
                    
                    {sec1NumCount? <CountUp
                   from={0}
                   to={100}
                   separator=","
                   direction="up"
                   duration={0.1}
                   className="count-up-text"/> : "0" }% 

                   </span>

                   </p>

                <p>Commitment To client</p>

               </div>

                </motion.div> 



            </section>

            

        </motion.section>

    </section>

   </motion.section>

   </>
  )
}

export default Section1
