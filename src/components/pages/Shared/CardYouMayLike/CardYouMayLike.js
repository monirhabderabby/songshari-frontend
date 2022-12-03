import React from "react";
import { BiUserPlus } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
export const CardYouMayLike = ({ profile }) => {
    return (
        <div
            className="bg-white rounded-[20px] flex flex-col items-center justify-center px-3 py-2"
            style={{ boxShadow: "0px 4px 4px rgba(62, 73, 84, 0.04)" }}
        >
            <img className="w-[45px] h-[45px] rounded-full" src={profile?.profilePhoto} alt="Not Available" />
            <h4 className="text-xs leading-5 font-semibold">{profile?.firstName}</h4>
            <div className="flex justify-between items-center gap-4">
                <span className="bg-[#FFDFF4] p-3 rounded-full">
                    <MdMessage className="text-[#E41272] text-xl" />
                </span>
                {
                    <span className="bg-[#FFDFF4] p-3 rounded-full">
                        <BiUserPlus className="text-[#E41272] text-xl" />
                    </span>
                }
            </div>
        </div>
    );
};
