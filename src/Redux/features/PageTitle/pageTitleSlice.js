import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    title: "",
};

// create slice
const pageTitleSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setTitle: (state = initialState, action) => {
            state.title = action.payload;
        },
    },
});

export default pageTitleSlice.reducer;
export const { setTitle } = pageTitleSlice.actions;
