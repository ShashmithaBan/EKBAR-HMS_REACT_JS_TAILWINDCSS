import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signin } from './Components/Pages/Auth/Signin';
import Navbar from './Components/Navbar/Navbar';
import { Home } from './Components/Pages/Home/Home';
import { Semi } from './Components/Pages/Semi';
import {Luxury} from './Components/Pages/Luxury';
import { AddBooking } from './Components/Pages/AddBooking';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/signin'
          element={<Signin/>}
        />
        <Route
          path='*'
          element={
            <>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/semi' element={<Semi />} />
                <Route path='/luxury' element={<Luxury />} />
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
