import React from "react";
import { CourseDetailesTab } from "./leftSide/CourseDetailesTab";
import { LeftSideHeader } from "./leftSide/LeftSideHeader";

export const SingleCourseLeft = ({ course }) => {
    return (
        <div className="relative">
            <LeftSideHeader course={course} />
            <div>
                <CourseDetailesTab course={course} />
            </div>
        </div>
    );
};
