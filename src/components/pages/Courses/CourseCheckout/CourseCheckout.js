// configuration
import React from "react";
import { useParams } from "react-router";

// Third party packages
import { useGetSingleCourseByIdQuery } from "../../../../Redux/features/Course/courseApi";
import { LineWaveLoader } from "../../../shared/Cards/Loader/lineWaveLoader/LineWaveLoader";
import { MobileBackButton } from "../../../shared/Components/MobileBackButton";
import CustomHeader from "../../../shared/CustomHeader/CustomHeader";
import { ServerErrorMessage } from "../../../ui/error/ServerErrorMessage";
import { CourseCheckoutRightSide } from "./CourseCheckoutRightSide";
import { CourseCheckoutLeftSide } from "./Left/CourseCheckoutLeftSide";

export const CourseCheckout = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetSingleCourseByIdQuery(id);
    const { course } = data || {};

    let content;
    if (isLoading) {
        content = (
            <div className="h-[400px] w-full flex justify-center items-center">
                <LineWaveLoader />
            </div>
        );
    } else if (!isLoading && isError) {
        content = (
            <div className="h-[350px] w-full flex justify-center items-center">
                <ServerErrorMessage />
            </div>
        );
    } else if (!isLoading && data) {
        content = (
            <div className="w-full lg:w-[1200px]  2xl:w-[1400px] mx-auto h-auto flex lg:flex-row flex-col gap-y-[20px] pt-[44px] px-[26px]">
                <div className=" w-full lg:max-w-[660px] 2xl:w-[850px] mx-auto">
                    <CourseCheckoutLeftSide />
                </div>
                <div className="sticky top-[44px] flex-1 mx-auto lg:max-w-[400px] 2xl:max-w-[480px]">
                    <CourseCheckoutRightSide course={course} />
                </div>
            </div>
        );
    }
    return (
        <div className="pb-[50px]">
            <div className="hidden lg:block">
                <CustomHeader title="Checkout" />
            </div>
            <div className="lg:hidden">
                <MobileBackButton name="Checkout" />
            </div>
            {content}
        </div>
    );
};
