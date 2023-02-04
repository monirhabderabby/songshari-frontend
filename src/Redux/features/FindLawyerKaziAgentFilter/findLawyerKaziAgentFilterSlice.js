import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    lawyer: {
        searchTerm: "",
    },
    kazi: {
        searchTerm: "",
    },
    agent: {
        searchTerm: "",
    },
};

// create slice
const findLawyerKaziAgentFilterSlice = createSlice({
    name: "findLawyerKaziAgentFilterSlice",
    initialState,
    reducers: {
        setLawyerSearchTerm: (state = initialState, action) => {
            state.lawyer.searchTerm = action.payload;
        },
    },
});

export default findLawyerKaziAgentFilterSlice.reducer;
export const { setLawyerSearchTerm } = findLawyerKaziAgentFilterSlice.actions;
