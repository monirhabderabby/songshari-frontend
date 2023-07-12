import React from "react";
import aboutUsMission from "../../../../assets/images/AboutUs/aboutUsMission1.jpg";
import lineImg from "../../../../assets/images/AboutUs/Line.png";
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";

export const ShongShariStory = () => {
    return (
        <div className="max-w-[1024px] mx-auto px-6">
            <MobileBackButton name="Our Story" />
            <div className="mb-[64px]">
                <h3 className="text-[#333333] text-[22px] font-bold font-Poppins">Our Story</h3>
                <img src={lineImg} alt="line" className="mt-2 animate-bounce" />
                <div className="mt-[12px] text-[#757575] text-[14px] font-normal font-Inter">
                    <img src={aboutUsMission} alt="mission" className="h-[220px] w-full mb-8" />
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
