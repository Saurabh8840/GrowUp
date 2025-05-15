import React from 'react'
import schdeuleImage from "../assets/stats.webp"
import { FaArrowRightLong } from "react-icons/fa6";


const ScheduleSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'> 
            {/* left */}
            <div className='md:w-1/2 w-full'>
                <img src={schdeuleImage} alt="schdeule image" className='w-full h-auto hover:' />
            </div>

            {/* right */}
            <div className='md:w-1/2 w-full'>
               <p className='text-orange-500 font-semibold'>SCHEDULE</p>
               <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6'>Streamline your Business <br />
                   With Smart Scheduling Solution
                </h2>

                <p className='text-gray-600 mb-8 '>Take control of your time and boost productivity with our intelligent schdeuling system.
                    Automate appointments, manage team availability, and deliver exceptional customer experiences
                    through seamless calender management.
                </p>

                <a href="" className='text-blue-500 hover:text-blue-700 hover:scale-[1.02] font-semibold flex items-center gap-2 hover:gap-5 transition-all'>Explore schdeuling features 
                    <FaArrowRightLong  className='size-8 '/>
                </a>
                



            </div>

        </div>
    </section>
  )
}

export default ScheduleSection
