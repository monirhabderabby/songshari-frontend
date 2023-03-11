import React from "react";

export const OrderStatusFooter = () => {
    return (
        <div className="flex justify-between mt-[30px] font-Inter">
            <div>
                <span className="text-gray-400">TXN ID:</span> 15454231534
            </div>
            <div className=" text-gray-400 text-[18px]">
                Your Order will be delivered by <span className="text-gray-800 font-medium"> 15 DEC 2023</span>
            </div>
        </div>
    );
};
