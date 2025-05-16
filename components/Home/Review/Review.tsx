"use client";
import React from 'react'

const Review = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[90%] md:w-[80%] mx-auto'>
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500 uppercase">
              Testimonials
            </h1>
            <h2 className="text-xl sm:text-3xl md:text-4xl mt-1 font-bold">
              Trusted By Industry Leaders Clients Testimonial
            </h2>
          </div>
          <div className="lg:ml-auto">
            <a
              href="#"
              className="w-full py-4  text-base sm:text-lg text-center text-white transition-colors font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-900 ease px-9 md:w-auto"
            >
              All Reviews
            </a>
          </div>
        </div>
        {/* Sliders */}
        <div className='mt-16'></div>
      </div>
    </div>
  )
}

export default Review;
