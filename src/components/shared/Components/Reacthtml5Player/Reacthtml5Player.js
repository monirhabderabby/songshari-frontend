import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

export const Reacthtml5Player = ({ handlePlay, link, isPlaying }) => {
    return (
        <Video autoPlay={isPlaying} onEnded={handlePlay} preload="auto">
            <source src={link} type="video/mp4"></source>
        </Video>
    );
};
