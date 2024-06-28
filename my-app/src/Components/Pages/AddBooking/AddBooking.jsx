import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { CreateBooking } from './CreateBooking';
import { useParams } from 'react-router-dom';

export const AddBooking = () => {
  const { id } = useParams();
  const [text] = useTypewriter({
    words: [
      ' We look forward to hosting you.',
      ' We look forward to hosting you.',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='xl:mx-64 mx-12 py-10 flex flex-col justify-center items-center'>
      <h1 className="lg:text-4xl text-3xl bg-gradient-to-r from-neutral-200 via-neutral-700 to-neutral-900 text-transparent bg-clip-text font-bold text-center">
      Welcome to EkBar Hotel's Online Booking System!
      </h1>
      <p className="text-lg mt-4 font-mono text-md text-center">
      Please fill in the details below to make your reservation.<br className='md:hidden'/>
        {text}
        <span className='text-yellow-500'>
        <Cursor />
        </span>
        
      </p>
      <hr className='border-gray-400 w-3/4 my-4' />
      <div className="">
        <CreateBooking id={id}/>
      </div>
    </div> 
  );
};


