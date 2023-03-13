import React, { useEffect } from "react";
import { AllOrders } from "./AllOrders";
import { StatusSelector } from "./StatusSelector";

export const OrderStatus = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <div className="flex flex-col gap-y-[20px] h-full w-full">
            <StatusSelector />
            <AllOrders />
        </div>
    );
};
