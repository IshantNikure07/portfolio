import React from 'react'

const SkillCard = ({name , image}) => {
  return (
    <div className='  w-[23vw] sm:w-[13vw] h-[23vh] place-items-center p-2 ml-auto mr-auto mt-4 sm:mt-0 shadow-white'>
    <img className='h-[85%] rounded-sm '  src={image} alt="" />
    <h1 className='mt-1 font-bold text-white'>{name}</h1>
</div>
  )
}

export default SkillCard
