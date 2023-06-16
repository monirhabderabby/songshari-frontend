import { Rating } from "@mui/material";
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useGetProductReviewOfMeQuery } from "../../../../Redux/features/Shop/shopApi";

export const OrderStatusTableRow = ({ item }) => {
    const location = useLocation();
    const { product, quantity } = item || {};
    const { name, price, _id } = product || {};
    const { data, isLoading, error } = useGetProductReviewOfMeQuery(_id);

    const { review } = data || {};
    const { rating } = review || {};

    console.log(data);

    let productName = name?.length > 40 ? name.slice(0, 40) + "..." : name;

    let content;
    if (isLoading) {
        content = <div>...</div>;
    } else if (!isLoading && error?.status === 404) {
        content = (
            <Link
                className="text-[8px] lg:text-[12px] ring-1 ring-pink-200 px-1 lg:px-3 py-[2px] rounded-[4px] hover:bg-pink-400 hover:text-white duration-300"
                to={`/sendReview/${_id}`}
                state={{ from: location }}
            >
                Send Review
            </Link>
        );
    } else if (!isLoading && !error && data) {
        content = <Rating value={rating} readOnly size="small" />;
    }
    return (
        <tr className="w-full flex justify-between pt-[6px] text-[9px] lg:text-[14px]">
            <td className="hidden lg:block">{content}</td>
            <td className=" max-w-[70px] lg:max-w-[180px] text-left">{productName}</td>
            <td className="lg:pr-[90px]">{quantity}</td>
            <td className="lg:pr-[80px]">{price}</td>
            <td>{quantity * price}</td>
        </tr>
    );
};
