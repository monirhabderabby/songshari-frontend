import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { decreaseWishlistCount } from "../../../Redux/features/Shop/shopSlice";

export const WishlistTable = () => {
    const dispatch = useDispatch();
    const [wishlistData, setWishlistData] = useState(JSON.parse(localStorage.getItem("wishlist")) || []);

    // function declaration =
    const handleDeleteWishlist = productId => {
        dispatch(decreaseWishlistCount());
        // update localStorage
        const updatedWishlist = wishlistData?.filter(item => item._id !== productId);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

        setWishlistData(wishlistData?.filter(item => item._id !== productId));
    };

    let content;
    if (wishlistData?.length === 0) {
        content = (
            <div className="h-[250px] w-full flex justify-center items-center text-gray-500">
                Your wishlist is empty. Start adding products now to save them for later!
            </div>
        );
    } else {
        content = (
            <div className="overflow-x-auto">
                <table className="w-full table-auto lg:w-full bg-white">
                    <thead>
                        <tr className="h-[60px] border-y-[1px] border-gray-200 font-normal font-Inter">
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishlistData?.map(product => {
                            const { name, price, photos, _id } = product || {};
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
                                        <button className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white px-[3px] lg:px-[6px] py-[2px] rounded-[4px]">
                                            Add to Cart
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="py-[30px]">
                <h4 className="font-Nunito font-bold text-[22px]">My Wishlist</h4>
            </div>
            {content}
        </div>
    );
};
