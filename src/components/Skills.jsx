import React, { useEffect } from 'react'
import { skillData } from '../assets/skillAssets'
import SkillCard from './SkillCard'

const Skills = () => {

  return (
    <>
      <h1 className='font-bold text-8xl text-white ml-auto mr-auto w-fit my-16 sm:mt-48'>Skills</h1>
      <section id='skills' className='  grid grid-cols-3 sm:grid-cols-6  h-screen w-auto  sm:mx-20 sm:gap-4  '>
        {
        skillData.map((item, index) => (<SkillCard key={index} id={item.id} name={item.name} image={item.image} />))
        }
      </section>
    </>

  )
}

export default Skills
