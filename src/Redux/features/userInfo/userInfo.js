import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null,
    photos: [],
};

const userInfoSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        loadUserData: (state, action) => {
            state.userInfo = action.payload;
        },
        loadPhotos: (state = initialState, action) => {
            state.photos = action.payload;
        },
        setUpdatePhotos: (state = initialState, action) => {
            action.payload.map(photo => {
                return state.photos.unshift(photo);
            });
        },
    },
});

export default userInfoSlice.reducer;
export const { loadUserData, loadPhotos, setUpdatePhotos } = userInfoSlice.actions;
