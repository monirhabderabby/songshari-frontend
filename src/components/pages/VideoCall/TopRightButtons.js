import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const TopRightButtons = () => {
  return (
    <div className="absolute top-4 right-2">
      <div className="relative flex items-center">
        <button className="hidden md:block mx-2 bg-[rgba(248,249,249,0.1)] hover:bg-[rgba(248,249,249,0.3)] shadow backdrop-blur-lg h-10 rounded-full w-10">
          <SportsEsportsIcon style={{ color: "white" }} />
        </button>
        <button className="hidden md:block mx-2 bg-[rgba(248,249,249,0.1)] hover:bg-[rgba(248,249,249,0.3)] shadow backdrop-blur-lg h-10 rounded-full w-10">
          <OndemandVideoIcon style={{ color: "white" }} />
        </button>
        <button className="mx-2 bg-[rgba(248,249,249,0.1)] hover:bg-[rgba(248,249,249,0.3)] shadow backdrop-blur-lg h-10 rounded-full w-10">
          <MoreVertIcon style={{ color: "white" }} />
        </button>
      </div>
    </div>
  );
};

export default TopRightButtons;
