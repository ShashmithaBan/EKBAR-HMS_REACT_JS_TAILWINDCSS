import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { Semi } from './Components/Pages/Semi';
import {Luxury} from './Components/Pages/Luxury'
import {AddBooking} from './Components/Pages/AddBooking'
import { Home } from './Components/Pages/Home';

function App() {
  return (
    <div className="xl:mx-64 mx-12 py-4 font-mono">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/semi' element={<Semi />} />
          <Route path='/luxury' element={<Luxury />} />
          <Route path='/addbooking' element={<AddBooking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
