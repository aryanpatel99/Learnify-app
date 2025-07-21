import React from 'react'
import { assets } from '../../assets/assets'
// import assets from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl md:text-5xl font-semibold text-gray-800'>Learn anything, anytime, anywhere</h1>
      <p className='text-gray-500 sm:text-sm'>Empower your learning journey with flexible, expert-led courses designed to fit your schedule and goals.<br/> 
  Start learning at your own pace — from anywhere, at any time.</p>
      <div className='flex items-center gap-6 font-medium mt-4'>
        <button className='px-8 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700'>Get Started</button>
        <button className='flex items-center gap-2 px-8 py-2 rounded-lg border border-gray-500 hover:bg-gray-100'>Learn More <img src={assets.arrow_icon} alt='arrow icon'/></button>
        
      </div>
     
    
    </div>
  )
}

export default CallToAction