import { createSlice } from "@reduxjs/toolkit";

type UserType = {
    firstName:string;
    lastName:string;
    email:string;
    avatare:string | null
}

const initialState: UserType = {
    avatare:"",
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