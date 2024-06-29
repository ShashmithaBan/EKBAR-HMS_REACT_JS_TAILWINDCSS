import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getrooms } from "../Store/roomSlice";
import { Rooms } from "../Pages/Rooms/Rooms"

export const AllRooms = () => {
  const dispatch = useDispatch();
  const room = useSelector(state => state.room.rooms);
  const loading = useSelector(state => state.room.loading);
  const error = useSelector(state => state.room.error);

console.log('...rooms' , room)


  useEffect(() => {
    dispatch(getrooms());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='xl:mx-64 mx-12 py-10 flex flex-col justify-center items-center'>
      <h1 className="lg:text-4xl text-3xl bg-gradient-to-r from-neutral-200 via-neutral-700 to-neutral-900 text-transparent bg-clip-text font-bold">
        All Rooms
      </h1>

      <hr className='border-gray-400 w-3/4 my-4' />
      <div className="rooms flex flex-wrap gap-5 mt-10">
        {Array.isArray(room) && room.length > 0 ? (
          room.map((singleRoom, index) => (
            <Rooms key={index} room={singleRoom} />
          ))
        ) : (
          <p>No rooms available</p>
        )}
      </div>
    </div>
  );
};
