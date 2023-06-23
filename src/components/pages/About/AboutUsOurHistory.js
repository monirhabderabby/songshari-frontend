import React from "react";
import line from "../../../assets/images/AboutUs/Line.png";
import articleImg3 from "../../../assets/images/AboutUs/aboutUsOurHistory3.jpg";
import VarientAnimation from "../../../assets/utilities/Animation/VarientAnimation";
import "./animated.module.css";
const AboutUsOurHistory = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto flex items-start h-auto gap-16">
                <div className="w-96 text-[#757575] leading-7 flex-1">
                    <div className="mb-[12px]">
                        <h1 className="text-[#333333] text-[40px] font-bold">Our History</h1>
                        <img className="mt-2 animate-bounce" src={line} alt="line" />
                    </div>
                    <p className="mb-4">
                        Shongshari.Com started its journey as Bangladesh's first all-in-all family management platform in November 2022 by launching
                        its main feature “Matrimony & Matchmaking Service”. However, as a registered private company, the founders of Shongshari.Com
                        started building this platform several years ago.
                    </p>
                    <p className="mb-4">
                        In addition to helping people choose their perfect life partner at home, Shongshari.Com initiated to ensure harmony between
                        family happiness and time by ensuring the maximum use of modern technology by helping in all kinds of small and big matters of
                        the family
                    </p>
                </div>
                <div className="flex-1">
                    <VarientAnimation direction="left" delay={0.3}>
                        <img className="w-[584px] rounded-[30px]" src={articleImg3} alt="story" />
                    </VarientAnimation>
                </div>
            </div>
            <div className="max-w-5xl mx-auto flex items-start gap-x-16 mt-[20px]">
                <div className="flex-1">
                    <VarientAnimation direction="up" delay={0.3}>
                        <img className="w-[584px] rounded-[30px]" src={articleImg3} alt="story" />
                    </VarientAnimation>
                </div>
                <div className="w-96 text-[#757575] leading-7 flex-1">
                    <p className="mb-4">
                        With the dream of changing society and making the family system easier, a group of young university students moved forward to
                        implement the dream called Shongshari.Com.
                    </p>
                    <p className="mb-4">
                        Despite being young, the entrepreneurs of Shongshari.Com have been involved in various organizational work at
                        school-college-varsity and institutional levels, so all of them already had 5-10 years of technical and physical work
                        experience when they got involved with Shongshari.Com.
                    </p>
                    <p className="mb-4">
                        After a long year of field survey, development, and execution, on November 30, 2022, the official website of Shongshari.com
                        was launched with its core feature of "Matrimony and Matchmaking".
                    </p>
                </div>
            </div>
            <div className="max-w-5xl text-[#757575] leading-7 mx-auto mt-[20px]">
                <p className="mb-4">
                    In addition to getting more than half a thousand visitors on the first day, The site got 100 registered members on the same day.
                    Many attractive features including premium membership with more benefits, Legal Assistance feature to provide legal services,
                    Professional assistance service feature to get personal assistance in marriage & family management are going to be added to the
                    site and app of Shongshari.com very soon.
                </p>
                <p className="mb-4 text-[20px] ">
                    Shongshari.Com has its well equipped office premises at House:884, Road:11, Avenue: 02, Mirpur DOHS, Dhaka-1216, where about 10
                    technically sound and experienced people are working to operate the sales, marketing & administrative activities.
                </p>
                <p className="mb-4 text-[20px]">
                    As a Privet company, Shongshari.Com has three (03) shareholders, Who are acting as the Chairman, Managing Director, and director
                    of the company. All of them are well experienced, committed, and very conscious about their roles.
                </p>
            </div>
        </div>
    );
};

export default AboutUsOurHistory;
