import React from "react";
import { useSelector } from "react-redux";

export const RightSideCheckoutContainer = () => {
    const products = useSelector(state => state.persistedReducer?.checkout);
    console.log(products);
    return <div>RightSideCheckoutContainer</div>;
};
