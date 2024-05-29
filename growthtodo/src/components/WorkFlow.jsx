import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import codeImg from "../assets/code.jpg"
import { checklistItems } from '../constants'
function WorkFlow() {
  return (
    <div className='mt-20'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide'>Accelarate your
        <span id='a2' className='bg-gradient-to-r from-blue-400 t0-blue-800 text-transparent bg-clip-text'> coding workflow. </span> </h2>
  <div className='flex flex-wrap justify-center'>
<div className='p-2 w-full lg:w-1/2'>
<img src={codeImg} alt="" />
</div>
<div className='pt-12 w-full lg:w-1/2'>
{checklistItems.map((item,index)=>(
<div key={index} className='flex mb-12'>
    <div className='text-green-400 mx-6 bg-neutral-600 h-10 w-10 p-2 justify-center items-center rounded-full'>
        <CheckCircle2/>
    </div>
    <div>
        <h5 className='mt-1 mb-2 text-xl'>
{item.title}
        </h5>
        <p className='text-md text-neutral-600'>
{item.description}
        </p>
    </div>
</div>
))}
</div>
  </div>
    </div>
  )
}

export default WorkFlow
