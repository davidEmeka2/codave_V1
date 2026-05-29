"use client"

import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "motion/react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import TextType from "./TextType"



function Section2() {

  const aboutRef = useRef<any>(null)

  const {scrollYProgress:aboutProgress} = useScroll({
    target:aboutRef,

  })


  const aboutX  = useTransform(aboutProgress, [0.3, 1],["0vw", "620vw"])

  const aboutH1Scaler = useTransform(aboutProgress, [0, 0.3], [4,1]) 

  const aboutH1Scaler2 = useTransform(aboutProgress, [0.9, 1], [1,4]) 

  const leftLetterX = useTransform(aboutProgress, [0.3, 0.9], ["50vw", "-550vw"])

  const rightLetterX = useTransform(aboutProgress, [0.3, 0.9], ["-600vw", "0vw"])

  const leftScale = useTransform(aboutProgress, [0.9, 1], [1, 0])

  const rightScale = useTransform(aboutProgress, [0.9, 1], [1, 0])

  const rotateYLeft = useTransform(aboutProgress, [0.3, 0.7], [2, -2])

  const rotateYRight = useTransform(aboutProgress, [0.3, 0.7], [-2, 2])



  
useMotionValueEvent(aboutProgress, "change", (value)=>{
   if(value > 0.9){

   }
})
  


  ///////////////////  Image Change ///////////////////



  
 const box3Image = ["/aboutImgs/box3Designs/charlotte.png",
                    "/aboutImgs/box3Designs/customerSupport.png",
                    "/aboutImgs/box3Designs/foodSpot.png",
                    "/aboutImgs/box3Designs/submitB.png",
                    "/aboutImgs/box3Designs/xtremeBuilders.png"
 ]

 const [imageNum, setImageNum] = useState<number>(0)

  useEffect(()=>{

    const imageInterval = setInterval(() => {
      setImageNum(prev => (prev + 1)  % box3Image.length)
    }, 1000);

    return()=> clearInterval(imageInterval)

  },[])

 


  return (
    <>
    <section id="about" ref={aboutRef}>

     {/* ////////// Sticker /////////// */}

      <section className="aboutSec" >

      <motion.section className="LetterSec" >


     {/* ///////// Letters & Inner //////////////*/}


     {/* //////////// Reft///////////////// */}




      <motion.div className="leftLetters" style={{scale:leftScale}}>

        <motion.div className="lettersInner" style={{x:leftLetterX, rotateY:rotateYLeft}} >

     {/* /////////////////// leftH1s //////////////////  */}


     


    

      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>




     <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>

      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>

      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>

      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>

      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>

      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>

      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>

      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>

        </motion.div>
        
      </motion.div>


      {/* //////////// Right /////////////////// */}

      
      <motion.div className="rightLetters" style={{scale:rightScale}}>


      <motion.div className="lettersInner2" style={{x:rightLetterX, rotateY:rotateYRight}}>


   {/* /////////////// Rights H1s ////////////////////// */}



     


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      

      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>

      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>

      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>

      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>

      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>


      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>

      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>

      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>

      <h1 className="inaboutH1">
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>
      </h1>

     
          
      </motion.div>

      </motion.div>

 
    {/* ///////// Main About H1 //////////////*/}

     <motion.div style={{scale:aboutH1Scaler}} className="aboutH1Main">

      <motion.h1 className="aboutH1"
        style={{scale:aboutH1Scaler2}}
      >
         <span>A</span>
         <span>B</span>
         <span>O</span>
         <span>U</span>
         <span>T</span>

      </motion.h1>

      </motion.div>

      
      {/* ////////////////////// About Content ////////////////// */}

      <motion.section className="aboutContent" style={{x:aboutX, rotate:rotateYRight}}>

         <section>
             <div className="aboutContent1">
             <TextType 
                         text={["Helping small businesses stand out online", "With smart SEO and design that builds trust at first glance"]}
                         typingSpeed={50}
                         pauseDuration={500}
                         showCursor
                         cursorCharacter="_"
                         deletingSpeed={10}
                         className="box2Txt"
                         />
                         


               <motion.div className="cont2ImgDiv">


                  <Image src={"/aboutImgs/SEO.png"} height={250} width={500} alt="aboutBoxImage" className="box2Img" />
               

               </motion.div>
            </div>

         </section>


         <section>
             <div className="aboutContent2">
               
             <TextType 
                         text={["5+ years of Experience", "focusing on detail and delivering work that actually satisfies"]}
                         typingSpeed={50}
                         pauseDuration={500}
                         showCursor
                         cursorCharacter="_"
                         deletingSpeed={10}
                         className="box1Txt"
                         />
                         


               <motion.div className="cont1ImgDiv">


                  <Image src={"/aboutImgs/leaves.png"} height={200} width={250} alt="aboutBoxImage" className="box1Img" />
               

               </motion.div>

            </div>

         </section>



         <section>
              <div className="aboutContent3">
              

                         


       <AnimatePresence mode="popLayout">

               <motion.div className="cont3ImgDiv"
               key={imageNum}
               initial={{ opacity: 0, scale: 1.1 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.5, ease: "easeOut" }}
                 >
                  

                  <Image src={box3Image[imageNum]} height={250} width={250} alt="aboutBoxImage" className="box3Img" />
               

               </motion.div>

        </AnimatePresence>


            </div>

              
         </section>



         <section>
              <div className="aboutContent4">

              <TextType 
                         text={["While many platforms focus purely on functionality", "We go further — shaping how it looks, feel, and communicate" ]}
                         typingSpeed={50}
                         pauseDuration={500}
                         showCursor
                         cursorCharacter="_"
                         deletingSpeed={10}
                         className="box4Txt"
                         />
                         


               <motion.div className="cont4ImgDiv">


                  <Image src={"/aboutImgs/heart.png"} height={250} width={250} alt="aboutBoxImage" className="box5Img" />
               

               </motion.div>

            </div>
         </section>


         <section>

              <div className="aboutContent5">

                         <TextType 
                         text={["Codave is a creative development space focused on building modern websites", "Balancing logic, aesthetics, and clarity" ]}
                         typingSpeed={50}
                         pauseDuration={500}
                         showCursor
                         cursorCharacter="_"
                         deletingSpeed={10}
                         className="box5Txt"
                         />
                         


               <motion.div className="cont5ImgDiv">


                  <Image src={"/aboutImgs/artFace.png"} height={250} width={250} alt="aboutBoxImage" className="box5Img" />

               </motion.div>

            
            </div>

         </section>
         
      </motion.section>

      {/* ////////////////////// About Content ////////////////// */}


      </motion.section>


      </section>


    </section>
    </>
  )
}

export default Section2
