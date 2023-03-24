import React, { useState } from "react";
import { BiFilter } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import useDocumentTitle from "../../../../assets/utilities/useDocumentTitle";
import { MobileBackButton } from "../../../shared/Components/MobileBackButton";
import CustomHeader from "../../../shared/CustomHeader/CustomHeader";
import CourseFilterContainer from "./LeftSideFilterContainer/CourseFilterContainer";
import { RightSideCourses } from "./RightSideCourses/RightSideCourses";

export const CourseLandingPage = () => {
    const [open, setOpen] = useState(false);

    useDocumentTitle("Shongshari | Course");

    return (
        <>
            <div className="lg:hidden">
                <MobileBackButton name="Courses" />
            </div>
            <div className="hidden lg:block">
                <CustomHeader title="Courses" />
            </div>
            <div className="max-w-[1200px] mx-auto h-auto pt-[20px] lg:flex relative px-[16px]">
                {/* close icon */}
                {open && (
                    <div
                        className="absolute top-[150px] flex justify-center items-center shadow-xl left-0 w-[30px] h-[30px] border-[1px] border-[#d0deef] bg-white lg:hidden"
                        onClick={() => setOpen(false)}
                    >
                        <GrFormClose />
                    </div>
                )}
                <div
                    className={`w-[310px] absolute top-0 ${
                        open ? "left-0" : "left-[420px] lg:left-0"
                    } duration-300 translate-x-[120px] lg:translate-x-0 lg:sticky top-0 left-0`}
                >
                    <CourseFilterContainer />
                </div>
                <div className="block lg:hidden mb-[10px]">
                    <button
                        className="bg-white border-[1px] border-[#d0deef] w-full flex justify-center items-center h-[52px] rounded-[4px] px-[15px] text-[18px] text-[#585e8c]"
                        onClick={() => setOpen(!open)}
                    >
                        <BiFilter className="text-[24px]" />
                        Filter
                    </button>
                </div>
                <div className="flex-1">
                    <RightSideCourses />
                </div>
            </div>
        </>
    );
};
