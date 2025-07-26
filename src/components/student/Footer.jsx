import React from 'react'
// import img from 'next/image'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
// import { Button } from '@/components/ui/button'
import SvgComp from '../SvgComp'
const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
        <div className='flex flex-col md:items-start items-center w-full ' >
          {/* <img src={'/newLogo.svg'} alt="logo" /> */}
          {/* <img src="/whiteLogo.svg" width={28} height={28} alt="Logo" className='w-28 lg:w-32 cursor-pointer' /> */}
          {/* <img src="/whiteLogo.svg" width={28} height={28} alt="Logo" className='w-28 lg:w-32 cursor-pointer' /> */}
<SvgComp/>
          <p className='mt-6 text-center md:text-left text-sm text-white/80 '>Empowering learners with flexible, accessible, and expert-led education for a better future.</p>
        </div>
        <div className='flex flex-col md:items-start items-center w-full '>
          <h2 className='font-semibold text-white mb-5'>Company</h2>
          <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2 cursor-pointer'>
            <li><a href={'/'}>Home</a></li>
            <li><a href={'/'}>About Us</a></li>
            <li><a href={'/contact-us'}>Contact Us</a></li>
            <li><a href={'/'}>Terms</a></li>
            <li><a href={'/'}>Privacy </a></li>
          </ul>
        </div>
        <div className='hidden md:flex flex-col items-start w-full'>
          <h2 className='font-semibold text-white mb-5'>Subscribe to our newsletter</h2>
          <p className='text-sm text-white/80'>Get the latest updates, course launches, and special offers delivered straight to your inbox. Join our learning community today!</p>
          <div className='flex items-center gap-2 pt-4'>
            <input type='email' placeholder='Enter your email' className='border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm' />
            {/* <Button variant={'secondary'}>Subscribe</Button> */}
            <button className='bg-white w-24 h-9 text-black hover:bg-gray-200 text-sm rounded-lg '>Subscribe</button>
          </div>

        </div>

      </div>
      <p className='py-4 text-center text-xs md:text-sm text-white'>© {new Date().getFullYear()} Learnify. All rights reserved.</p>
    </footer>
  )
}

export default Footer