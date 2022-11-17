import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null,
};

const userInfoSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        loadUserData: (state, action) => {
            state.userInfo = action.payload;
            state.count = undefined;
        },
    },
});

export default userInfoSlice.reducer;
export const { loadUserData } = userInfoSlice.actions;
