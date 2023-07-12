import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    searchTerm: "",
};

// create slice
const findPartnerSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFindPartnerSearchTerm: (state = initialState, action) => {
            state.searchTerm = action.payload;
        },
        resetSearchTerm: (state = initialState, action) => {
            state.searchTerm = "";
        },
    },
});

export default findPartnerSlice.reducer;
export const { setFindPartnerSearchTerm, resetSearchTerm } = findPartnerSlice.actions;
