import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    billingDetailes: {
        firstName: "fdsf",
        lastName: "fdfd",
        email: "",
        streetAddress1: "",
        streetAddress2: "",
        state: "",
        city: "",
        postalCode: "",
        phone: "",
    },
    shippingDetailes: {
        firstName: "fdsf",
        lastName: "fdfd",
        email: "",
        streetAddress1: "",
        streetAddress2: "",
        state: "",
        city: "",
        postalCode: "",
        phone: "",
    },
    billingSummary: {
        subTotal: 0,
        discount: 0,
        shipping: 0,
        tax: 0,
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
        setBillingFirstName: (state = initialState, action) => {
            state.billingDetailes.firstName = action.payload;
        },
        setBillingDetailes: (state = initialState, action) => {
            state.billingDetailes = action.payload;
        },
        setShippingDetailes: (state = initialState, action) => {
            state.shippingDetailes = action.payload;
        },
        checkBillingAndShoppingareSame: (state = initialState, action) => {
            state.shippingDetailes.firstName = state.billingDetailes.firstName;
            state.shippingDetailes.lastName = state.billingDetailes.lastName;
            state.shippingDetailes.email = state.billingDetailes.email;
            state.shippingDetailes.streetAddress1 = state.billingDetailes.streetAddress1;
            state.shippingDetailes.streetAddress2 = state.billingDetailes.streetAddress2;
            state.shippingDetailes.state = state.billingDetailes.state;
            state.shippingDetailes.city = state.billingDetailes.city;
            state.shippingDetailes.postalCode = state.billingDetailes.postalCode;
            state.shippingDetailes.phone = state.billingDetailes.phone;
        },
        clearShippingDetailes: (state = initialState) => {
            state.shippingDetailes.firstName = "";
            state.shippingDetailes.lastName = "";
            state.shippingDetailes.email = "";
            state.shippingDetailes.streetAddress1 = "";
            state.shippingDetailes.streetAddress2 = "";
            state.shippingDetailes.state = "";
            state.shippingDetailes.city = "";
            state.shippingDetailes.postalCode = "";
            state.shippingDetailes.phone = "";
        },
        addSubTotal: (state = initialState, action) => {
            state.billingSummary.subTotal += action.payload;
        },
    },
});

export default checkoutDetailsSlice.reducer;
export const {
    setBillingDetailesInitialState,
    setBillingFirstName,
    setBillingDetailes,
    setShippingDetailes,
    checkBillingAndShoppingareSame,
    clearShippingDetailes,
    addSubTotal,
} = checkoutDetailsSlice.actions;
