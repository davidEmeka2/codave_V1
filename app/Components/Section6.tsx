"use client"

import { motion, useMotionValueEvent, useScroll } from "motion/react"
import Image from "next/image"
import { useRef, useState } from "react"
import Marquee from "react-fast-marquee"








function Section6() {

    const [colorBlack, setColorBlack] = useState("black")

    const [colorWhite, setColorWhite] = useState("white")

    const [logoColor, setLogoColor] = useState("/logoWhite.png")

    const section6Ref = useRef<any>(null)

    const {scrollYProgress:sec6Progress} = useScroll({
        target:section6Ref,
        offset:["start end", "end"]

    })

    useMotionValueEvent(sec6Progress, "change", (value)=>{

        if(value > 0.95){
            setColorBlack("white")
            setColorWhite("black")
            setLogoColor("/logoBlack.png")
        }


        if(value < 0.95){
            setColorBlack("black")
            setColorWhite("white")
            setLogoColor("/logoWhite.png")
        }

    })

  return (
   <>
   <motion.footer ref={section6Ref} style={{backgroundColor:colorBlack}}>

    <section className='footerNavs'>

        <motion.nav className='footerNav1' style={{color:colorWhite}} >
            <button>
                HOME
            </button>

            <button>
                ABOUT
            </button>

            <button>
                PROJECTS
            </button>

            <button>
                CONTACT
            </button>

        </motion.nav>

    </section>

    <Marquee className="footerMarquee"  direction="right" speed={100}>

           STRATEGY · OPIMIZATION · AESTHETIC · CREATIVE

           </Marquee>

           <section className="footerLogo">

            <Image src={logoColor} height={200} width={200} alt="codaveLogo" className="codaveLogoFooter" />

            <h1 className="codaveFooterH1" style={{color:colorWhite}} >ODAVE</h1>
       
            
         
           </section>

           <section className="copyright" style={{color:colorWhite}} >

            <p>CODAVE.SPACE © 2026 </p>

            <span> </span>

            <p>DESIGNED BY CODAVE</p>

           </section>

   </motion.footer>
   </>
  )
}

export default Section6
