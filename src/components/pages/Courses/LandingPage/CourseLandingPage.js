import React, { useState } from "react";
import CustomHeader from "../../../shared/CustomHeader/CustomHeader";
import CourseFilterContainer from "./LeftSideFilterContainer/CourseFilterContainer";
import { RightSideCourses } from "./RightSideCourses/RightSideCourses";

export const CourseLandingPage = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="hidden lg:block">
                <CustomHeader title="Courses" />
            </div>
            <div className="max-w-[1200px] mx-auto h-auto pt-[20px] lg:flex relative">
                <div
                    className={`w-[310px] absolute top-0 ${
                        open ? "left-0" : "left-[420px] lg:left-0"
                    } duration-300 translate-x-[90px] lg:translate-x-0 lg:sticky top-0 left-0`}
                >
                    <CourseFilterContainer />
                </div>
                <div>
                    <RightSideCourses />
                </div>
            </div>
        </>
    );
};
