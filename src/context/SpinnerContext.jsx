import React, { useState } from 'react'
import { createContext } from 'react'

export const SpinnerContext = createContext()

const SpinnerContextProvider = (props) => {
    const [loader , setLoader] = useState(false)
    const value = {loader , setLoader}
  return (
    <SpinnerContext.Provider value={value}>
    {props.children}
  </SpinnerContext.Provider>
  )
}

export default SpinnerContextProvider
