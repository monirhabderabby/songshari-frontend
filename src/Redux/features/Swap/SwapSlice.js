import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMatched: false,
    matchedProfile: null,
};

const swapSlice = createSlice({
    name: "swap",
    initialState,
    reducers: {
        setSuperMatched: (state = initialState, action) => {
            state.isMatched = true;
            state.matchedProfile = action.payload;
        },
        removeSwap: (state = initialState, action) => {
            state.isMatched = false;
            state.matchedProfile = null;
        },
    },
});

export default swapSlice.reducer;
export const { setSuperMatched, removeSwap } = swapSlice.actions;
