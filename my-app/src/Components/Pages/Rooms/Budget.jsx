import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Budget = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-white rounded-3xl w-[370px] h-[290px] shadow-lg'>
    <img src='https://images.unsplash.com/photo-1521783988139-89397d761dce?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png'
    className='object-cover w-full h-[150px] rounded-tr-3xl rounded-tl-3xl'/>
    <div className="p-3">
    <h2 className='text-xl font-bold'>Room 100</h2>
    <p className='text-xs text-neutral-400'>
       This is A Budget friendly room consist with all the luxury specifications .and most suitable for the calm people.
    </p>
    <Button onClick={()=>navigate('/addbooking')} fullwidth variant='outlined' className='relative translate-x-48 translate-y-5' color='success'>Add Bboking</Button>
    </div>
    </div>
  )
}
