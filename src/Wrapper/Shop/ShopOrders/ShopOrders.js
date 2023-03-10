// configuration
import React from "react";

// components
import { OnGoingOrderContainer } from "./OnGoingOrderContainer";
import { OrderHistoryContainer } from "./OrderHistoryContainer";

const ShopOrders = () => {
    return (
        <div className="pb-[300px] px-[12px]">
            <OnGoingOrderContainer />
            <OrderHistoryContainer />
        </div>
    );
};

export default ShopOrders;
