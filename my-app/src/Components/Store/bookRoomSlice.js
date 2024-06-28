import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'http://localhost:5454';

export const addBooking = createAsyncThunk(
  'api/bookings',
  async (roomData, thunkAPI) => {
    try {
      const response = await axios.post(`${API}/api/bookings`, roomData);
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
      });
  },
});

export default bookRoomSlice.reducers;
