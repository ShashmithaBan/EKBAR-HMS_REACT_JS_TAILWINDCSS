import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'http://localhost:5454';

export const login = createAsyncThunk(
  'user/login',
  async (formValues, thunkAPI) => {
    try {
      const response = await axios.post(`${API}/api/auth/login`, formValues);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Failed to log in');
    }
  }
);
export const logout = createAsyncThunk(
    'user/logout',
    async () => {
      try {
        await axios.post(`${API}/api/auth/logout`);
        return; 
      } catch (error) {
        console.error('Logout failed:', error);
        throw error;
      }
    }
  );

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    error: '',
    token: null,
    message: '',
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token; 
        state.message = action.payload.message; 
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to log in';
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.token = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Logout failed';
      });
  },
});

export const { } = userSlice.actions;

export default userSlice.reducer;
