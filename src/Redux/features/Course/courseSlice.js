import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: {
        types: "",
    },
};

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        setTypes: (state = initialState, action) => {
            state.filter.types = action.payload;
        },
    },
});

export default courseSlice.reducer;
export const { setTypes } = courseSlice.actions;
