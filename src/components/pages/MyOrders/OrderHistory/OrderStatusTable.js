import React from "react";
import { Link, useLocation } from "react-router-dom";

export const OrderStatusTable = ({ order }) => {
    const { orderItems, totalPrice } = order || {};
    const location = useLocation();

    let content;
    if (orderItems?.length > 0) {
        content = orderItems?.map(item => {
            const { product, quantity } = item || {};
            const { name, price, _id } = product || {};
            return (
                <tr key={_id} className="w-full flex justify-between pt-[6px] text-[9px] lg:text-[14px]">
                    <td>
                        <Link
                            className="text-[8px] lg:text-[12px] ring-1 ring-pink-200 px-1 lg:px-3 py-[2px] rounded-[4px] hover:bg-pink-400 hover:text-white duration-300"
                            to={`/course/review/${_id}`}
                            state={{ from: location }}
                        >
                            Send Review
                        </Link>
                    </td>
                    <td>{name}</td>
                    <td className="lg:pr-[90px]">{quantity}</td>
                    <td className="lg:pr-[80px]">{price}</td>
                    <td>{quantity * price}</td>
                </tr>
            );
        });
    }
    return (
        <table className="w-full mt-[15px] lg:mt-[20px]">
            <thead className="text-left flex justify-between pb-[6px] border-b-2 text-[12px] lg:text-[16px]">
                <tr className="w-full flex justify-between">
                    <th>Review</th>
                    <th className="font-medium font-Inter text-center">Product</th>
                    <th className="font-medium font-Inter text-center">Quantity</th>
                    <th className="font-medium font-Inter text-center">Price</th>
                    <th className="font-medium font-Inter text-center">Sub Total</th>
                </tr>
            </thead>
            <tbody>
                {content}
                <tr className="w-full flex justify-between pt-[6px]">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="border-t-2 mt-[10px] w-[200px] text-[12px] lg:text-[16px] flex justify-end pt-[6px]">
                        <span className="font-medium">Grand Total: </span> {totalPrice}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
