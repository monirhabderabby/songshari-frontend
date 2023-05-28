// configuration
import React from "react";

// Third party packages
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoVideocam } from "react-icons/io5";

export const MessegesHeader = ({ profile }) => {
    // console.log(profile)
    return (
        <div className="h-[91px] w-full px-[15px] flex items-center shadow-[0px_12px_23px_rgba(62,73,84,0.04)]">
            <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-x-[37px]">
                    <img
                        className="h-[58px] w-[58px] rounded-full"
                        src={profile?.profilePhoto || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                        alt="profile"
                    />
                    <div>
                        <p className="text-[20px] text-[#000000] font-normal">{profile?.firstName + " " + profile?.lastName}</p>
                        <p className="text-[16px] font-normal text-[#999999]">Last seen 4:23 AM</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-[16px]">
                    <div className="bg-[#ECF0FF] w-[48px] h-[48px] rounded-full flex justify-center items-center">
                        <BsFillTelephoneFill className="text-[#A32BCA] text-[22px]" />
                    </div>
                    <div className="bg-[#ECF0FF] w-[48px] h-[48px] rounded-full flex justify-center items-center">
                        <IoVideocam className="text-[#A32BCA] text-[22px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};
