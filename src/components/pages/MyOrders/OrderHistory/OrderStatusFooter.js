import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export const OrderStatusFooter = ({ order }) => {
    const location = useLocation();
    const { paymentInfo } = order || {};
    return (
        <>
            <div className="flex justify-between mt-[30px] font-Inter">
                <div className="text-[9px] lg:text-[14px] flex-1">
                    <span className="text-gray-400">TXN ID:</span> {paymentInfo?.id}
                </div>
                <div className=" text-gray-400 text-[9px] lg:text-[18px] flex-1">
                    Your Order will be delivered by <span className="text-gray-800 font-medium"> 15 DEC 2023</span>
                </div>
            </div>
            <div className="mt-[12px]">
                <Link
                    className="text-[12px] ring-1 ring-pink-200 px-3 py-[2px] rounded-[4px] hover:bg-pink-400 hover:text-white duration-300"
                    to={`/course/review/5`}
                    state={{ from: location }}
                >
                    Send Review
                </Link>
            </div>
        </>
    );
};
