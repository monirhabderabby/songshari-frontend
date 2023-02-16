import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    messages: [],
    // photos: [],
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setUser: (state=initialState, action) => {
            state.user = action.payload;
        },
        allMessage:(state=initialState,action)=>{
            state.messages=action.payload;
        }
        
    },
});

export default chatSlice.reducer;
export const { setUser,allMessage } = chatSlice.actions;
