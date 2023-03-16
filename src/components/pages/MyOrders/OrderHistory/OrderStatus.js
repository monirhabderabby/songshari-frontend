import React, { useEffect, useState } from "react";
import { AllOrders } from "./AllOrders";
import { StatusSelector } from "./StatusSelector";

export const OrderStatus = () => {
    const [totalOrders, setTotalOrders] = useState(0);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <div className="flex flex-col gap-y-[20px] h-full w-full">
            {totalOrders > 0 && <StatusSelector totalOrders={totalOrders} />}
            <AllOrders setTotalOrders={setTotalOrders} />
        </div>
    );
};
