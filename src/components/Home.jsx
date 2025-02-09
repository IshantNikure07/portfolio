import React from 'react'
import LandingPage from './LandingPage'
import Mywork from './Mywork'
import RunningText from './RunningText'
import Skills from './Skills'
import GetInTouch from './GetInTouch'
import Navbar from './Navbar'
import Mern from './mern'

const Home = () => {
  return (
    <div className="bg-black overflow-hidden overflow-x-hidden w-[100vw] sm:w-auto ">
        <Navbar/>
        <Mern/>
    <LandingPage/>
    <Mywork/>
    <RunningText/>
    <Skills/>
    <GetInTouch/>
    {/* <div className='bg-black h-screen w-full'></div>  */}
  </div>
  )
}

export default Home
