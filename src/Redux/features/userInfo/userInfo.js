import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    userDetails: [],
};

const userInfoSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {},
});

export default userInfoSlice.reducer;
export const { loadUserData } = userInfoSlice.actions;
