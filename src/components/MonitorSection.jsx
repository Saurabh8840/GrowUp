import React from 'react'
import monitorCardImg from "../assets/monitor-card.webp"
import { IoIosArrowRoundForward } from 'react-icons/io';



const MonitorSection = () => {
  return (
    <div>
       <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
               <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'> 
                   {/* left */}
                     <div className='md:w-1/2 w-full'>
                      <p className='text-green-500 font-semibold'>MONITOR</p>
                      <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6 md:w-4/5' >Introducing best mobile carousels
                       </h2>
       
                       <p className='text-gray-600 mb-8 '>Before the ship is really back. Round, round ,all around the world 
                        Round, all around the world. Round, all around the world. Round, all around the world.
                        
                       </p>
       
                       <a href="" className='text-blue-500 hover:text-blue-700 hover:scale-[1.02] font-semibold flex items-center gap-2 hover:gap-5 transition-all'>Learn more about monitoring 
                           <IoIosArrowRoundForward  className='size-8 '/>
                       </a>
                       
       
       
       
                   </div>

                   
       
                   {/* right */}
                   <div className='md:w-1/2 w-full'>
                       <img src={monitorCardImg} alt="schdeule image" className='w-full h-auto hover:' />
                   </div>
                 
       
               </div>
           </section>
      
    </div>
  )
}

export default MonitorSection
