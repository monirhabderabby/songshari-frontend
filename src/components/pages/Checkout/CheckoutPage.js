import React from "react";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import { LeftSideCheckoutContainer } from "./LeftSideCheckoutContainer/LeftSideCheckoutContainer";
import { RightSideCheckoutContainer } from "./RightSideCheckoutContainer/RightSideCheckoutContainer";

export const CheckoutPage = () => {
    return (
        <div>
            <CustomHeader title="Checkout" />
            <section className="max-w-[1200px] mx-auto px-[20px]">
                <div className="w-full grid grid-cols-2 gap-x-[24px]">
                    <div className="left_side w-[570px] bg-green-300 h-[430px] mx-auto">
                        <LeftSideCheckoutContainer />
                    </div>
                    <div className="right_Side w-[370px] h-[430px] bg-blue-500 mx-auto">
                        <RightSideCheckoutContainer />
                    </div>
                </div>
            </section>
        </div>
    );
};
