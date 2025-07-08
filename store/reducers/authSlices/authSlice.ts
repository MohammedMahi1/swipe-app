import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API_AXIOS } from "api/api";

const asyncLogin = createAsyncThunk("auth/login",async(data,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try {
        const res = await API_AXIOS.post("/user/login",data);
        return res
    } catch (error) {
        return rejectWithValue(error)
    }
})




const initialState = {
        token: null,
        isAuthenticated: false,
        loading: false,
        error: null,
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(asyncLogin.pending,(state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(asyncLogin.fulfilled,(state,{payload})=>{
            state.loading = false;
            state.isAuthenticated = true;
            console.log(payload);
            
            // state.token = payload;
        });
        builder.addCase(asyncLogin.rejected,(state,{payload}:PayloadAction<any>)=>{
            state.loading = false;
            state.error = payload;
            state.isAuthenticated = false;
            console.log(payload);
            
        });
    }
})