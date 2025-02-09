import { useContext, useState } from "react"
import Home from "./components/Home"
import Preloader from "./components/Preloader"
import { SpinnerContext } from "./context/SpinnerContext"

function App() {
  window.onload=function(){
    setLoader(true)
    // document.getElementsByName().style.display="none"
  }
 const {loader , setLoader} = useContext(SpinnerContext)
   return (
    loader?<Home/> : <Preloader/>
    
  )
}
export default App
