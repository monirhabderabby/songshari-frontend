import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    lookingFor: "",
    for: "",
    age: [],
    profession: "",
    religion: "",
    homeTown: "",
    currentLocation: "",
    education: "",
};

// create slice
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.lookingFor = action.payload.lookingFor;
            state.for = action.payload.for;
            state.age = action.payload.age;
            state.profession = action.payload.profession;
            state.religion = action.payload.religion;
            state.homeTown = action.payload.homeTown;
            state.currentLocation = action.payload.currentLocation;
            state.education = action.payload.education;
        },
    },
});

export default filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
