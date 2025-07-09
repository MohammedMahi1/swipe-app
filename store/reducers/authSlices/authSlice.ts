import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API_AXIOS } from "api/api";
import axios, { AxiosError } from "axios";

export const asyncLogin = createAsyncThunk("auth/login", async (data: object, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        console.log("dfvdfvdfv");

        const res = await axios.post("http://192.168.1.176:8000/api/user/login", data)
        return res.data
    } catch (error) {
        if (error instanceof AxiosError) {
            return rejectWithValue(error.response?.data)
        }
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
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(asyncLogin.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(asyncLogin.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.token = payload;
            console.log(payload);
        });

        builder.addCase(asyncLogin.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading = false;
            state.error = payload;
            state.isAuthenticated = false;
            console.log(payload);
            state.error = payload
        });
    }
})

export default authSlice