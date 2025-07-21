import { assets, dummyTestimonial, testimonials } from '../../assets/assets'
import React from 'react'
import { AnimatedTestimonials } from '../ui/animated-testimonials'

const TestimonialSection = () => {
  return (
    <div className='pb-14 px-8 md:px-0'>
      <h2 className='text-3xl font-bold text-gray-800'>Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3'>Hear from our learners as they share their journeys of transformations, success, and how our <br /> platform has made a difference in their lives.</p>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true}/>
    </div>
  )
}

export default TestimonialSection