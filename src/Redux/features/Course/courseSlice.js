import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: {
        types: "",
        skillLevel: "",
    },
};

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        setTypes: (state = initialState, action) => {
            if (state.filter.types.includes(action.payload)) {
                state.filter.types = "";
                return;
            }
            state.filter.types = action.payload;
        },
        setSkillLevel: (state = initialState, action) => {
            if (state.filter.skillLevel.includes(action.payload)) {
                state.filter.skillLevel = "";
                return;
            }
            state.filter.skillLevel = action.payload;
        },
    },
});

export default courseSlice.reducer;
export const { setTypes, setSkillLevel } = courseSlice.actions;
