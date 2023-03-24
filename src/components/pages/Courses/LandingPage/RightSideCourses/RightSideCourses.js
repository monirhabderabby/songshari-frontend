// Configuration
import React, { useState } from "react";

// Third party packages
import { Pagination } from "@mui/material";
import { useSelector } from "react-redux";
import { useGetAllCoursesQuery } from "../../../../../Redux/features/Course/courseApi";
import { CourseCard } from "../../../../shared/Cards/Courses/CourseCard";
import { LineWaveLoader } from "../../../../shared/Cards/Loader/lineWaveLoader/LineWaveLoader";
import { ServerErrorMessage } from "../../../../ui/error/ServerErrorMessage";
import { CoursesCountBox } from "./CoursesCountBox";

export const RightSideCourses = () => {
    const [page, setPage] = useState(1);
    const { types, skillLevel, category } = useSelector(state => state.persistedReducer.course.filter) || {};

    // get data by filtering
    const { data, isLoading, isError, isFetching } = useGetAllCoursesQuery({
        page: page,
        limit: 9,
        categroyId: category,
        typeId: types,
        skill: skillLevel,
    });

    const { count, total, courses } = data || {};

    const pageCounting = Math.ceil(total / 9);

    // Get all courses
    let content;
    if (isLoading || isFetching) {
        content = <LineWaveLoader />;
    } else if (!isLoading && isError) {
        content = <ServerErrorMessage />;
    } else if (!isLoading && courses?.length === 0) {
        content = <div className="w-full h-[350px] flex justify-center items-center font-Inter text-gray-500 text-[20px]">No Course Found!</div>;
    } else if (!isLoading && courses?.length > 0) {
        content = (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
                {courses?.map(item => {
                    return <CourseCard key={item?._id} course={item} />;
                })}
            </div>
        );
    }
    return (
        <div className="flex flex-col w-full">
            <CoursesCountBox {...{ count, total, page }} />
            <div>{content}</div>
            {total > 8 && (
                <div className="my-[100px] w-full flex justify-center">
                    <Pagination count={pageCounting} variant="outlined" color="secondary" onChange={(event, value) => setPage(value)} />
                </div>
            )}
        </div>
    );
};
