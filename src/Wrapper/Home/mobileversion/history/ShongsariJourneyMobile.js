// configuration
import React from "react";

// Components
import aboutUsMission from "../../../../assets/images/AboutUs/aboutUsMission1.jpg";
import aboutUsHistoryImage from "../../../../assets/images/AboutUs/aboutUsOurHistory3.jpg";

import lineImg from "../../../../assets/images/AboutUs/Line.png";
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";
import { BottomNav } from "../BottomNav";

export const ShongsariJourneyMobile = () => {
    return (
        <div className="max-w-[1024px] mx-auto px-6">
            <MobileBackButton name="Journey" />
            <div className="mb-[64px]">
                <h3 className="text-[#333333] text-[22px] font-bold font-Poppins">Our Journey</h3>
                <img src={lineImg} alt="line" className="mt-2 animate-bounce" />

                {/* Content */}
                <div className="mt-[12px] text-[#757575] text-[14px] font-normal font-Inter">
                    <p className="mb-4">
                        Shongshari.Com started its journey as Bangladesh's first all-in-all family management platform in November 2022 by launching
                        its main feature “Matrimony & Matchmaking Service”. However, as a registered private company, the founders of Shongshari.Com
                        started building this platform several years ago.
                    </p>
                    <p>
                        In addition to helping people choose their perfect life partner at home, Shongshari.Com initiated to ensure harmony between
                        family happiness and time by ensuring the maximum use of modern technology by helping in all kinds of small and big matters of
                        the family
                    </p>
                    <img className="my-[8px]" src={aboutUsHistoryImage} alt="aboutUs" />
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
                    <img className="my-[8px]" src={aboutUsMission} alt="mission1" />
                    <p className="mb-4">
                        In addition to getting more than half a thousand visitors on the first day, The site got 100 registered members on the same
                        day. Many attractive features including premium membership with more benefits, Legal Assistance feature to provide legal
                        services, Professional assistance service feature to get personal assistance in marriage & family management are going to be
                        added to the site and app of Shongshari.com very soon.
                    </p>
                    <p className="mb-4 text-[#757575] leading-7 mx-auto mt-[20px]">
                        Shongshari.Com has its well equipped office premises at House:884, Road:11, Avenue: 02, Mirpur DOHS, Dhaka-1216, where about
                        10 technically sound and experienced people are working to operate the sales, marketing & administrative activities.
                    </p>
                    <p className="mb-4 text-[#757575] leading-7 mx-auto mt-[20px]">
                        As a Privet company, Shongshari.Com has three (03) shareholders, Who are acting as the Chairman, Managing Director, and
                        director of the company. All of them are well experienced, committed, and very conscious about their roles.
                    </p>
                </div>
            </div>
            <BottomNav />
        </div>
    );
};
