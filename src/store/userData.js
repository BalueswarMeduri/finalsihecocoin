import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            let temp = action.payload
            if(temp){
            state.userData = temp
            }
        },
        updateaccount : (state , action) =>{
            state.userData.fullName = action.payload.fullName;
            state.userData.email = action.payload.email;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout , deleteavatar, updateavatar, deletecoverimage, updatecoverimage, updateaccount} = authSlice.actions;

export default authSlice.reducer;
