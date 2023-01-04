// normal import
import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { TbMessage } from "react-icons/tb";

// 3rd party package
import { useGetMatchedUsersQuery } from "../../../Redux/features/connections/connectionApi";
import { AiOutlineWarning } from "react-icons/ai";
// import { FiUsers } from "react-icons/fi";

// components import
import { ageCalculator } from "../../../assets/utilities/AgeCalculation/ageCalculator";
import MatchersModalForm from "../MatchPreference/MatchersModalForm";
import { MatchesLoader } from "../../shared/Cards/Loader/Matches/MatchesLoader";

// css files
import "./Matches.css";

export const Matches = () => {
    // hooks variables
    const { data, isLoading, error } = useGetMatchedUsersQuery();
    const [mathchesModalOpen, setMatchesModalOpen] = useState(false);

    let content = null;

    if (isLoading) {
        content = (
            <div className="flex justify-center gap-4 w-full">
                <MatchesLoader />
                <MatchesLoader />
            </div>
        )
    }
    /* else if (!isLoading && isError && error?.data?.message?.includes("No match preference")) {
        content = (
            <div className="flex items-center justify-center mt-[30%] w-full">
                <FiUsers className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">No Matches Found!</p>
            </div>
        );
    }  */
    /* else if (!isLoading && isError && error?.data?.message?.includes("Cannot check authentication")) {
        content = (
            <div className="flex items-center justify-center mt-[30%] w-full">
                <AiOutlineWarning className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">Authentication failed! Try again.</p>
            </div>
        );
    }  */
    else if (!isLoading && error?.status?.includes("PARSING_ERROR")) {
        content = (
            <div className="flex items-center justify-center mt-[30%] w-full">
                <AiOutlineWarning className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">Server Error</p>
            </div>
        );
    }
    /* else if (!isLoading && data?.data?.user?.length === 0) {
        content = (
            <div className="flex items-center justify-center mt-[30%] w-full">
                <FiUsers className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">No User Found!</p>
            </div>
        );
    }  */
    else if (!isLoading && data?.data?.user?.length > 0) {
        content = (
            <div className="w-full grid grid-cols-1 gap-y-4 px-4">
                {data?.data?.users.map((info, index) => {
                    return (
                        <div key={index} className=" rounded-lg lg:max-w-lg shadow-xl colorrrrrr">
                            <p className="bg-white w-28 text-center ml-3 mt-3 text-[12px] py-[6px] px-[8px] rounded-[8px]">
                                {info?.percentage}% Match
                            </p>
                            <img src={info?._doc?.profilePhoto} className="w-20 h-20 mx-auto rounded-full mt-4" alt="profile"></img>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-white">{info?._doc?.firstName}</h2>
                                <p className="text-white">Age : {ageCalculator(info?._doc?.dateOfBirth)} </p>
                                <p className="text-white">{info?._doc?.hometown}, Bangladesh </p>
                                <div className="flex justify-center pt-5 gap-x-[24px] mb-[15px]">
                                    <button className="flex justify-center items-center h-[44px] w-[44px] hover:bg-white bg-[#FFDFF4] rounded-full ">
                                        <TbMessage className="text-[#E41272] h-[20px] w-[20px]" />
                                    </button>
                                    <button className="flex justify-center items-center h-[44px] w-[44px] hover:bg-white bg-[#FFDFF4] rounded-full ">
                                        <BiUserCircle className="text-[#E41272] h-[20px] w-[20px]" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="w-full lg:max-w-[521px] mx-auto">
            <button
                className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white p-2 rounded mb-3"
                onClick={() => setMatchesModalOpen(true)}
            >
                Matches Modal
            </button>
            <div className="w-full grid lg:grid-cols-2 gap-4">
                {content}
            </div>
            <MatchersModalForm {...{ mathchesModalOpen, setMatchesModalOpen }} />
        </div>
    );
};
