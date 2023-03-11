import React from "react";
import { AllOrders } from "./AllOrders";
import { StatusSelector } from "./StatusSelector";

export const OrderStatus = () => {
    return (
        <div className="flex flex-col gap-y-[20px] h-full ">
            <StatusSelector />
            <AllOrders />
        </div>
    );
};
