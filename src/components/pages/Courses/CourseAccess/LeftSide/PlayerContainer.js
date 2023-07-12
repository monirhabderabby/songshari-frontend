import React from "react";
import ReactPlayer from "react-player";
import { useContentStatusUpdateMutation } from "../../../../../Redux/features/Course/courseApi";
import { PlayerTabs } from "./PlayerTabs";

export const PlayerContainer = ({ link, videoName, currentVideoID }) => {
    const [contentStatusUpdate] = useContentStatusUpdateMutation();

    // status will be updated when video is watched 100%
    const handlePlay = () => {
        contentStatusUpdate(currentVideoID);
    };

    return (
        <div className="w-full">
            <div className="min-h-[200px]">
                <ReactPlayer url={link} width="100%" height="330px" playing={link} onEnded={handlePlay} />
            </div>
            <div className="h-auto mt-[10px] w-full flex justify-start items-center text-[18px] font-Inter font-medium">{videoName}</div>
            <div>
                <PlayerTabs />
            </div>
        </div>
    );
};
