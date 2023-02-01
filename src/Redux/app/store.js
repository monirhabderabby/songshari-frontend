import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import apiSlice from "../api/apiSlice";
import chatReducer from "../chat/chatReducer";
import checkoutDetailsSlice from "../features/checkout/checkoutDetailsSlice";
import filterSlice from "../features/filter/filterSlice";
import findPartnerSlice from "../features/filter/findPartnerSlice";
import userInfo from "../features/userInfo/userInfo";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whiteList: ["userInfo", "chat", "filter", "checkoutDetailes"],
};

const reducer = combineReducers({
    userInfo: userInfo,
    chat: chatReducer,
    filter: filterSlice,
    checkoutDetailes: checkoutDetailsSlice,
    findPartnerSlice: findPartnerSlice,
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
