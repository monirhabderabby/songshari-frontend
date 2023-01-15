import React from "react";
import { AiFillBell } from "react-icons/ai";
import { BottomNav } from "../../../Wrapper/Home/mobileversion/BottomNav";

export const NotificationForMobile = () => {
    return (
        <div className=" min-h-screen w-full">
            <div className="h-[55px] sticky top-0 w-full flex items-center justify-center bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white shadow-xl">
                <p className="text-center">Notification</p>
            </div>
            <div className="w-full flex flex-col">
                <div className="min-h-[60px] py-[6px] px-[24px] flex items-center justify-start border-b-[1px] border-gray-100">
                    <div className="bg-gray-200 h-[40px] w-[40px] rounded-full flex justify-center items-center mr-[10px]">
                        <AiFillBell />
                    </div>
                    <div className="flex-1">
                        <p className="text-[12px] whitespace-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, tenetur.</p>
                        <p className="text-[10px] text-gray-400 font-Inter font-normal my-[3px]">40 minute ago</p>
                    </div>
                </div>
                <div className="min-h-[60px] py-[6px] px-[24px] flex items-center justify-start border-b-[1px] border-gray-100">
                    <div className="bg-gray-200 h-[40px] w-[40px] rounded-full flex justify-center items-center mr-[10px]">
                        <AiFillBell />
                    </div>
                    <div className="flex-1">
                        <p className="text-[12px] whitespace-normal">Lorem ipsum dolor sit, amet consectetur</p>
                        <p className="text-[10px] text-gray-400 font-Inter font-normal my-[3px]">40 minute ago</p>
                    </div>
                </div>
            </div>
            <BottomNav />
        </div>
    );
};
