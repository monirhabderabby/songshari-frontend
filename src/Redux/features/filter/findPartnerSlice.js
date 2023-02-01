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
    },
});

export default findPartnerSlice.reducer;
export const { setFindPartnerSearchTerm } = findPartnerSlice.actions;
