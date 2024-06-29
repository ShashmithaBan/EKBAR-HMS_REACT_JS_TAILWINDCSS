import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const VIP = ({room}) => {
  const navigate = useNavigate();
  if (!room) {
    return null; 
  }
  return (
    <div className='bg-white rounded-3xl w-[370px] h-[290px] shadow-lg'>
     <img src={room.images[0]} 
     className='object-cover w-full h-[150px] rounded-tr-3xl rounded-tl-3xl'/>
     <div className="p-3">
     <h2 className='text-xl font-bold'>{room.roomType} Room {room.id}</h2>
     <p className='text-xs text-neutral-400'>
        This is A VIP room consist with all the luxury specifications .and most suitable for the calm rich people
     </p>
     <Button onClick={()=>navigate(`/addbooking/${room.id}`)} fullwidth variant='outlined' className='relative translate-x-48 translate-y-5' color='success'>Add Bboking</Button>
     </div>
     
    </div>
  )
}
