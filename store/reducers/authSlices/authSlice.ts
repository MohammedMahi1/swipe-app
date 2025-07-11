import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API_AXIOS } from "api/api";
import { AxiosError } from "axios";

export const asyncLogin = createAsyncThunk("auth/login", async (data: object, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await API_AXIOS.post("user/login", data)
        console.log("nnjjnjnk");
        return res.data
    } catch (error) {
        if (error instanceof AxiosError) {
            return rejectWithValue(error.response?.data)
        }
        return rejectWithValue(error)

    }
})


export const asyncCreateAcc = createAsyncThunk("auth/create", async (data: object, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await API_AXIOS.post("user/create", data)
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
    isAuthenticated: true,
    loading: false,
    error: null,

}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(asyncCreateAcc.fulfilled,(state,{payload})=>{
            state.loading = false
            console.log(payload.message);
        })


        // Login auth asynThunk
        builder.addCase(asyncLogin.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(asyncLogin.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.token = payload;
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