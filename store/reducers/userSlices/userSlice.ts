import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    avatre:"",
    firstName:"",
    lastName:"",
    email:"",
}


const useSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

    }
})