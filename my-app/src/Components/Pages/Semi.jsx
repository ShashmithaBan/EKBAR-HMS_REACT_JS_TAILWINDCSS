import React, { useEffect } from 'react';
import { Budget } from './Rooms/Budget';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomsByType } from '../Store/roomSlice';

export const Semi = () => {
  const dispatch = useDispatch();
  const semi = useSelector((state) => state.room.rooms); 
  const loading = useSelector((state) => state.room.loading);
  const error = useSelector((state) => state.room.error);

  useEffect(() => {
    dispatch(getRoomsByType('Semi')); 
  }, [dispatch]);

  return (
    <div className='xl:mx-64 mx-12 py-10 flex flex-col justify-center items-center'>
      <h1 className="lg:text-4xl text-3xl bg-gradient-to-r from-neutral-200 via-neutral-700 to-neutral-900 text-transparent bg-clip-text font-bold">
        Semi Luxury Rooms
      </h1>
      
      <hr className='border-gray-400 w-3/4 my-4' />

      <div className="rooms flex flex-wrap gap-5 mt-10">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {semi && semi.length > 0 ? (
          semi.map((room, index) => (
            <Budget key={index} room={room} /> 
          ))
        ) : (
          !loading && <p>No rooms available</p>
        )}
      </div>
    </div>
  );
};
