import { Divider, Drawer } from '@mui/material'
import React from 'react'
import {Budget} from './Rooms/Budget'

export const Semi = () => {
  
  return (
    <div className='xl:mx-64 mx-12 py-10 flex flex-col justify-center items-center'>
       <h1 className="lg:text-4xl text-3xl  bg-gradient-to-r from-neutral-200 via-neutral-700 to-neutral-900 text-transparent bg-clip-text font-bold">
        Semi Luxury Rooms
       </h1>
       
       <hr className='border-gray-400 w-3/4 my-4' />
       <div className="rooms flex flex-wrap gap-5 mt-10">
        {
          [1,1,1,1,1,1,1,1,1,1].map((item)=><Budget/>
          )
        }
       </div>
    </div>
  )
}
