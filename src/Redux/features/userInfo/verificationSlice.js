import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVerified: false,
};

const verificationSlice = createSlice({
    name: "verification",
    initialState,
    reducers: {
        loadInitialverificationData: (state = initialState, action) => {
            state.isVerified = action.payload;
        },
        removeVerificationData: (state = initialState, action) => {
            state.isVerified = false;
        },
        setVerificationData: (state = initialState, action) => {
            state.isVerified = action.payload;
        },
    },
});

export default verificationSlice.reducer;
export const { loadInitialverificationData, removeVerificationData, setVerificationData } = verificationSlice.actions;
