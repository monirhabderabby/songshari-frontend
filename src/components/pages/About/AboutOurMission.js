import React from "react";
import aboutUsMission1 from "../../../assets/images/AboutUs/aboutUsMission1.jpg";
import aboutUsMission2 from "../../../assets/images/AboutUs/aboutUsMission2.jpg";
import VarientAnimation from "../../../assets/utilities/Animation/VarientAnimation";

const AboutOurMission = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto mt-20 flex items-center gap-[70px]">
                <div className="text-center flex-1 flex items-center justify-center">
                    <div>
                        <h3 className="text-3xl font-semibold leading-10 mb-9">Our Mission</h3>
                        <p className="text-[#757575] text-lg leading-8 text-left">
                            "Choosing the Perfect Life Partner" is the core condition of a happy and beautiful family. Shongshari.Com started its
                            journey to become the most reliable source of finding the right life partner. Not only in the terms of finding the right
                            life partner, but Shongshari.Com also wants to support and aid its users and well-wishers in every step of their family
                            journey. Thus, in addition to matchmaking and matchmaking, Shongshari.Com is developing a Legal Assistance Platform built
                            with the best lawyers in the country to solve all kinds of legal complications related to the family.
                        </p>
                        <p className="text-[#757575] text-lg leading-8 text-left">
                            In addition, there will be Exclusive Kazi Service for marital needs. Highly Skilled Professional Service Providers of
                            Shongshari.Com would be available to help and assist you in every step of your daily life. Regular talk shows and special
                            courses for the users of Shongshari.com about marriage or any necessary work would be helpful to make anyone well-prepared
                            to maintain a family easily.
                        </p>
                    </div>
                </div>
                <VarientAnimation direction="left" delay={0.3}>
                    <div className="relative flex-1 mb-12">
                        <img className="z-0 rounded-bl-[80px] w-[476px] h-[415px]" src={aboutUsMission1} alt="" />
                        <img className="absolute -bottom-12 rounded-tr-[128px] rounded-bl-[127px] w-72 z-10" src={aboutUsMission2} alt="" />
                    </div>
                </VarientAnimation>
            </div>
        </div>
    );
};

export default AboutOurMission;
