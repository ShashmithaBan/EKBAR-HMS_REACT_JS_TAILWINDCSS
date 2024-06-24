import React from 'react'

export const VIP = () => {
  return (
    <div className='bg-white rounded-3xl w-[370px] h-[250px] shadow-lg'>
     <img src='https://images.unsplash.com/photo-1565031491910-e57fac031c41?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png' 
     className='object-cover w-full h-[150px] rounded-tr-3xl rounded-tl-3xl'/>
     <div className="p-3">
     <h2 className='text-xl font-bold'>VIP Room 100</h2>
     <p className='text-xs text-neutral-400'>
        This is A VIP room consist with all the luxury specifications .and most suitable for the calm rich people
     </p>
     </div>
     
    </div>
  )
}
