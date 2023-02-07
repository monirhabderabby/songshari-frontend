import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pendingOrder: {
        totalData: 0,
    },
    runningOrder: {
        totalData: 0,
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
    },
});

export default orderSlice.reducer;
export const { setTotalPendingOrderData, setTotalRunningOrderData } = orderSlice.actions;
