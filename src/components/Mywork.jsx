import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const Mywork = () => {

    // const slide = useRef()
    useEffect(()=>{
        gsap.utils.toArray(".slide").forEach((slide)=>{
            gsap.to(slide, {
                opacity:0.8,
                scale:0.8,
                
                scrollTrigger:{
                    trigger:slide,
                    start:"top 15%",
                    end:"bottom 15%",
                    scrub:true,
                   
                }
            })
        })
    })
 
 

  return (<>
<div className='text-white flex flex-col justify-center items-center gap-2 '>
            <h1 className=' sm:text-6xl font-bold m-6 mx-auto '>My Work </h1>
            <p className='font-serif'>"A Showcase of my journey and the projects i've work to develop my skills"</p>
        </div>
    <section className='text-white rounded-lg   mx-10 w-full md sm:w-[80%] ml-auto mr-auto  '>
       

        <div className='  flex flex-col gap-5 py-[15vh]'>

            {/* work 1 - 3 */}
            <div  className='slide sticky top-[5vh] bg-[#03071e] p-2 sm:py-[10vh] flex sm:flex-row flex-col rounded-lg sm:m-0 m-4'>
                <aside className='sm:w-[50%]  w-[90%] p-2 sm:p-10 space-y-4 '>
                    <h1 className='text-3xl'>E-Commerce Clothing Store</h1>
                    <h2 className=''> A Complete MERN Stack Application</h2>
                    <hr className='bg-slate-950 ' />
                    <p>A full-stack application for a clothing store featuring categories for men, women, and kids. It includes user authentication, product details, cart functionality, responsive design and payment section</p>
                    {/* <button className='bg-white text-black px-6 py-2 rounded-md'>Link</button> */}
                </aside>
                <div className='sm:h-[40vh] sm:w-[35vw] ml-auto mr-auto sm:m-0 w-[80%]  bg-black rounded-lg flex flex-col px-3 pb-3 justify-center items-center '>
                    <img className='w-4' src="https://img.freepik.com/premium-photo/top-view-professional-optical-lens-modern-dslr-cameras-isolated-black-background-high-resolution-image_627281-152.jpg" alt="" />
                    <img className='w-[100%] h-[93%]' src="https://i.imgur.com/puaBdhd.png" alt="loading" />
                </div>
                    {/* <img className='z-10 h- h-full absolute top-[-50%] ' src="https://media.istockphoto.com/id/1456767508/vector/light-box-great-design-for-any-purpose-office-interior-mockup-of-the-interior-on-a-white.jpg?s=1024x1024&w=is&k=20&c=GnsiR_O89EPsvtSNr5gTkB0KRVKhOfQGoQG81Kw-BDw=" alt="" /> */}

            </div>
            
            <div  className='slide sticky top-[5vh] bg-[#03071e] p-2 sm:py-[10vh] flex sm:flex-row flex-col rounded-lg sm:m-0 m-4 '>
                <aside className='sm:w-[50%]  w-[90%] p-2 sm:p-10 space-y-4'>
                    <h1 className='text-3xl'>SPOTIFY CLONE</h1>
                    <h2 className=''>A Frontend UI/UX Project</h2>
                    <hr className='bg-slate-950 ' />
                    <p>A clone of Spotify focusing on UI/UX design with features such as playlists, album details, and a sleek, responsive layout. This project highlights proficiency in frontend development and creating visually appealing, interactive interfaces.</p>
                    {/* <button className='bg-white text-black px-6 py-2 rounded-md'>Link</button> */}
                </aside>
                <div className='sm:h-[40vh] sm:w-[35vw] ml-auto mr-auto sm:m-0 w-[80%]  bg-black rounded-lg flex flex-col px-3 pb-3 justify-center items-center '>
                    <img className='w-4' src="https://img.freepik.com/premium-photo/top-view-professional-optical-lens-modern-dslr-cameras-isolated-black-background-high-resolution-image_627281-152.jpg" alt="" />
                    <img className='w-[100%] h-[93%]' src="https://i.imgur.com/ApvoIB5.png" alt="" />
                </div>
            </div>

            <div className='slide sticky top-[5vh] bg-[#03071e] p-2 sm:py-[10vh] flex sm:flex-row flex-col rounded-lg sm:m-0 m-4 '>
                <aside className='sm:w-[50%]  w-[90%] p-2 sm:p-10 space-y-4'>
                    <h1 className='text-3xl'>SIGNIFICO LANDING PAGE</h1>
                    <h2 className=''>A Static Animation-Rich Webpage</h2>
                    <hr className='bg-slate-950 ' />
                    <p>An engaging landing page for 'Significo,' designed with GSAP for smooth animations and an interactive user experience. This project demonstrates expertise in motion design and the ability to create captivating visuals.</p>
                    {/* <button className='bg-white text-black px-6 py-2 rounded-md'>Link</button> */}
                </aside>
                <div className='sm:h-[40vh] sm:w-[35vw] ml-auto mr-auto sm:m-0 w-[80%]  bg-black rounded-lg flex flex-col px-3 pb-3 justify-center items-center '>
                    <img className='w-4' src="https://img.freepik.com/premium-photo/top-view-professional-optical-lens-modern-dslr-cameras-isolated-black-background-high-resolution-image_627281-152.jpg" alt="" />
                    <img className='w-[100%] h-[93%]' src="https://i.imgur.com/Uo7nurH.png" alt="" />
                </div> 
            </div>
        </div>
    </section></>

  )
}

export default Mywork
