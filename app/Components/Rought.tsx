"use client"

import { motion, useScroll, useTransform } from "motion/react"
import Image from "next/image"
import { useRef } from "react"


function rought() {

    const section4Ref = useRef<any>(null)
    
    const {scrollYProgress:sec4Progress} = useScroll({
        target: section4Ref,
        offset:["start end" , "end"]
    })

    // const vidUp = useTransform(sec4Progress, [0, 0.2], [0, -100])

    const scaleUp = useTransform(sec4Progress, [0,0.2], [0, 1] )

    const scaleUp2 = useTransform(sec4Progress, [0.2, 0.4], [0, 1] )

    // const scaleUp3 = useTransform(sec4Progress, [0.4, 0.6], [0, 1] )

    const scaleUp4 = useTransform(sec4Progress, [0.6, 0.8], [0, 1] )

    const scaleUp5 = useTransform(sec4Progress, [0.8, 1], [0, 1] )

    // const moveUp = useTransform(sec4Progress, [0,1], [0, -50])

  return (
    <>
     <motion.div className="contentImgDiv1" style={{scale:scaleUp}}>
      <Image src={"/rotatingEarth.gif"} height={400} width={400} alt="contentImage" className="contentImg1" />
    </motion.div>


    <motion.div className="contentImgDiv3" style={{scale:scaleUp4}} animate={{rotate:10}}>
      <Image src={"/contentImgs/2.png"} height={400} width={400} alt="contentImage" className="contentImg1" />
    </motion.div>

    <motion.div className="contentImgDiv4" style={{scale:scaleUp5}} animate={{rotate:10}}>
      <Image src={"/contentImgs/3.png"} height={400} width={400} alt="contentImage" className="contentImg1" />
    </motion.div>

    <motion.div className="contentImgDiv5" style={{scale:scaleUp2}} animate={{rotate:10}}>
      <Image src={"/contentImgs/5.png"} height={400} width={400} alt="contentImage" className="contentImg1" />
    </motion.div>
    </>
  )
}

export default rought
