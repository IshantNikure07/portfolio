import React, { useContext } from 'react'
import Spline from '@splinetool/react-spline'
import { SpinnerContext } from '../context/SpinnerContext'


const Robot =() => {
   const {setLoader} = useContext(SpinnerContext)
   
    setLoader(true)
   
  return (
 
      <Spline className='overflow-hidden '
        scene="https://prod.spline.design/MVqMfEZaplcLuQu0/scene.splinecode" 
      />
     
   
  )

  
}

export default Robot
