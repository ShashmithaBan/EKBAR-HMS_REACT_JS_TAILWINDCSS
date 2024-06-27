import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const roomSlice = createSlice({
    name:'room',
    initialState:{
        loading:false,
        room:[],
        error:'',
    },
    reducers:{
        addRoom()
    }
})