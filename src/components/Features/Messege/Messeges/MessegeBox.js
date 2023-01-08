import React from "react";

// thids party package
import { AiFillLike } from "react-icons/ai";

// components
import mic from "../../../../assets/images/messges/Audio.svg";
import emoji from "../../../../assets/images/messges/Emoji.svg";
import gallary from "../../../../assets/images/messges/Gallery.svg";
import photo from "../../../../assets/images/messges/Photo.svg";
import { MessegeList } from "./MessegeList";
import { MessegesHeader } from "./MessegesHeader";
export const MessegeBox = () => {
    return (
        <div className="h-full bg-white rounded-[20px] shadow-[0px_3px_4px_rgba(62,73,84,0.04)] relative">
            <MessegesHeader />
            <MessegeList />
            <div className="h-[92px] bg-white w-full absolute bottom-0 px-[15px] ">
                <div className="flex items-center h-full gap-x-[24px]">
                    <input type="text" className="flex-1 h-full outline-none text-[#B0B0B0] text-[16px] px-[29px]" placeholder="Type messege" />
                    <img src={photo} alt="gallary" className="text-[22px]" />
                    <img src={gallary} alt="gallary" className="text-[22px]" />
                    <img src={mic} alt="gallary" className="text-[22px]" />
                    <img src={emoji} alt="gallary" className="text-[22px]" />
                    <AiFillLike className="text-[#A32BCA] text-[22px]" />
                    <button className="bg-[#EFF3FF] rounded-[20px] h-[64px] w-[121px] flex justify-center items-center text-[#A32BCA] text-[16px] font-medium">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};
