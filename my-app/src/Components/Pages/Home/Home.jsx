
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
   <section className='rooms mt-20 flex flex-col  justify-center items-center'>
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
   <section className="about my-10 xl:mx-64  mx-12 py-4 flex flex-col justify-center items-center h-screen">
    
    <div className="flex-row hidden md:flex justify-center items-center">
        <div className="bg-[#790e0e54] p-9 lg:h-[250px] xl:h-[280px] space-y-2 flex flex-col justify-center">
        <h2 className=" text-center font-bold text-3xl bg-gradient-to-r from-neutral-300 via-neutral-700 to-black text-transparent bg-clip-text">
        About us
      </h2>
      
     <p className='text-center font-bold'>
     Welcome to EkBar Hotels   
        </p> 
      <p className='text-center'>
Located in the heart of Colombo <b>EkBar Hotels</b> offers a
 blend of luxury and comfort with exceptional service. Since our establishment in 2020, we've been dedicated to
 making every stay memorable.

      </p>
        </div>
        <div className="about-img shadow-lg">
            <img
            src='https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png'
            className='lg:w-[132rem] object-cover  h-[330px] '
            />
        </div>
    </div>
    <div className="flex-row hidden md:flex justify-center items-center">
        
        <div className="about-img shadow-lg">
            <img
            src='https://plus.unsplash.com/premium_photo-1661964326936-831e134bef7d?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png'
            className='  lg:w-[40rem] object-cover h-[330px] '
            />
        </div>
        <div className="bg-[#ffca005c] lg:w-[40rem] lg:h-[250px]  xl:h-[280px] space-y-2 flex flex-col justify-center">
        <h2 className=" text-center font-bold text-3xl bg-gradient-to-r from-neutral-300 via-neutral-700 to-black text-transparent bg-clip-text">
        Our Amenities
      </h2>
      <ul className='text-center text-sm'>
      <li><b>Comfortable Rooms & Suites:</b> Modern amenities with local charm.</li>
      <li><b>Dining:</b> Delicious local and international cuisine.</li>
      <li><b>Recreation:</b> Fitness center, spa, and pool.</li>
      <li><b>Business Services</b>: Conference rooms and high-speed internet.</li>

 



      </ul>
        </div>
    </div>
    <div className="mobile md:hidden">
        <h1 className="text-4xl bg-gradient-to-r from-neutral-300 via-neutral-700 to-black text-transparent bg-clip-text font-bold">About us</h1>
        <div className="about-img shadow-lg">
            <img
            src='https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png'
            className='h-[100rem] object-cover'
            />
        </div>
    </div>
   </section>
    </div>
   
  )
}
