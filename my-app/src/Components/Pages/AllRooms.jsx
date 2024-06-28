
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getrooms } from '../Store/roomSlice';
import { Rooms } from './Rooms/Rooms';

export const AllRooms = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.room.rooms);
  const loading = useSelector((state) => state.room.loading);
  const error = useSelector((state) => state.room.error);

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
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {rooms && rooms.length > 0 ? (
          rooms.map((room, index) => (
            <Rooms key={index} room={room} />
          ))
        ) : (
          !loading && <p>No rooms available</p>
        )}
      </div>
    </div>
  );
}
