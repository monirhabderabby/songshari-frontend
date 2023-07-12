import React from 'react';
import { useNavigate } from "react-router";

const GoMobActivityPremium = ({ canPost, setCanPost }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => setCanPost(true)}
        className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
      ></div>
      <div className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-xl sm:max-w-full w-[400px] space-y-4 bg-white p-6 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <p className="text-white font-semibold ">
          You are not allowed to make post in timeline. Go for premium to make
          unlimited post in timeline
        </p>
        <button
          onClick={() => navigate("/packages")}
          className="bg-white px-4 py-2 text-lg font-bold rounded hover:bg-gray-100"
        >
          Go Premium
        </button>
      </div>
    </>
  );
};

export default GoMobActivityPremium;
