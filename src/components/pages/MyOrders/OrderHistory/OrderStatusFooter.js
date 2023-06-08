import moment from "moment";
import React from "react";

export const OrderStatusFooter = ({ order }) => {
    const { paymentInfo, estimateDeliveryDate } = order || {};
    return (
        <>
            <div className="flex justify-between mt-[30px] font-Inter">
                <div className="text-[9px] lg:text-[14px] flex-1">
                    <span className="text-gray-400">TXN ID:</span> {paymentInfo?.id}
                </div>
                {estimateDeliveryDate && (
                    <div className=" text-gray-400 text-[9px] lg:text-[18px] flex-1">
                        Your Order will be delivered by{" "}
                        <span className="text-gray-800 font-medium"> {moment(estimateDeliveryDate).format("MMM Do YY")}</span>
                    </div>
                )}
            </div>
        </>
    );
};
