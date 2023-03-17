import React from "react";
import { CourseCard } from "../../../../shared/Cards/Courses/CourseCard";
import { CoursesCountBox } from "./CoursesCountBox";

export const RightSideCourses = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="flex flex-col w-full">
            <CoursesCountBox />
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
                {arr.map(item => {
                    return <CourseCard key={item} />;
                })}
            </div>
        </div>
    );
};
