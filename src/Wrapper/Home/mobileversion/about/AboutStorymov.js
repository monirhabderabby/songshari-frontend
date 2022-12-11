import React from "react";
import aboutUsStoryImg from "../../../../assets/images/AboutUs/aboutUsStory.jpg";

const AboutUsStory = () => {
  return (
    <div className="md:mb-10">
      <h1 className="text-lg font-semibold ml-4 md:mt-6 leading-[44px]">
        Our Story
      </h1>
      <div className=" mx-auto  items-start h-[511px] ml-4 mr-4">
        <div className="">
          <img
            className="w-[584px] rounded-[30px]"
            src={aboutUsStoryImg}
            alt="story"
          />
        </div>
        <div className="text-[#757575]">
          <p className="mb-4 ml-2 mt-4">
            Shongshari.Com dreams of a society where every family lives happily
            and prosperously through harmony and mutual understanding,
            overcoming family feuds, obstacles, and all kinds of complications.
            None in the world is 100% perfect, so no family can be 100% perfect
            either.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsStory;
