import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'http://localhost:5454';

export const addBooking = createAsyncThunk(
  'api/bookings',
  async (roomData, thunkAPI) => {
    try {
      const response = await axios.post(`${API}/api/bookings`, roomData);
      console.log(response.data.bookingConfirmationCode);
      return response.data;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getRoomByBCode = createAsyncThunk(
  'api/bookings/bcodereader',
  async (code, thunkAPI) => {
    try {

      const response = await axios.get(`${API}/api/bookings/user/get?code=${code}`);
 
      return response.data;
     
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const bookRoomSlice = createSlice({
  name: 'bookedroom',
  initialState: {
    loading: false,
    bookedrooms: [],
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBooking.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(addBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.bookedrooms.push(action.payload);
      })
      .addCase(addBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to add booking';
      })
      .addCase(getRoomByBCode.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getRoomByBCode.fulfilled, (state, action) => {
        state.loading = false;
        state.bookedrooms.push(action.payload);
      })
      .addCase(getRoomByBCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to get booking';
      });
  },
});

export default bookRoomSlice.reducer;
