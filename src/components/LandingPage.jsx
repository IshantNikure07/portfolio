import React, { useEffect } from 'react'
import Robot from './Robot'

const LandingPage = () => {


  return (
    <div className='max-w-[100vw] overflow-hidden'>
   
    <section className="font-['Neue_machina'] grid grid-cols-1 sm:grid-cols-2 gap-2 overflow-hidden  ">
      <div className='  flex justify-center items-center w-full h-[100vh] sm:h-[100vh] '>
        <h1 className=' text-2xl sm:text-5xl  text-white w-[50%] sm:w-[90%] whitespace-pre-line py-40 px-4 '>Hey i am , <span className='text-red-700 text-3xl sm:text-6xl'>MERN</span>developer</h1>
      </div>
      <div className='  sm:w-auto sm:h-screen h-[100vh]  flex justify-center items-center absolute sm:left-[50%] left-[-40%] overflow-x-hidden '>
      <Robot/>
      </div>
    </section>
    
    
    </div>
  )
}

export default LandingPage
