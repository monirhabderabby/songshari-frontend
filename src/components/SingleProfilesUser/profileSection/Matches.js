// normal import
import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { TbMessage } from "react-icons/tb";

// 3rd party package
// import { FiUsers } from "react-icons/fi";

// components import
import { MatchesLoader } from "../../shared/Cards/Loader/Matches/MatchesLoader";
import MatchersModalForm from "../MatchPreference/MatchersModalForm";

// css files
import { ageCalculator } from "../../../assets/utilities/AgeCalculation/ageCalculator";
import { useGetMatchPreferencesQuery } from "../../../Redux/features/MatchesPreferences/matchesPreferenceApi";
import "./Matches.css";

export const Matches = () => {
    // hooks variables
    const { data, isLoading } = useGetMatchPreferencesQuery();
    const [mathchesModalOpen, setMatchesModalOpen] = useState(false);

    let content = null;

    if (isLoading) {
        content = (
            <div className="flex justify-center gap-4 w-full">
                <MatchesLoader />
                <MatchesLoader />
                <MatchesLoader />
                <MatchesLoader />
            </div>
        );
    } else if (!isLoading && data?.matchedData.length > 0) {
        content = (
            <div className="w-full grid grid-cols-2 gap-y-4 gap-2">
                {data?.matchedData?.map((info, index) => {
                    console.log(info);
                    let name;
                    let profilePhoto;
                    let age;

                    age = info?.data?.dateOfBirth ? ageCalculator(info?.data?.dateOfBirth) : "20";
                    name = info.data.firstName + " " + info.data.lastName;
                    if (name.length > 13) {
                        name = name.slice(0, 12) + " ...";
                    }
                    profilePhoto = info.data.profilePhoto
                        ? info.data.profilePhoto
                        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

                    return (
                        <div key={index} className=" rounded-lg shadow-xl colorrrrrr">
                            <p className="bg-white w-28 text-center ml-3 mt-3 text-[12px] py-[6px] px-[8px] rounded-[8px]">
                                {info?.percentage}% Match
                            </p>
                            <img src={profilePhoto} className="w-20 h-20 mx-auto rounded-full mt-4" alt="profile"></img>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-white">{name}</h2>
                                <p className="text-white">Age : {age} </p>
                                <p className="text-white">Dhaka, Bangladesh </p>
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
    // else if (!isLoading && error?.status?.includes("PARSING_ERROR")) {
    //     content = (
    //         <div className="flex items-center justify-center mt-[30%] w-full">
    //             <AiOutlineWarning className="text-[48px] text-gray-400" />
    //             <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">Server Error</p>
    //         </div>
    //     );
    // }
    /* else if (!isLoading && data?.data?.user?.length === 0) {
        content = (
            <div className="flex items-center justify-center mt-[30%] w-full">
                <FiUsers className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">No User Found!</p>
            </div>
        );
    }  */

    return (
        <div className="w-full lg:max-w-[521px] mx-auto">
            <button
                className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white p-2 rounded mb-3"
                onClick={() => setMatchesModalOpen(true)}
            >
                Matches Modal
            </button>
            {content}
            <MatchersModalForm {...{ mathchesModalOpen, setMatchesModalOpen }} />
        </div>
    );
};
