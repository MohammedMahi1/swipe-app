import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API_AXIOS } from "api/api";

export const userAsync = createAsyncThunk("async/user",async(_,thunkAPI)=>{
    const {getState,rejectWithValue} = thunkAPI
    try {
        const  token = getState().auth.token
        const res = await API_AXIOS.get("/user",{
            headers:{
                Authorization:"Bearer 32|5eN7m1jVC8fX4dkPmh77vuPkctCIraB6sTugkV6If0fedf9a"
            }
        })
        return res.data.user
        
    } catch (error){
        return rejectWithValue(error)
    }
})

type UserType = {
    firstName:string;
    lastName:string;
    email:string;
    avatare:string | null,
    loading:boolean,
    error:null | string
}

const initialState: UserType = {
    avatare:"",
    firstName:"",
    lastName:"",
    email:"",
    loading:false,
    error:null
} 

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{  
        builder.addCase(userAsync.pending,(state,_)=>{
            state.loading = true
        })
        builder.addCase(userAsync.fulfilled,(state,{payload}:PayloadAction<any>)=>{
            state.firstName = payload.first_name
            
        })
        builder.addCase(userAsync.rejected,(state,{payload})=>{
            state.loading = false
            // state.error = payload
        })
    }
})

export default userSlice