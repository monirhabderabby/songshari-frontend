import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pendingOrder: {
        totalData: 0,
    },
    runningOrder: {
        totalData: 0,
        currentOrderIdFOrCancle: null,
    },
};

const orderSlice = createSlice({
    name: "orderInfo",
    initialState,
    reducers: {
        setTotalPendingOrderData: (state = initialState, action) => {
            state.pendingOrder.totalData = action.payload;
        },
        setTotalRunningOrderData: (state = initialState, action) => {
            state.runningOrder.totalData = action.payload;
        },
        setIdForCancleOrder: (state = initialState, action) => {
            state.runningOrder.currentOrderIdFOrCancle = action.payload;
        },
    },
});

export default orderSlice.reducer;
export const { setTotalPendingOrderData, setTotalRunningOrderData, setIdForCancleOrder } = orderSlice.actions;
