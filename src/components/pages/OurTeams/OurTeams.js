import React from "react";
import "../../../App.css";
import img from "../../../assets/images/olivia.png";
import dribble from "../../../assets/images/Social Icons/dribble.png";
import linkedIn from "../../../assets/images/Social Icons/linkedIn.png";
import twitter from "../../../assets/images/Social Icons/twitter.jpg";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import Footer from "../../shared/Footer/Footer";

export const OurTeams = () => {
    const profile = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <>
            <CustomHeader title="Team Member" />
            <section className="bg-[#FAFBFF] pb-[40px]">
                <div className="custom-container">
                    <div className="w-full flex flex-col items-center font-Inter gap-y-[20px] pt-[70px]">
                        <p className="text-[#6941C6] text-[16px] font-semibold">Shongshari.com</p>
                        <h1 className="font-semibold text-[36px] text-[#101828]">Meet our team</h1>
                        <p className="text-[20px] text-[#667085] font-normal text-center w-[768px]">
                            Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best
                            work.
                        </p>
                        <p className="shadow-[0px_1px_2px_rgba(16,24,40,0.05)] rounded-[8px] border-[1px] border-[#D0D5DD] py-[12px] px-[20px] mt-[40px]">
                            About us
                        </p>
                    </div>
                </div>
                <div className="custom-container grid grid-cols-4 gap-x-[32px] gap-y-[60px]">
                    {profile.map(p => {
                        return (
                            <div key={p} className="w-[280px]">
                                <img src={img} alt="profile" className="rounded-tl-[30px] rounded-tr-[30px]" />
                                <div className="pt-[24px]">
                                    <p className="text-[#E22986] font-medium text-[18px] mb-[4px]">Candice Wu</p>
                                    <p className="text-[#A42BC8] font-normal  text-[18px] mb-[16px]">Backend Developer</p>
                                    <p className="font-normal text-[16px] text-[#667085]">Lead backend dev at Clearbit. Former Clearbit and Loom.</p>
                                </div>
                                <div className="flex items-center mt-[24px] gap-x-[20px]">
                                    <img src={twitter} alt="social" />
                                    <img src={linkedIn} alt="social" />
                                    <img src={dribble} alt="social" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
            <Footer />
        </>
    );
};
