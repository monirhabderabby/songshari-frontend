import React from "react";
import aboutUsStoryImg from "../../../assets/images/AboutUs/aboutUsStory.jpg";

const AboutUsStory = () => {
    return (
        <div>
            <h1 className="text-3xl font-semibold text-center leading-[44px] mt-20 mb-12">Our Story</h1>
            <div className="max-w-5xl mx-auto flex items-start h-[511px] gap-16">
                <div className="flex-1">
                    <img className="w-[584px] rounded-[30px]" src={aboutUsStoryImg} alt="story" />
                </div>
                <div className="w-96 text-[#757575] leading-7 flex-1">
                    <p className="mb-4">
                        Shongshari.Com dreams of a society where every family lives happily and prosperously through harmony and mutual understanding,
                        overcoming family feuds, obstacles, and all kinds of complications. None in the world is 100% perfect, so no family can be
                        100% perfect either. Everything has to be made perfect according to one's necessities, such as melting the alloy from gold and
                        extracting pure gold. The main goal of Shongshari.Com is to remove this alloy from every family in society and build a real
                        happy family.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsStory;
