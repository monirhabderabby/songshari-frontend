import React from "react";
import ReactPlayer from "react-player";
import { PlayerTabs } from "./PlayerTabs";

export const PlayerContainer = ({ link }) => {
    return (
        <div className="w-full">
            <div className="min-h-[200px]">
                <ReactPlayer url={link} width="100%" height="330px" onReady={true} />
            </div>
            <div>
                <PlayerTabs />
            </div>
        </div>
    );
};
