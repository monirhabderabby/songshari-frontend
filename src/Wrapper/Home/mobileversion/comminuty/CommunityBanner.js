import React from "react";
import { Link } from "react-router-dom";

export const CommunityBanner = () => {
  return (
    <div>
      <div className="grid grid-cols-3">
        <Link to={"/setting"} className="col-span-2">
          <img
            src="https://i.ibb.co/stTYBVf/Arrow-1.png"
            alt=""
            className="ml-8 mt-5"
          ></img>
        </Link>
        <Link className="flex justify-end">
          <img
            src="https://i.ibb.co/x2L99Cr/Arrow-2.png"
            alt=""
            className="mt-5 mr-8"
          ></img>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4 px-5 md:px-8 py-2 md:py-4 md:w-3/4 md:mx-auto mt-10 bg-white">
        <div>
          <img
            src="https://i.ibb.co/9hFpSXb/Ellipse-8.png"
            className=""
            alt=""
          ></img>
        </div>
        <div className="col-span-2 my-auto">
          <h1 className="text-lg leading-8 font-semibold">
            Shongshari.com Title
          </h1>
          <p className="text-xs text-[#757575]">
            Lorem ipsum dolor sit amet consectetur. Risus iaculis gravida turpis
            metus sed tincidunt.
          </p>
          <Link className="text-[#8643B8] text-xs leading-7">
            Shongshari.com
          </Link>
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <img src="https://i.ibb.co/NYPhrpw/Capture.png" alt=""></img>
      </div>
      <div className="my-8">
        <h1 className="w-2/3 mx-auto font-semibold text-lg leading-[22px] text-right">
          Success is making those who believed in you look brilliant.
        </h1>
        <p className="mt-4 text-[#762BB0] text-right w-2/3 mx-auto">
          Dharmesh Shah
        </p>
        <p className="text-sm text-[#3E5974] text-right w-2/3 mx-auto">
          CTO and Founder of HubSpot
        </p>
      </div>
    </div>
  );
};
