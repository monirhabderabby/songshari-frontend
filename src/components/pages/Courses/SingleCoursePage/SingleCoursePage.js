import React from "react";
import { useParams } from "react-router";
import { useGetSingleCourseByIdQuery } from "../../../../Redux/features/Course/courseApi";
import { LineWaveLoader } from "../../../shared/Cards/Loader/lineWaveLoader/LineWaveLoader";
import { MobileBackButton } from "../../../shared/Components/MobileBackButton";
import CustomHeader from "../../../shared/CustomHeader/CustomHeader";
import { ServerErrorMessage } from "../../../ui/error/ServerErrorMessage";
import { SingleCourseInfoCard } from "./SingleCourseInfoCard";
import { SingleCourseLeft } from "./SingleCourseLeft";

export const SingleCoursePage = () => {
    const { id } = useParams();

    const { data, isLoading, isError } = useGetSingleCourseByIdQuery(id);
    const { course } = data || {};

    let content;
    if (isLoading) {
        content = (
            <div className="min-h-[350px]">
                <LineWaveLoader />
            </div>
        );
    } else if (!isLoading && isError) {
        content = (
            <div className="w-full flex justify-center items-center min-h-[300px]">
                <ServerErrorMessage />
            </div>
        );
    } else if (!isLoading && data) {
        content = (
            <div className="w-full lg:w-[1200px]  2xl:w-[1400px] mx-auto h-auto flex lg:flex-row flex-col gap-y-[20px] pt-[44px] px-[26px]">
                <div className=" w-full lg:max-w-[660px] 2xl:w-[850px] mx-auto">
                    <SingleCourseLeft {...{ course }} />
                </div>
                <div className="sticky top-[44px] flex-1 mx-auto max-w-[400px]">
                    <SingleCourseInfoCard {...{ course }} />
                </div>
            </div>
        );
    }
    return (
        <div className="pb-[50px]">
            <div className="hidden lg:block">
                <CustomHeader title="Course" />
            </div>
            <div className=" lg:hidden">
                <MobileBackButton name="Course Info" />
            </div>
            <section>{content}</section>
        </div>
    );
};
