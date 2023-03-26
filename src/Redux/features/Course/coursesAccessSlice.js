import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentVideo: null,
};

const courseAccessSlice = createSlice({
    name: "courseAccess",
    initialState,
    reducers: {
        setCurrentVideo: (state = initialState, action) => {
            state.currentVideo = action.payload;
        },
    },
});

export default courseAccessSlice.reducer;
export const { setCurrentVideo } = courseAccessSlice.actions;
