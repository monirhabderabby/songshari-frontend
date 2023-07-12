import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { decreaseWishlistCount, increaseCartCount } from "../../../Redux/features/Shop/shopSlice";

export const TableData = ({ product, setWishlistData, wishlistData }) => {
    const dispatch = useDispatch();
    const { name, price, photos, _id } = product || {};

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // function declaration =
    const handleDeleteWishlist = productId => {
        dispatch(decreaseWishlistCount());
        // update localStorage
        const updatedWishlist = wishlistData?.filter(item => item._id !== productId);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

        setWishlistData(wishlistData?.filter(item => item._id !== productId));
    };

    const handleAddToCart = () => {
        dispatch(increaseCartCount());
        const updatedCart = [...cart, product];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        handleDeleteWishlist(_id);
    };
    return (
        <tr className="h-[60px] lg:h-[80px] border-b-[1px] border-gray-200">
            <td className="px-[6px]">
                <RxCross2 onClick={() => handleDeleteWishlist(_id)} />
            </td>
            <td className="w-[60px] h-[60px] rounded-full">
                <img src={photos[0]?.url} alt="product" className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-full" />
            </td>
            <td className="text-center">
                <h1 className="text-[10px] lg:text-[16px]">{name}</h1>
            </td>
            <td className="text-center text-[10px] lg:text-[16px]">
                <span>{price}</span> BDT
            </td>
            <td className="text-center text-[10px] lg:text-[16px]">
                <button
                    className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white px-[3px] lg:px-[6px] py-[2px] rounded-[4px]"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
            </td>
        </tr>
    );
};
