import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userAsync = createAsyncThunk("async/user",async(_,thunkAPI)=>{
    const {getState} = thunkAPI
    try {
        const  token = getState()
        // const res = await API_AXIOS.get("/user")
        console.log(token);
        
    } catch (error){
        console.log(error);
        
    }
})

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

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{  
        builder.addCase(userAsync.fulfilled,(state,{payload})=>{
            return payload
        })
    }
})

export default userSlice