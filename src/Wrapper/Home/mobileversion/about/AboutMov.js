import React from "react";
import { Link } from "react-router-dom";
import { BottomNav } from "../BottomNav";
import AboutBanner from "./AboutBanner";
import AboutMissionMov from "./AboutMissionMov";
import AboutStorymov from "./AboutStorymov";

export const AboutMov = () => {
  return (
    <div>
      <div className="flex justify-between">
        <Link to={"/"}>
          <img
            src="https://i.ibb.co/stTYBVf/Arrow-1.png"
            alt=""
            className="col-span-2 ml-8 mt-5"
          ></img>
        </Link>
        <Link to={"/"}>
          <img
            src="https://i.ibb.co/x2L99Cr/Arrow-2.png"
            alt=""
            className="col-span-2 mr-8 mt-5"
          ></img>
        </Link>
      </div>
      <AboutBanner></AboutBanner>
      <AboutMissionMov></AboutMissionMov>
      <AboutStorymov></AboutStorymov>
      <BottomNav></BottomNav>
    </div>
  );
};
