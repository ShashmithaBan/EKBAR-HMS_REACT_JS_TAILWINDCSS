// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import roomReducer from './Components/Store/roomSlice'; // Correct import path
import bookRoomReducer from './Components/Store/bookRoomSlice'; // Import any other reducers if needed
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  room: roomReducer,
  bookedroom: bookRoomReducer,
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
