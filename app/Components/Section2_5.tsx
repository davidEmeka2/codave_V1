"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"



function Section2_5() {

  const projectsRef = useRef(null)

const {scrollYProgress:projectH1Progress} = useScroll({
  target:projectsRef,
  offset:["start end", "end start"]

})

const pJWidth = useTransform(projectH1Progress, [0.3, 0.6], ["0%", "100%"])

  return (
    <>
    <section className='sec2_5' ref={projectsRef} >

      <div className='h1DivAplpha'>

        <motion.div className='h1Div' style={{width:pJWidth}}>

          <h1 className='projectsh1'>PROJECTS</h1>

        </motion.div>

      </div>
        
    </section>
    </>
  )
}

export default Section2_5
