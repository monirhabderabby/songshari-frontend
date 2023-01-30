import React from "react";
import aboutUsMission from "../../../../assets/images/AboutUs/aboutUsMission1.jpg";
import lineImg from "../../../../assets/images/AboutUs/Line.png";
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";

export const ShongShariMissionMobile = () => {
    return (
        <div className="max-w-[1024px] mx-auto px-6">
            <MobileBackButton name="Our Mission" />
            <div className="mb-[64px]">
                <h3 className="text-[#333333] text-[22px] font-bold font-Poppins">Our Mission</h3>
                <img src={lineImg} alt="line" className="mt-2 animate-bounce" />
                <div className="mt-[12px] text-[#757575] text-[14px] font-normal font-Inter">
                    <p className="mb-4">
                        "Choosing the Perfect Life Partner" is the core condition of a happy and beautiful family. Shongshari.Com started its journey
                        to become the most reliable source of finding the right life partner. Not only in the terms of finding the right life partner,
                        but Shongshari.Com also wants to support and aid its users and well-wishers in every step of their family journey. Thus, in
                        addition to matchmaking and matchmaking, Shongshari.Com is developing a Legal Assistance Platform built with the best lawyers
                        in the country to solve all kinds of legal complications related to the family.
                    </p>
                    <img src={aboutUsMission} alt="mission" className="h-[220px] w-full my-8" />
                    <p>
                        In addition, there will be Exclusive Kazi Service for marital needs. Highly Skilled Professional Service Providers of
                        Shongshari.Com would be available to help and assist you in every step of your daily life. Regular talk shows and special
                        courses for the users of Shongshari.com about marriage or any necessary work would be helpful to make anyone well-prepared to
                        maintain a family easily.
                    </p>
                </div>
            </div>
        </div>
    );
};
