import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import apiSlice from "../api/apiSlice";
import checkoutDetailsSlice from "../features/checkout/checkoutDetailsSlice";
import filterSlice from "../features/filter/filterSlice";
import userInfo from "../features/userInfo/userInfo";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whiteList: ["userInfo", "filter", "checkoutDetailes"],
};

const reducer = combineReducers({
    userInfo: userInfo,
    filter: filterSlice,
    checkoutDetailes: checkoutDetailsSlice,
});
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        persistedReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(apiSlice.middleware),
});

export default store;
