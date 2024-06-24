import React from 'react'

export const Budget = () => {
  return (
    <div className='bg-white rounded-3xl w-[370px] h-[250px] shadow-lg'>
    <img src='https://images.unsplash.com/photo-1521783988139-89397d761dce?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png'
    className='object-cover w-full h-[150px] rounded-tr-3xl rounded-tl-3xl'/>
    <div className="p-3">
    <h2 className='text-xl font-bold'>Room 100</h2>
    <p className='text-xs text-neutral-400'>
       This is A Budget friendly room consist with all the luxury specifications .and most suitable for the calm people.
    </p>
    </div>
    </div>
  )
}
