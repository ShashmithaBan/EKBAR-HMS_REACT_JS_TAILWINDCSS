// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signin } from './Components/Pages/Auth/Signin';
import Navbar from './Components/Navbar/Navbar';
import { Home } from './Components/Pages/Home/Home';
import { Semi } from './Components/Pages/Semi';
import { Luxury } from './Components/Pages/Luxury';
import { AddBooking } from './Components/Pages/AddBooking/AddBooking';
import { AddRoom } from './Components/Pages/AddRoom/AddRoom';
import { AllRooms } from './Components/Pages/AllRooms'; // Ensure correct path and filename
import { Dashboard } from './Components/Pages/Dashboard/Dashboard';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin />} />
        <Route path='/addroom' element={<AddRoom />} />
        <Route path='/rooms' element={<AllRooms />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route
          path='*'
          element={
            <>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/semi' element={<Semi />} />
                <Route path='/luxury' element={<Luxury />} />
                <Route path='/addbooking/:id' element={<AddBooking />} />
                <Route path='/addbooking' element={<AddBooking />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
