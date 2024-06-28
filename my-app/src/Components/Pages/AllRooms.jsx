import React, { useEffect } from 'react';
import { Rooms } from './Rooms/Rooms';
import { useDispatch, useSelector } from 'react-redux';
import { getrooms } from '../Store/roomSlice';

export const AllRooms = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => {
    console.log("state.." , state.room.rooms); // Adjust this according to your state structure
    return state.room.rooms; // Make sure to return the rooms array
  });

  useEffect(() => {
    dispatch(getrooms());
  }, [dispatch]);

  return (
    <div className='xl:mx-64 mx-12 py-10 flex flex-col justify-center items-center'>
      <h1 className="lg:text-4xl text-3xl bg-gradient-to-r from-neutral-200 via-neutral-700 to-neutral-900 text-transparent bg-clip-text font-bold">
        All Rooms
      </h1>

      <hr className='border-gray-400 w-3/4 my-4' />
      <div className="rooms flex flex-wrap gap-5 mt-10">
        {rooms && rooms.length > 0 ? (
          rooms.map((room, index) => (
            <Rooms key={index} room={room} />
          ))
        ) : (
          <p>No rooms available</p>
        )}
      </div>
    </div>
  );
};
