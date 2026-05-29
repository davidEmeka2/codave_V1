"use client"

import { motion, useScroll } from "motion/react"
import { useRef } from "react"

import TextType from "./TextType"



function Section4() {

    const section4Ref = useRef<any>(null)
    
    const {scrollYProgress:sec4Progress} = useScroll({
        target: section4Ref,
        offset:["start end" , "end"]
    })

    


  return ( 
   <>
    <section className="section4" ref={section4Ref}>

    
    <section className="sec4VidDiv">

    <motion.video src="/CodaveV1.mp4"
     autoPlay
     muted
     playsInline
     loop
     animate={{scale:1.1}}
     className="bgVideo">

     </motion.video>

    

    </section>

    <TextType 
                 text={["Website In 2050" , "Catch Your Man", "Scroll-based Tricks"]}
                 typingSpeed={50}
                 pauseDuration={1000}
                 showCursor
                 cursorCharacter="_"
                 deletingSpeed={10}
                 className="sec4Txt"
                  />


                   <motion.button  whileHover={{rotateX:-20 }} className="sec4Button" >

                    CHECK IT OUT

                </motion.button>


    </section>

   </>
  )
}

export default Section4
