// configuration
import React from "react";

// Third party packages
import { BiUserCircle } from "react-icons/bi";
import { TbMessage } from "react-icons/tb";

// components
import { ageCalculator } from "../../../../assets/utilities/AgeCalculation/ageCalculator";

export const MatchesDesktopCard = ({ info }) => {
    // js variable declaration
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
        <div className=" rounded-lg shadow-xl colorrrrrr">
            <p className="bg-white w-28 text-center ml-3 mt-3 text-[12px] py-[6px] px-[8px] rounded-[8px]">{info?.percentage}% Match</p>
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
};
