import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: null,
    lastName: null,
    phone: null,
    email: null,
};

const courseCheckoutSlice = createSlice({
    name: "courseCheckout",
    initialState,
    reducers: {
        setInitialCourseCheckoutData: (state = initialState, action) => {
            state.firstName = action.payload.firstName || null;
            state.lastName = action.payload.lastName || null;
            state.phone = action.payload.phone || null;
            state.email = action.payload.email || null;
        },
        setCourseCheckoutData: (state = initialState, action) => {
            state.firstName = action.payload.firstName || state.firstName;
            state.lastName = action.payload.lastName || state.lastName;
            state.phone = action.payload.phone || state.phone;
            state.email = action.payload.email || state.email;
        },
    },
});

export default courseCheckoutSlice.reducer;
export const { setInitialCourseCheckoutData, setCourseCheckoutData } = courseCheckoutSlice.actions;
