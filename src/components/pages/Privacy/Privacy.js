import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import Footer from "../../shared/Footer/Footer";
import ".././../../App.css";
import { PolicyPage } from "./PolicyPage";

export const Privacy = () => {
    const links = [
        {
            id: 1,
            name: "Intregation and Definitions",
            link: "/privacy-policy",
        },
        {
            id: 2,
            name: "Collecting and Using Your Personal Data",
            link: "/privacy-policy",
        },
        {
            id: 3,
            name: "Personal Data",
            link: "/privacy-policy",
        },
        {
            id: 4,
            name: "Usage Data",
            link: "/privacy-policy",
        },
        {
            id: 5,
            name: "Tracking Technologies and Cookies",
            link: "/privacy-policy",
        },
        {
            id: 6,
            name: "Business Transactions",
            link: "/privacy-policy",
        },
    ];
    return (
        <>
            <CustomHeader title="Privacy Policy" />
            <div className="bg-[#FAFBFF] pt-[60px]">
                <section className="custom-container w-[936px] mb-[88px] shadow-[0px_1px_24px_rgba(0,0,0,0.08)] rounded-[3px]">
                    <div class="flex h-[50px] items-center bg-white p-[4px]">
                        <span className="p-[18px]">
                            <AiOutlineSearch className="text-[#4A4A4A]" />
                        </span>
                        <input type="text" class="h-full w-full bg-[#FAFBFF] px-[8px]" />
                    </div>
                </section>
                <section className="flex custom-container gap-x-[214px]">
                    <div className="bg-[#FFFFFF] h-[490px] px-[45px] py-[43px]">
                        <p className="font-medium mb-[38px] font-sans text-[12px] text-[#00A4BD]">Privacy Policy</p>
                        <div className="flex flex-col w-[240px]">
                            <button className="w-full  flex items-center bg-[#A42BC9] rounded-[2px] text-white p-[12px]">
                                Last updated: August 20,2021
                            </button>
                            {links?.map(link => {
                                return (
                                    <button
                                        key={link.id}
                                        className="w-full p-[12px] flex items-center text-left text-[#33475B] font-normal text-[14px]"
                                    >
                                        {link.name}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <PolicyPage />
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};