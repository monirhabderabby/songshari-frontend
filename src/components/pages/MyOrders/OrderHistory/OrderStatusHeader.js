import moment from "moment";
import React from "react";

export const OrderStatusHeader = ({ order }) => {
    const { createdAt, orderStatus, orderId } = order || {};
    let color;
    if (orderStatus?.includes("ongoing")) {
        color = "text-[#fb8c00]";
    } else if (orderStatus?.includes("Cancelled")) {
        color = "text-[#f4511e]";
    } else if (orderStatus?.includes("Delivered")) {
        color = "text-[#00e676]";
    }
    return (
        <div className="flex justify-between h-[60px] lg:h-[80px] items-center">
            <div>
                <h3 className="text-[12px] lg:text-[22px] font-Nunito font-semibold">Order ID</h3>
                <h3 className="text-[9px] lg:text-[16px] text-gray-400 tracking-wider font-normal font-outfit">#{orderId}</h3>
            </div>
            <div className="flex items-center gap-x-[50px]">
                <div>
                    <h3 className="text-[12px] lg:text-[22px] font-Nunito font-semibold">ORDERED ON</h3>
                    <h3 className="text-[9px] lg:text-[16px] text-gray-400 tracking-wider font-normal font-outfit">
                        {moment(createdAt).format("ll")}
                    </h3>
                </div>
                <div>
                    <h3 className="text-[12px] lg:text-[22px] font-Nunito font-semibold">STATUS</h3>
                    <h3 className={`text-[9px] lg:text-[16px] tracking-wider font-normal font-outfit ${color} font-semibold`}>{orderStatus}</h3>
                </div>
            </div>
        </div>
    );
};
