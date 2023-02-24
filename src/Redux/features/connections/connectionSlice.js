import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    connectedFriendIds: null,
};

const connectionSlice = createSlice({
    name: "connection",
    initialState,
    reducers: {
        setConnectedFriendIds: (state = initialState, action) => {
            state.connectedFriendIds = action.payload;
        },
    },
});

export default connectionSlice.reducer;
export const { setConnectedFriendIds } = connectionSlice.actions;
