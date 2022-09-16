import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState:{
        user: null
    },
    reducers:{
        SET_USER: (state, action)=>{
            state.user = action.payload
        }
    }
})

export const {SET_USER} = userSlice.actions;
export const selecUser = (state)=> state.user
export default userSlice.reducer;