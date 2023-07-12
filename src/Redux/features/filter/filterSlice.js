import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    filterObject: null,
    searchTerm: "",
};

// create slice
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilterObject: (state, action) => {
            state.filterObject = action.payload;
        },
        setSearchTerm: (state = initialState, action) => {
            state.searchTerm = action.payload;
        },
    },
});

export default filterSlice.reducer;
export const { setFilterObject, setSearchTerm } = filterSlice.actions;
