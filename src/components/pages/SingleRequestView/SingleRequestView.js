import React from "react";
import "../../../App.css";
import img from "../../../assets/images/Slider/Slider3.jpeg";
import { CustomHeader } from "../../Shared/CustomHeader/CustomHeader";
import { SingleViewRequestInformations } from "./SingleViewRequestInformations";

export const SingleRequestView = () => {
    return (
        <div>
            <CustomHeader title="Admin" />
            <div className="flex justify-center h-[54px] items-center mt-[39px]">
                <div className="shadow-[0px_5px_30px_rgba(35,57,184,0.2)] bg-white rounded-[10px] h-full px-[39px]">
                    <div className="flex justify-center items-center gap-x-[28px]">
                        <button className="mt-4 font-medium leading-tight text-gray-800">Activity</button>
                        <button className={`mt-4 font-medium leading-tight text-gray-800`}>Profile</button>
                        <button className={`mt-4 font-medium leading-tighttext-gray-800`}>
                            Friends <sup className="text-white bg_Color p-1 rounded-full text-[10px]">1</sup>
                        </button>
                        <button className="mt-4 font-medium leading-tight text-gray-800">
                            heading<sup className="text-white bg_Color p-1 rounded-full text-[10px]">5</sup>
                        </button>
                        <button className="mt-4 font-medium leading-tight text-gray-800">
                            Message<sup className="text-white bg_Color p-1 rounded-full text-[10px]">14</sup>
                        </button>
                    </div>
                </div>
            </div>
            <div className="custom-container mt-[26px]">
                <button className="py-[16px] px-[22px] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-[12px] text-white font-bold text-[32px] leading-[44px]">
                    Registration Request
                </button>
                <div className="mt-[26px] flex justify-center">
                    <section className="card w-[385px] h-[280px] bg-[#301B6B] rounded-[8px] py-[24px] px-[35px]">
                        <div className="w-full flex justify-center h-[37px] items-center gap-x-[20px]">
                            <span className="font-bold text-[15px] leading-[26px] text-white">Current Status:</span>{" "}
                            <span className="py-[9px] px-[31px] bg-white rounded-[4px] shadow-[4px_4px_8px_4px_rgba(0,0,0,0.1)]">Pending</span>
                        </div>

                        <div className="mt-[28px] flex gap-x-[24px] items-center">
                            <img className="w-[85px] h-[85px] rounded-full" src={img} alt="profile" />
                            <div>
                                <h1 className="text-[24px] font-normal leading-[29px] text-white">Jhon William</h1>
                                <h3 className="text-[20px] font-normal leading-[29px] text-white mt-[16px]">Age: 26</h3>
                            </div>
                        </div>
                        <div className="flex justify-center mt-[44px]">
                            <button className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white rounded-[4px] py-[9px] px-[14px]">
                                View Request
                            </button>
                        </div>
                    </section>
                </div>
                <div className="max-w-[523px] mx-auto flex justify-around mt-[44px]">
                    <button className="py-[9px] px-[20px] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-[4px] text-white font-medium text-[16px] leading-[20px]">
                        Approve
                    </button>
                    <button className="py-[9px] px-[20px] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-[4px] text-white font-medium text-[16px] leading-[20px]">
                        Reject
                    </button>
                    <button className="py-[9px] px-[20px] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-[4px] text-white font-medium text-[16px] leading-[20px]">
                        Send for Resubmit
                    </button>
                </div>
                <SingleViewRequestInformations />
                <div className="max-w-[523px] mx-auto flex justify-around mt-[44px]">
                    <button className="py-[9px] px-[20px] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-[4px] text-white font-medium text-[16px] leading-[20px]">
                        Approve
                    </button>
                    <button className="py-[9px] px-[20px] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-[4px] text-white font-medium text-[16px] leading-[20px]">
                        Reject
                    </button>
                    <button className="py-[9px] px-[20px] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-[4px] text-white font-medium text-[16px] leading-[20px]">
                        Send for Resubmit
                    </button>
                </div>
            </div>
        </div>
    );
};
