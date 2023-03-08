import React from "react";
import { RxCross2 } from "react-icons/rx";

export const WishlistTable = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="py-[30px]">
                <h4 className="font-Nunito font-bold text-[22px]">My Wishlist</h4>
            </div>
            <div className="overflow-x-auto">
                <table className="w-auto table-auto lg:w-full bg-white">
                    <thead>
                        <tr className="h-[60px] border-y-[1px] border-gray-200 font-normal font-Inter">
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Stock Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="h-[60px] lg:h-[80px] border-b-[1px] border-gray-200">
                            <td className="px-[6px]">
                                <RxCross2 />
                            </td>
                            <td className="w-[60px] h-[60px] rounded-full">
                                <img
                                    src="https://images.unsplash.com/photo-1532207733185-fc73ca0a54b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1317&q=80"
                                    alt="product"
                                    className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-full"
                                />
                            </td>
                            <td className="text-center">
                                <h1 className="text-[10px] lg:text-[16px]">Nlazzer</h1>
                            </td>
                            <td className="text-center text-[10px] lg:text-[16px]">
                                <span>250</span> BDT
                            </td>
                            <td className="text-center text-[10px] lg:text-[16px]">in Stock</td>
                            <td className="text-center text-[10px] lg:text-[16px]">
                                <button className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white px-[3px] lg:px-[6px] py-[2px] rounded-[4px]">
                                    Add to Cart
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
