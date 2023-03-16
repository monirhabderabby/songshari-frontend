import React from "react";
import { CoursesCountBox } from "./CoursesCountBox";

export const RightSideCourses = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="flex flex-col w-full">
            <CoursesCountBox />
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
                {arr.map(item => {
                    return <div key={item} className="h-[430px] w-[260px] bg-orange-400 mx-auto"></div>;
                })}
            </div>
        </div>
    );
};
