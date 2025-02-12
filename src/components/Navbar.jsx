import React from 'react'


const Navbar = () => {
   
    
  return (
   

<nav class="bg-white border-gray-200 dark:bg-black sm:w-full">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <img  class="self-center sm:w-[16%]  w-[30%] h-10" src='https://i.imgur.com/z6LMEEJ.png'/>
 
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
      <a  href='https://drive.google.com/file/d/1IxzNnKP7Vp0-auX0BY-aL_-Pl40WPlKh/view?usp=drivesdk' class="text-white bg-[#001d3d]  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center  ">Resume</a>
     
  </div>
  
  </div>
</nav>

  )
}

export default Navbar
