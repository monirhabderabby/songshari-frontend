import { Pagination } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router";
import { useGetAllReviewsByCourseIDQuery } from "../../../../../Redux/features/Course/courseApi";
import { LineWaveLoader } from "../../../../shared/Cards/Loader/lineWaveLoader/LineWaveLoader";
import { ServerErrorMessage } from "../../../../ui/error/ServerErrorMessage";
import { CourseCard } from "./CourseCard";

export const CourseReviews = () => {
    const [page, setPage] = useState(1);
    const { id } = useParams();
    const { isLoading, isFetching, data, isError } = useGetAllReviewsByCourseIDQuery({ id: id, page: page, limit: 3 });

    const { reviews, total } = data || {};
    const paginationPage = Math.ceil(total / 3);

    let content;
    if (isLoading || isFetching) {
        content = (
            <div className="h-[200px] w-full flex justify-center items-center">
                <LineWaveLoader />
            </div>
        );
    } else if (!isLoading && isError) {
        content = (
            <div className="h-[250px] w-full flex justify-center items-center">
                <ServerErrorMessage />
            </div>
        );
    } else if (!isLoading && reviews?.length === 0) {
        content = <div className="h-[200px] w-full flex justify-center items-center text-[18px] font-Nunito text-gray-500">No Reviews Found!</div>;
    } else if (!isLoading && reviews?.length > 0) {
        content = (
            <div className="w-full flex flex-col gap-y-[30px]">
                {reviews?.map(item => {
                    return <CourseCard key={item?._id} review={item} />;
                })}
            </div>
        );
    }

    return (
        <div className="my-[30px] lg:my-[50px]">
            <h2 className="text-[32px] text-gray-700 font-semibold mb-[20px] border-b-2">Reviews ({reviews?.length})</h2>
            {content}
            <div className="mt-[50px] w-full flex justify-end">
                <Pagination
                    count={paginationPage}
                    onChange={(e, value) => setPage(value)}
                    sx={{
                        "& .MuiPaginationItem-root.Mui-selected": {
                            backgroundImage: "linear-gradient(166deg, rgb(255,0,128) 0%, rgb(148,45,255) 100%)",
                            color: "#FFFFFF",
                        },
                        "& .MuiPaginationItem-root.Mui-selected:hover": {
                            backgroundImage: "linear-gradient(166deg, rgb(255,0,128) 25%, rgb(148,45,255) 100%)",
                        },
                    }}
                />
            </div>
        </div>
    );
};
