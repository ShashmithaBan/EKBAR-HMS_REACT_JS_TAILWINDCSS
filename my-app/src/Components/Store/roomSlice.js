// roomSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'http://localhost:5454';

export const addRoom = createAsyncThunk(
  'room/addRoom',
  async (roomData, thunkAPI) => {
    try {
      const response = await axios.post(`${API}/api/rooms/add/${roomData.pin}`, roomData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getrooms = createAsyncThunk(
  'room/getRoom',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${API}/api/rooms`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const getRoomsByType = createAsyncThunk(
  'room/getRoomByType',
  async(keyword,thunkAPI)=>{
    try {
      const response = await axios.get(`${API}/api/rooms/type/available?type=${keyword}`)
      return response.data;
    } catch (error) {

       return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
)

export const roomSlice = createSlice({
  name: 'room',
  initialState: {
    loading: false,
    rooms: [],
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addRoom.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(addRoom.fulfilled, (state, action) => {
        state.loading = false;
        state.rooms.push(action.payload);
      })
      .addCase(addRoom.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to add room';
      })
      .addCase(getrooms.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getrooms.fulfilled, (state, action) => {
        state.loading = false;
        state.rooms = action.payload;
      })
      .addCase(getrooms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch rooms';
      })
      .addCase(getRoomsByType.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getRoomsByType.fulfilled, (state, action) => {
        state.loading = false;
        state.rooms = action.payload;
      })
      .addCase(getRoomsByType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch rooms by Type';
      });
  },
});

export const { } = roomSlice.actions; // Add any actions if needed

export default roomSlice.reducer;
