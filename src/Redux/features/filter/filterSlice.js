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
        setLookingFor: (state, action) => {
            state.lookingFor = action.payload.lookingFor;
        },
        setfor: (state, action) => {
            state.for = action.payload.for;
        },
        setEducation: (state, action) => {
            state.education = action.payload.education;
        },
        setHomeTown: (state, action) => {
            state.homeTown = action.payload.homeTown;
        },
        setCurrentLocation: (state, action) => {
            state.currentLocation = action.payload.currentLocation;
        },
        setReligion: (state, action) => {
            state.religion = action.payload.religion;
        },
        setProfession: (state, action) => {
            state.profession = action.payload.profession;
        },
        setAge: (state, action) => {
            state.age = action.payload.age;
        },
    },
});

export default filterSlice.reducer;
export const { setfor, setHomeTown, setLookingFor, setEducation, setAge, setCurrentLocation, setReligion, setProfession } = filterSlice.actions;
