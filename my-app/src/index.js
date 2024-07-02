// index.js
import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import roomReducer from './Components/Store/roomSlice'; 
import bookRoomReducer from './Components/Store/bookRoomSlice'; 
import userReducer from './Components/Store/userSlice'; 
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  room: roomReducer,
  bookedroom: bookRoomReducer,
  user:userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
