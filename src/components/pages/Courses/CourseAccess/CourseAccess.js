import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import useDocumentTitle from "../../../../assets/utilities/useDocumentTitle";
import { useGetMyCourseMilestionQuery } from "../../../../Redux/features/Course/courseApi";
import { setCurrentVideo } from "../../../../Redux/features/Course/coursesAccessSlice";
import { LineWaveLoader } from "../../../shared/Cards/Loader/lineWaveLoader/LineWaveLoader";
import { MobileBackButton } from "../../../shared/Components/MobileBackButton";
import CustomHeader from "../../../shared/CustomHeader/CustomHeader";
import { ServerErrorMessage } from "../../../ui/error/ServerErrorMessage";
import { PlayerContainer } from "./LeftSide/PlayerContainer";
import { CourseAccessOutline } from "./RightSide/CourseAccessOutline";

export const CourseAccess = () => {
    const dispatch = useDispatch();
    const { currentVideo } = useSelector(state => state.persistedReducer?.courseAccess) || {};

    const { video, name } = currentVideo || {};

    const { id } = useParams();

    const { data, isLoading, isError } = useGetMyCourseMilestionQuery(id);

    const { sections } = data || {};

    useEffect(() => {
        // set initial current video Milestion 1 > Modules 1 > Content 1
        dispatch(setCurrentVideo(data?.sections[0]?.modules[0]?.contents[0]));
    }, [data, dispatch]);

    useDocumentTitle("Shongshari | Course Access");

    let content;
    if (isLoading) {
        content = (
            <div className="h-[350px] flex justify-center items-center">
                <LineWaveLoader />
            </div>
        );
    } else if (!isLoading && isError) {
        content = (
            <div className="h-[350px] flex justify-center items-center">
                <ServerErrorMessage />
            </div>
        );
    } else if (!isLoading && data) {
        content = (
            <div className="w-full lg:w-[1200px]  2xl:w-[1400px] mx-auto h-auto flex lg:flex-row flex-col gap-y-[20px] pt-[44px] px-[26px]">
                <div className=" w-full lg:max-w-[660px] 2xl:w-[850px] mx-auto min-h-[400px]">
                    <PlayerContainer link={video} videoName={name} />
                </div>
                <div className="sticky top-[44px] flex-1 mx-auto w-full lg:max-w-[400px]">
                    <CourseAccessOutline sections={sections} />
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="hidden lg:block">
                <CustomHeader title="Course" />
            </div>
            <div className="lg:hidden">
                <MobileBackButton name="Course" />
            </div>
            {content}
        </div>
    );
};
