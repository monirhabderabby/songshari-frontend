import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    billingSummary: {
        subTotal: 0,
        discount: 0,
        shipping: 100,
        tax: 0,
        isCouponApplied: false,
    },
    orderItems: null,
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
        resetBillingSummaryState: (state = initialState, action) => {
            state.billingSummary.subTotal = 0;
            state.billingSummary.discount = 0;
            state.billingSummary.shipping = 0;
            state.billingSummary.tax = 0;
            state.billingSummary.isCouponApplied = false;
            state.orderItems = null;
        },
        setCouponApplied: (state = initialState, action) => {
            state.billingSummary.isCouponApplied = true;
        },
        setInitialOrderItems: (state = initialState, action) => {
            state.orderItems = action.payload;
        },
        increaseQuantity: (state = initialState, action) => {
            const { orderItems } = state;
            const updatedOrderItems = orderItems?.map(item => {
                if (item.product === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });

            return {
                ...state,
                orderItems: updatedOrderItems,
            };
        },
    },
});

export default billingSummarySlice.reducer;
export const {
    initialSubTotal,
    increaseSubTotal,
    decreaseSubTotal,
    setTax,
    setDiscount,
    setSubtotal,
    resetBillingSummaryState,
    setCouponApplied,
    setInitialOrderItems,
    increaseQuantity,
} = billingSummarySlice.actions;
