
import React from 'react'
import { Swipper } from './Swipper'
import { BTTracker } from './BTTracker'
import { About } from './About'
import { VIP } from '../Rooms/VIP'
import { Budget } from '../Rooms/Budget'




export const Home = () => {
    
  return (
    <div className="">
 <section className='flex flex-col items-center justify-center'>
       
       <div className="hidden md:flex container mt-10 ">
           <Swipper/>
       </div>
       <div className="md:hidden flex flex-col my-10 xl:mx-64 mx-12 py-4 ">
           <p className='text-3xl text-center font-bold underline my-3'>Welcome to Ekbar Hotels</p>
           <h4 className='text-lg text-center font-semibold my-1'>Discover Luxury and Comfort in the Heart of Colombo</h4>
           <p className='text-md text-center text-gray-500'>Experience unmatched hospitality and a memorable stay at <span className='font-bold'>Ekbar</span>. Book your stay with us today and indulge in the finest amenities, exquisite dining, and unparalleled service.</p>
       </div>
       
       <div className="hero-bottom flex md:flex-row flex-col gap-5 items-center">
      <BTTracker/>
      <About/>
       </div>
   </section>
   <section className='rooms mt-10'>
    <div className="bg-black">
     <div className="xl:mx-64 mx-12 py-10 flex flex-col justify-center items-center">
        <h2 className="font-bold text-3xl bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-700 text-transparent bg-clip-text">
            Our VIP Rooms
        </h2>
        <div className="rooms my-10 flex flex-wrap gap-7 justify-center items-center">
            {
                [1,1,1].map((item)=><VIP/>)
            }
            
        </div>
     </div>
    </div>
    <div className="xl:mx-64 mx-12 py-10 flex flex-col justify-center items-center">
        <h2 className="font-bold text-3xl bg-gradient-to-r from-neutral-300 via-neutral-700 to-black text-transparent bg-clip-text">
            Our Budget Rooms
        </h2>
        <div className="rooms my-10 flex flex-wrap gap-7 justify-center items-center">
            {
                [1,1,1].map((item)=><Budget/>)
            }
            
        </div>
     </div>

   </section>
    </div>
   
  )
}
