import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const RunningText = () => {
    const running = useRef()
    const div= useRef()

  useGSAP(()=>{
    gsap.to(running.current , {
        x:-1000,
        duration:40,
        repeat:-1,
    })
  })

  return (
    <div ref={div} className='sm:w-[200%] w-[900%] h-10 my-20 p-5  py-3 bg-gradient-to-r from-red-600 to-[#ff8ec8] text-white flex -rotate-3 justify-center items-center  '>
        <div ref={running} className='flex gap-4 overflow-hidden'>
                <div className="elem gap-3 flex items-center justify-center space-x-2 ">
                    <h1 className="font-semibold font-['Neue_Machina'] text-xl">Full-Stack Development </h1>
                    <p>⭐</p>    
                </div>
                <div className="elem gap-3 flex items-center justify-center space-x-2 ">
                    <h1 className="font-semibold font-['Neue_Machina'] text-xl">Git & GitHub</h1>
                    <p>⭐</p>
                </div>                

                <div className="elem gap-3 flex items-center justify-center space-x-2 ">
                    <h1 className="font-semibold font-['Neue_Machina'] text-xl">Responsive Design</h1> 
                    <p>⭐</p>
                </div>

                <div className="elem gap-3 flex items-center justify-center space-x-2 ">
                    <h1 className="font-semibold font-['Neue_Machina'] text-xl">Frontend Development</h1> 
                    <p>⭐</p>
                </div>

                <div className="elem gap-3 flex items-center justify-center space-x-2 ">
                    <h1 className="font-semibold font-['Neue_Machina'] text-xl">UI/UX Animations</h1> 
                    <p>⭐</p>
                </div>

                <div className="elem gap-3 flex items-center justify-center space-x-2 ">
                    <h1 className="font-semibold font-['Neue_Machina'] text-xl">GSAP</h1> 
                    <p>⭐</p>
                </div>

                <div className="elem gap-3 flex items-center justify-center space-x-2 ">
                    <h1 className="font-semibold font-['Neue_Machina'] text-xl">RESTful APIs</h1> 
                    <p>⭐</p>
                </div>
        </div>
      
    </div>
  )
}

export default RunningText
