import React, { useState } from "react";
import { TableData } from "./TableData";

export const WishlistTable = () => {
    const [wishlistData, setWishlistData] = useState(JSON.parse(localStorage.getItem("wishlist")) || []);

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
                            return <TableData key={product?._id} product={product} setWishlistData={setWishlistData} wishlistData={wishlistData} />;
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
