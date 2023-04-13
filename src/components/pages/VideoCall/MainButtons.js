import React from 'react';

import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PresentToAllIcon from "@mui/icons-material/PresentToAll";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";


const MainButtons = ({audio, setAudio, video, setVideo, bgColor}) => {
    return (
        <div className="absolute bottom-12">
        <button
          onClick={() => setAudio(!audio)}
          className={`${
            audio ? bgColor : "bg-[rgba(248,249,249,0.1)]"
          } shadow backdrop-blur-lg h-12 rounded-full w-12`}
        >
          <VolumeUpIcon style={{ color: "white" }} />
        </button>
        <button
          onClick={() => setVideo(!video)}
          className={`bg-[rgba(248,249,249,0.1)] mx-2 ${
            video ? bgColor : "bg-[rgba(248,249,249,0.1)]"
          } shadow backdrop-blur-lg h-12 rounded-full w-12`}
        >
          <VideocamIcon style={{ color: "white" }} />
        </button>
        <button className="bg-[rgba(248,249,249,0.1)] mx-2 hover:bg-[rgba(248,249,249,0.3)] shadow backdrop-blur-lg h-12 rounded-full w-12">
          <PresentToAllIcon style={{ color: "white" }} />
        </button>
        <button className="bg-[#ff0e0e] mx-2 hover:bg-[rgba(248,249,249,0.3)] shadow backdrop-blur-lg h-12 rounded-full w-12">
          <CallIcon style={{ color: "white" }} />
        </button>
      </div>
    );
}

export default MainButtons;
