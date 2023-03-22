import React from "react";
import { MobileBackButton } from "../../../shared/Components/MobileBackButton";
import CustomHeader from "../../../shared/CustomHeader/CustomHeader";
import { PlayerContainer } from "./LeftSide/PlayerContainer";
import { CourseAccessOutline } from "./RightSide/CourseAccessOutline";

export const CourseAccess = () => {
    return (
        <div>
            <div className="hidden lg:block">
                <CustomHeader title="Course" />
            </div>
            <div className="lg:hidden">
                <MobileBackButton name="Course" />
            </div>
            <div className="w-full lg:w-[1200px]  2xl:w-[1400px] mx-auto h-auto flex lg:flex-row flex-col gap-y-[20px] pt-[44px] px-[26px]">
                <div className=" w-full lg:max-w-[660px] 2xl:w-[850px] mx-auto min-h-[400px]">
                    <PlayerContainer />
                </div>
                <div className="sticky top-[44px] flex-1 mx-auto w-full lg:max-w-[400px]">
                    <CourseAccessOutline />
                </div>
            </div>
        </div>
    );
};
