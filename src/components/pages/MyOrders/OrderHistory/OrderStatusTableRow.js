import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useGetProductReviewOfMeQuery } from "../../../../Redux/features/Shop/shopApi";

export const OrderStatusTableRow = ({ item }) => {
    const location = useLocation();
    const { product, quantity } = item || {};
    const { name, price, _id } = product || {};
    const { data, isLoading, error } = useGetProductReviewOfMeQuery(_id);

    let productName = name.length > 40 ? name.slice(0, 40) + "..." : name;

    let content;
    if (isLoading) {
        content = <div>...</div>;
    } else if (!isLoading && error?.status === 404) {
        content = (
            <Link
                className="text-[8px] lg:text-[12px] ring-1 ring-pink-200 px-1 lg:px-3 py-[2px] rounded-[4px] hover:bg-pink-400 hover:text-white duration-300"
                to={`/course/review/${_id}`}
                state={{ from: location }}
            >
                Send Review
            </Link>
        );
    }
    return (
        <tr className="w-full flex justify-between pt-[6px] text-[9px] lg:text-[14px]">
            <td>{content}</td>
            <td>{productName}</td>
            <td className="lg:pr-[90px]">{quantity}</td>
            <td className="lg:pr-[80px]">{price}</td>
            <td>{quantity * price}</td>
        </tr>
    );
};
