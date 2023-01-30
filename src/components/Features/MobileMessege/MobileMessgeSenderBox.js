import React, { useState } from "react";

// Third party packages
import { AiFillLike } from "react-icons/ai";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { MdOutlineArrowForwardIos } from "react-icons/md";

// Components
import mic from "../../../assets/images/messges/Audio.svg";
import gallery from "../../../assets/images/messges/Gallery.svg";

export const MobileMessgeSenderBox = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="h-[52px] w-full bg-white">
            <section className="h-full flex justify-between items-center px-[15px] gap-x-[10px]">
                <div>
                    <MdOutlineArrowForwardIos className="h-[24px] w-[24px]" onClick={() => setOpen(!open)} />
                </div>
                {open && (
                    <div className="flex items-center gap-x-[10px] duration-300">
                        <img src={gallery} alt="gallery" />
                        <img src={mic} alt="audio" />
                    </div>
                )}
                <div className="h-[36px] bg-[rgba(0,0,0,0.05)] flex-1 rounded-[18px] max-w-[355px] relative transition-all duration-500">
                    <input type="text" className="bg-transparent w-full h-full rounded-[18px] -z-30 outline-none" />
                    <HiOutlineEmojiHappy className="absolute right-2 top-[6px] z-50 h-[24px] w-[24px] text-[#A32BCA]" />
                </div>
                <div>
                    <AiFillLike className="h-[24px] w-[24px] text-[#A32BCA]" />
                </div>
            </section>
        </div>
    );
};
