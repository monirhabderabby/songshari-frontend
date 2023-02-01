import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    // photos: [],
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setUser: (state=initialState, action) => {
            state.user = action.payload;
        },
        
    },
});

export default chatSlice.reducer;
export const { setUser } = chatSlice.actions;
