import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pendingOrder: {
        totalData: 0,
    },
    runningOrder: {
        totalData: 0,
        currentOrderIdFOrCancle: null,
    },
    completedOrder: {
        totalData: 0,
    },
};

const ordersSlice = createSlice({
    name: "ordersInfo",
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
        setTotalCompletedOrderData: (state = initialState, action) => {
            state.completedOrder.totalData = action.payload;
        },
    },
});

export default ordersSlice.reducer;
export const { setTotalPendingOrderData, setTotalRunningOrderData, setIdForCancleOrder, setTotalCompletedOrderData } = ordersSlice.actions;
