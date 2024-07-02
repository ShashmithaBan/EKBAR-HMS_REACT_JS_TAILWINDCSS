import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../Store/userSlice';
import { MdAddHome } from 'react-icons/md';
import { PiBuildingApartmentFill } from 'react-icons/pi';
import { Link } from '@mui/material';

export const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
       dispatch(logout());
      navigate('/'); 
    } catch (error) {
      console.error('Logout failed:', error);
      
    }
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen font-mono'>
      <h2 className='font-mono md:text-7xl font-bold bg-primary p-2 rounded-lg shadow-lg'>Hi Admin</h2>
      <div className="flex flex-col md:flex-row mt-8 gap-10">
        <Link href='/addroom'>
          <div className="p-2 border-2 border-primary rounded-xl w-[250px] h-[250px] justify-center items-center flex flex-col hover:bg-yellow-100 ease-in-out duration-500 shadow-lg">
            <MdAddHome className='text-9xl text-primary' />
            <p className='text-2xl font-bold text-black'>Add Rooms</p>
          </div>
        </Link>
        <Link href='rooms'>
          <div className="p-2 border-2 border-primary rounded-xl w-[250px] h-[250px] justify-center items-center flex flex-col hover:bg-yellow-100 ease-in-out duration-500 shadow-lg">
            <PiBuildingApartmentFill className='text-9xl text-primary' />
            <p className='text-2xl font-bold text-black'>Rooms</p>
          </div>
        </Link>
      </div>
      <button
        onClick={handleLogout}
        className="mt-8 px-4 py-2 bg-red-500 text-white rounded-md shadow-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};
