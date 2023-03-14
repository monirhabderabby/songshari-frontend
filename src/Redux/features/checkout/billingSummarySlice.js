import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    billingSummary: {
        subTotal: 0,
        discount: 0,
        shipping: 100,
        tax: 0,
    },
};

const billingSummarySlice = createSlice({
    name: "billingSummary",
    initialState,
    reducers: {
        initialSubTotal: (state = initialState, action) => {
            state.billingSummary.subTotal = action.payload;
        },
        increaseSubTotal: (state = initialState, action) => {
            state.billingSummary.subTotal += action.payload;
        },
        decreaseSubTotal: (state = initialState, action) => {
            state.billingSummary.subTotal -= action.payload;
        },
        setTax: (state = initialState, action) => {
            state.billingSummary.tax = action.payload;
        },
        setDiscount: (state = initialState, action) => {
            state.billingSummary.discount = action.payload;
        },
        setSubtotal: (state = initialState, action) => {
            state.billingSummary.subTotal = action.payload;
        },
    },
});

export default billingSummarySlice.reducer;
export const { initialSubTotal, increaseSubTotal, decreaseSubTotal, setTax, setDiscount, setSubtotal } = billingSummarySlice.actions;
