import React from "react";
import { CourseDetailesTab } from "./leftSide/CourseDetailesTab";
import { LeftSideHeader } from "./leftSide/LeftSideHeader";

export const SingleCourseLeft = () => {
    return (
        <div className="relative">
            <LeftSideHeader />
            <div className="">
                <CourseDetailesTab />
            </div>
        </div>
    );
};
