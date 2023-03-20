import React from "react";
import { MobileBackButton } from "../../../shared/Components/MobileBackButton";
import CustomHeader from "../../../shared/CustomHeader/CustomHeader";
import { SingleCourseInfoCard } from "./SingleCourseInfoCard";
import { SingleCourseLeft } from "./SingleCourseLeft";

export const SingleCoursePage = () => {
    return (
        <div className="pb-[50px]">
            <div className="hidden lg:block">
                <CustomHeader title="Career Development Package" />
            </div>
            <div className=" lg:hidden">
                <MobileBackButton name="Course Info" />
            </div>
            <div className="w-full lg:w-[1200px]  2xl:w-[1400px] mx-auto h-auto flex lg:flex-row flex-col gap-y-[20px] pt-[44px] px-[26px]">
                <div className=" w-full lg:max-w-[660px] 2xl:w-[850px] mx-auto">
                    <SingleCourseLeft />
                </div>
                <div className="sticky top-[44px] flex-1 mx-auto max-w-[400px]">
                    <SingleCourseInfoCard />
                </div>
            </div>
        </div>
    );
};
