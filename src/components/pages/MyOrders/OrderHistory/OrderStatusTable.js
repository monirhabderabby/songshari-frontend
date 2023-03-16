import React from "react";

export const OrderStatusTable = () => {
    return (
        <table className="w-full mt-[15px] lg:mt-[20px]">
            <thead className="text-left flex justify-between pb-[6px] border-b-2 text-[12px] lg:text-[16px]">
                <tr className="w-full flex justify-between">
                    <th className="font-medium font-Inter">Product</th>
                    <th className="font-medium font-Inter">Quantity</th>
                    <th className="font-medium font-Inter">Price</th>
                    <th className="font-medium font-Inter">Sub Total</th>
                </tr>
            </thead>
            <tbody>
                <tr className="w-full flex justify-between pt-[6px] text-[9px] lg:text-[14px]">
                    <td>Sarwani</td>
                    <td>10</td>
                    <td>100</td>
                    <td>1000</td>
                </tr>
                <tr className="w-full flex justify-between pt-[6px]">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="border-t-2 mt-[10px] w-[200px] text-[12px] lg:text-[16px] flex justify-end pt-[6px]">
                        <span className="font-medium">Grand Total:</span> 1000
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
