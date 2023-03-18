import React from "react";
import { MyCourseCard } from "../../../shared/Cards/Courses/MyCourseCard";

export const MyCourses = () => {
    const courses = [
        {
            id: 1,
            courseName: "Redux From Beginner Level to Advanced",
            progress: 55,
            trainer: "Learn With Sumit",
            img: "https://www.filepicker.io/api/file/cWlkfXnMQKepNeIaRItV",
        },
        {
            id: 2,
            courseName: "Node-Mongo Advanced Crash  Course",
            progress: 81,
            trainer: "Jhankar Mahbub",
            img: "https://www.excelptp.com/wp-content/uploads/2021/05/node-js-banner-img.jpg",
        },
    ];
    return (
        <div className="w-full">
            <h2 className="text-[18px] lg:text-[24px] font-normal font-Nunito mb-[10px]">
                Welcome Back <span className="font-bold">Monir Hossain Rabby</span>, Ready For Your Next Lesson?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] w-full">
                {courses?.map(item => {
                    return <MyCourseCard item={item} key={item.id} />;
                })}
            </div>
        </div>
    );
};
