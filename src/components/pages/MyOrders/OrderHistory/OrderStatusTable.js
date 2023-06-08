import React from "react";
import { OrderStatusTableRow } from "./OrderStatusTableRow";

export const OrderStatusTable = ({ order }) => {
    const { orderItems, totalPrice } = order || {};
    let content;
    if (orderItems?.length > 0) {
        content = orderItems?.map(item => {
            return <OrderStatusTableRow item={item} key={item.__id} />;
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
