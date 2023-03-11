import React from "react";

export const OrderStatusHeader = () => {
    return (
        <div className="flex justify-between h-[80px] items-center">
            <div>
                <h3 className="text-[22px] font-Nunito font-semibold">Order ID</h3>
                <h3 className="text-[16px] text-gray-400 tracking-wider font-normal font-outfit">OrderIDshfdsjkf</h3>
            </div>
            <div className="flex items-center gap-x-[50px]">
                <div>
                    <h3 className="text-[22px] font-Nunito font-semibold">ORDERED ON</h3>
                    <h3 className="text-[16px] text-gray-400 tracking-wider font-normal font-outfit">12 DEC 2015</h3>
                </div>
                <div>
                    <h3 className="text-[22px] font-Nunito font-semibold">STATUS</h3>
                    <h3 className="text-[16px] tracking-wider font-normal font-outfit text-orange-400">Ongoing</h3>
                </div>
            </div>
        </div>
    );
};
