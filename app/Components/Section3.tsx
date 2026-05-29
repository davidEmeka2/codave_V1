"use client"

import TiltedCard from './TiltedCard';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';




function Section3() {

const projectRef = useRef<any>(null)

const {scrollYProgress:projectProgress} = useScroll({
  target:projectRef
})

const scaleStar = useTransform(projectProgress , [0.1, 0.3], [0,4])

const moveDown = useTransform(projectProgress, [0.2, 0.6], ["-50vw", "0vw"])

const moveUp2 = useTransform(projectProgress, [0.5, 0.7], ["25vw", "0vw"])

const moveRight = useTransform(projectProgress, [0.3, 0.6], ["50vw", "0vw"])

const moveRight2 = useTransform(projectProgress, [0.4, 0.6], ["50vw", "0vw"])

const moveUp = useTransform(projectProgress, [0.7, 1], ["50vw", "5vw"])

const iniScale = useTransform(projectProgress, [0, 0.2],[0,1] )



const [removeScale, setRemoveScale] = useState(true)
const backgroundColor = useMotionValue("transparent")
const txtColor = useMotionValue("black")

const [removeScale2, setRemoveScale2] = useState(false)

useMotionValueEvent(projectProgress, "change" ,(value)=>{

  if(value > 0.3){
    
    backgroundColor.set("white")
  }

  
  if(value < 0.3){
    backgroundColor.set("transparent")
    
  }


  if(value > 0.4){
    setRemoveScale(false)
   
  }

  if(value < 0.4){
    setRemoveScale(true)
  
  }

  if(value > 0.45){
    setRemoveScale2(true)
   
  }

  if(value < 0.45){
    setRemoveScale2(false)
  
  }


  if(value > 0.42){
    backgroundColor.set("black") 
    txtColor.set("white")

  }

  if(value < 0.42){
   
    txtColor.set("black")

  }

})


/////////////// Strings for Text ////////////////////

const star = "DESIGNS*"

  return (
    <>
      <section id='projectSec' ref={projectRef}>

        <section className='projectSecSticker' >

        {/* ///////////// Projects Alpha ////////// */}

          <section className='projectSecBody'>

           <div className='projectsTop'>

            <div className="project1">

            <TiltedCard
           imageSrc="/projectsImg/evanHale.png"
           altText="Evan Hale's Portfolio Album"
           captionText="Evan Hale's Portfolio"
           containerHeight="100%"
           containerWidth="100%"
        
           imageHeight="100%"
           imageWidth="100%"
           rotateAmplitude={15}
           scaleOnHover={1.1}
           showMobileWarning={false}
           showTooltip
          
      /> 

       <nav aria-label='website and github links' className='websiteLinks'>

        <Link href={"https://evanhale.vercel.app/"} className='websiteLink' target='_blank' > Website Link ↗ </Link>

        <Link href={"https://github.com/Davia222/evanhale"} className='gitHubLink' target='_blank' > Github Link ↗</Link>
        
       </nav>

            </div>


            {/* ////////////// Project 2 /////////////////// */}

            <div className="project2">

            <TiltedCard
           imageSrc="/projectsImg/wave22.png"
           altText="Wave 22 Studio"
           captionText="Wave 22 Studio"
           containerHeight="100%"
           containerWidth="100%"
        
           imageHeight="100%"
           imageWidth="100%"
           rotateAmplitude={15}
           scaleOnHover={1.1}
           showMobileWarning={false}
           showTooltip
          
      /> 

       <nav aria-label='website and github links' className='websiteLinks'>

        <Link href={"https://wave22-seven.vercel.app/"} className='websiteLink' target='_blank' > Website Link ↗ </Link>

        <Link href={"https://github.com/Davia222/wave22"} className='gitHubLink' target='_blank' > Github Link ↗</Link>
        
       </nav>

            
            </div>

           </div>

           <div className='projectsBottom'>

            {/* /////////// Project 3 ///////////////// */}



            <div className="project3">

            <TiltedCard
           imageSrc="/projectsImg/kael.png"
           altText=""
           captionText="Adiel's Portfolio (HSE) officer"
           containerHeight="100%"
           containerWidth="100%"
        
           imageHeight="100%"
           imageWidth="100%"
           rotateAmplitude={15}
           scaleOnHover={1.1}
           showMobileWarning={false}
           showTooltip
          
      /> 

       <nav aria-label='website and github links' className='websiteLinks'>

        <Link href={"https://adaigwes-portfolio.vercel.app/"} className='websiteLink' target='_blank' > Website Link ↗ </Link>

        <Link href={"https://github.com/Davia222/adaigwes-portfolio"} className='gitHubLink' target='_blank' > Github Link ↗</Link>
        
       </nav> 

            </div>

            {/* //////////////////// Project 4 /////////////////// */}

            <div className="project4">

              {/* ///////////  box Scale /////// */}

             <TiltedCard
           imageSrc="/projectsImg/adiel.png"
           altText="Adiel's Portfolio On HSE "
           captionText="Adiel's Portfolio (HSE) officer"
           containerHeight="100%"
           containerWidth="100%"
        
           imageHeight="100%"
           imageWidth="100%"
           rotateAmplitude={15}
           scaleOnHover={1.1}
           showMobileWarning={false}
           showTooltip
          
      /> 

       <nav aria-label='website and github links' className='websiteLinks'>

        <Link href={"https://adaigwes-portfolio.vercel.app/"} className='websiteLink' target='_blank' > Website Link ↗ </Link>

        <Link href={"https://github.com/Davia222/adaigwes-portfolio"} className='gitHubLink' target='_blank' > Github Link ↗</Link>
        
       </nav>


            </div>


           </div>

          </section>

          
        

            {removeScale && <motion.section className='projectBoxScale' style={{scale:scaleStar, backgroundColor:backgroundColor}} >

            <Image src={"/projectsImg/whiteSparkle.svg"} height={2000}  width={2000} alt='starScale'  />

            </motion.section> }



            <motion.div style={{scale:scaleStar}} className='girlFaceDiv'>

            <Image src={"/projectsImg/girlFace.gif"} height={150} width={150} alt='girlface' className='girlFace' unoptimized  />

            </motion.div>


           
           



            

           {!removeScale && <AnimatePresence mode='wait'  >
            
            <motion.section className='projectBoxScale2' style={{backgroundColor:backgroundColor}}>

            </motion.section>

            </AnimatePresence>}

            





            {removeScale2 &&   <motion.div style={{y:moveUp}} className='projectHero'>

              <Image src={"/projectsImg/projectGirlImg.png"} height={300} width={300} alt='projectHero' className='projectHeroImg'  />

            </motion.div>}


            <motion.p className='codaveCtnt' style={{y:moveDown, color:txtColor, scale:iniScale }}>
              CODAVE CREATES CONTENT  
            </motion.p>

            <motion.p className='eduCtnt' style={{x:moveRight2, color:txtColor, scale:iniScale}}>
              EDUCATIVE 
            </motion.p>

            <motion.p className='creativeCtnt' style={{x:moveRight, color:txtColor, scale:iniScale}}>
              CREATIVE &
            </motion.p>

            <motion.p className='desCtnt' style={{y:moveUp2, color:txtColor, scale:iniScale }}>
             {star}
            </motion.p>


        </section>


   

      </section>
    </>
  )
}

export default Section3
