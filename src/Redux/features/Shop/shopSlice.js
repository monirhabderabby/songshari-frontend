import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlist: {
        count: 0,
    },
    cart: {
        count: 0,
    },
};

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        increaseWishlistCount: (state = initialState, action) => {
            state.wishlist.count++;
        },
        decreaseWishlistCount: (state = initialState, action) => {
            state.wishlist.count--;
        },
        increaseCartCount: (state = initialState, action) => {
            state.cart.count++;
        },
        decreaseCartCount: (state = initialState, action) => {
            state.cart.count--;
        },
    },
});

export default shopSlice.reducer;
export const { increaseWishlistCount, decreaseWishlistCount, increaseCartCount, decreaseCartCount } = shopSlice.actions;
