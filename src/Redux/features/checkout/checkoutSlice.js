import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    orderReview: {
        products: [
            {
                id: 1,
                name: "Apple",
                description: "dfdsf",
                quantity: 2,
                price: 20,
                totalPrice: 40,
            },
        ],
    },
};

// create slice
const checkoutSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        increaseQuantity: (state, action) => {
            const id = action.payload;
            return state.orderReview.products.map(product => {
                if (product.id === id) {
                    return product.quantity++;
                }
            });
        },
    },
});

export default checkoutSlice.reducer;
export const { increaseQuantity } = checkoutSlice.actions;
