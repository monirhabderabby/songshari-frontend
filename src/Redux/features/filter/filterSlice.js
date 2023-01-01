import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    filterObject: null,
};

// create slice
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilterObject: (state, action) => {
            state.filterObject = action.payload;
        },
    },
});

export default filterSlice.reducer;
export const { setFilterObject } = filterSlice.actions;
