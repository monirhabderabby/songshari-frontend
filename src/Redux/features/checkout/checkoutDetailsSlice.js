import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    billingDetailes: {
        firstName: "fdsf",
        lastName: "fdfd",
        email: "",
    },
};

const checkoutDetailsSlice = createSlice({
    name: "checkoutDetailes",
    initialState,
    reducers: {
        setBillingDetailesInitialState: (state = initialState, action) => {
            state.billingDetailes.firstName = action.payload.firstName;
            state.billingDetailes.lastName = action.payload.lastName;
            state.billingDetailes.email = action.payload.email;
        },
    },
});

export default checkoutDetailsSlice.reducer;
export const { setBillingDetailesInitialState } = checkoutDetailsSlice.actions;
