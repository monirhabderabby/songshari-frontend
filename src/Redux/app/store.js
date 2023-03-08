import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import apiSlice from "../api/apiSlice";
import chatReducer from "../chat/chatReducer";
import checkoutDetailsSlice from "../features/checkout/checkoutDetailsSlice";
import connectionSlice from "../features/connections/connectionSlice";
import filterSlice from "../features/filter/filterSlice";
import findPartnerSlice from "../features/filter/findPartnerSlice";
import findLawyerKaziAgentFilterSlice from "../features/FindLawyerKaziAgentFilter/findLawyerKaziAgentFilterSlice";
import pageTitleSlice from "../features/PageTitle/pageTitleSlice";
import orderSlice from "../features/Service/orderSlice";
import shopSlice from "../features/Shop/shopSlice";
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
    pageTitle: pageTitleSlice,
    findLawyerKaziAgent: findLawyerKaziAgentFilterSlice,
    ordersInfo: orderSlice,
    connection: connectionSlice,
    shop: shopSlice,
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
