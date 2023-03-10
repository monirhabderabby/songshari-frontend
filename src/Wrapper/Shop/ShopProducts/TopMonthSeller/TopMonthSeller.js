// configuration
import React from "react";

// Third party packages

// components
import picture from "../../../../assets/images/shop/Listing/Picture.png";
import TopMonthSellerCard from "../../../../components/shared/Cards/Shop/TopMonthSellerCard";

const TopMonthSeller = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="mb-28 px-[12px]">
            <div className="mb-[20px] lg:mb-[40px]">
                <p className="text-[32px] font-semibold font-playFair text-left">Top Month Seller</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-[32px]">
                {arr.map(p => {
                    return <TopMonthSellerCard key={p} {...{ picture }} />;
                })}
            </div>
        </div>
    );
};

export default TopMonthSeller;
