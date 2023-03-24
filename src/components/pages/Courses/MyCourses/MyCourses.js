// Configuration
import React from "react";

// third party libraries
import { useSelector } from "react-redux";

// Components
import { useGetMyCoursesQuery } from "../../../../Redux/features/Course/courseApi";
import { MyCourseCard } from "../../../shared/Cards/Courses/MyCourseCard";
import { LineWaveLoader } from "../../../shared/Cards/Loader/lineWaveLoader/LineWaveLoader";
import { ServerErrorMessage } from "../../../ui/error/ServerErrorMessage";

export const MyCourses = () => {
    const { data, isLoading, isError } = useGetMyCoursesQuery();
    const { firstName, lastName } = useSelector(state => state.persistedReducer?.userInfo?.userInfo?.user) || {};
    const name = `${firstName} ${lastName}`;

    const { courses } = data || {};
    console.log(data);

    let content;
    if (isLoading) {
        content = (
            <div className="h-[350px] w-full flex justify-center items-center">
                <LineWaveLoader />
            </div>
        );
    } else if (!isLoading && isError) {
        content = (
            <div className="h-[350px] w-full flex justify-center items-center">
                <ServerErrorMessage />
            </div>
        );
    } else if (!isLoading && courses?.courses?.length === 0) {
        content = <div className="h-[350px] w-full flex justify-center items-center">No Course Found!</div>;
    } else if (!isLoading && courses?.courses?.length > 0) {
        content = (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] w-full">
                {courses?.courses?.map(item => {
                    return <MyCourseCard item={item} key={item.id} />;
                })}
            </div>
        );
    }
    //     {
    //         id: 1,
    //         courseName: "Redux From Beginner Level to Advanced",
    //         progress: 55,
    //         trainer: "Learn With Sumit",
    //         img: "https://www.filepicker.io/api/file/cWlkfXnMQKepNeIaRItV",
    //     },
    //     {
    //         id: 2,
    //         courseName: "Node-Mongo Advanced Crash  Course",
    //         progress: 81,
    //         trainer: "Jhankar Mahbub",
    //         img: "https://www.excelptp.com/wp-content/uploads/2021/05/node-js-banner-img.jpg",
    //     },
    // ];
    return (
        <div className="w-full">
            <h2 className="text-[18px] lg:text-[24px] font-normal font-Nunito mb-[10px]">
                Welcome Back <span className="font-bold">{name}</span>, Ready For Your Next Lesson?
            </h2>
            {content}
        </div>
    );
};
