import React from "react";
import { OrderStatusFooter } from "./OrderStatusFooter";
import { OrderStatusHeader } from "./OrderStatusHeader";
import { OrderStatusTable } from "./OrderStatusTable";

export const AllOrders = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="flex flex-col gap-y-[20px] h-auto">
            {arr.map(item => {
                return (
                    <div key={item} className="h-auto py-[22px] shadow-[rgba(0,0,0,0.24)_0px_3px_8px] rounded-[6px] px-[16px]">
                        {/* header part */}
                        <OrderStatusHeader />

                        {/* table part */}
                        <OrderStatusTable />

                        <OrderStatusFooter />
                    </div>
                );
            })}
        </div>
    );
};
