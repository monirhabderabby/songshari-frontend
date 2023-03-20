import React from "react";
import { MobileBackButton } from "../../../shared/Components/MobileBackButton";
import CustomHeader from "../../../shared/CustomHeader/CustomHeader";
import { CourseCheckoutRightSide } from "./CourseCheckoutRightSide";
import { CourseCheckoutLeftSide } from "./Left/CourseCheckoutLeftSide";

export const CourseCheckout = () => {
    return (
        <div>
            <div className="hidden lg:block">
                <CustomHeader title="Checkout" />
            </div>
            <div className="lg:hidden">
                <MobileBackButton name="Checkout" />
            </div>
            <div className="w-full lg:w-[1200px]  2xl:w-[1400px] mx-auto h-auto flex lg:flex-row flex-col gap-y-[20px] pt-[44px] px-[26px]">
                <div className=" w-full lg:max-w-[660px] 2xl:w-[850px] mx-auto">
                    <CourseCheckoutLeftSide />
                </div>
                <div className="sticky top-[44px] flex-1 mx-auto max-w-[400px]">
                    <CourseCheckoutRightSide />
                </div>
            </div>
        </div>
    );
};
