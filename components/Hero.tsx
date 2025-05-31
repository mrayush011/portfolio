import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className = "pb-20 pt-36">
        <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center">
      
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
    <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            
            Hi, I&apos;m Ayush Chaurasiya
          </p>
          
            <TextGenerateEffect 
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Graphic Designer | Visual Storyteller | Creating Impactful Designs for Digital"
            />
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mb-4">
            {/* <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"> */}
            I Am Computer Science Student at Glocal University, Noida.
            </p>

            <a href="https://drive.google.com/file/d/1eoMHg6aW7XQ-kOMXy4CYapScC69NxqN1/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <MagicButton
                title = "Resume"
                icon = {<FaLocationArrow />}
                position='right'
                />
            </a>
        </div>
    </div>
    <div className="flex gap-3 md:gap-3 lg:gap-8 justify-center">
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              <span style={{margin:"auto"}}>My Tools </span>
                {['Illustrator','Canva', 'Photoshop', 'Capcut','Graphic Design','Video Editor'].map((item) => (
                  <span
                    key={item}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
    </div>
  )
}

export default Hero