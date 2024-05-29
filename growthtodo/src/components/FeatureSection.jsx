import React from 'react'
import {features} from "../constants"

function FeatureSection() {
  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
        <div className='text-center'>
        <span  id="a1" className='bg-neutral-900 text-blue-500 rounded-full h-6 text-4xl font-large px-2 py-1 uppercase'>
        Features
      </span>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide'>
        Easily Build your code
        <span className='bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text'>your code</span>
      </h2>
        </div>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 lg:mt-20'>
{
  features.map((feature,index)=>(
<div key={index} className=' flex-wrap w-full sm:1/2 lg:1/3'>
  <div className='flex'>
    <div className='flex mx-6 h-10 w-10 p-2 bg-neutral-900  text-blue-700 justify-center items-center rounded-full '>
      {feature.icon}
    </div>
  </div>
  <h5 className='mt-1 mb-6 text-xl'>{feature.text}</h5>
  <p className='text-md p-2 mb-20 text-neutral-500'>{feature.description}</p>
</div>
  ))
}
     </div>
    </div>
  )
}

export default FeatureSection
