// Configuration
import React from "react";

// Third party packages
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router";
import customFunc from "../../../assets/utilities/customFunc";

export const MobileMessageHeader = ({ profile }) => {
    // console.log(profile)
    const navigate = useNavigate();

    // own functions
    const { generateRoomID } = customFunc;

    // function declaration
    const callHandler = () => {
        navigate(`/group-call/${generateRoomID()}`);
    };
    return (
        <div className="w-full h-[59px] bg-white fixed top-0 px-[16px]">
            <div className="absolute top-[20px]">
                <AiOutlineArrowLeft onClick={() => navigate(-1)} />
            </div>
            <div className=" pl-[30px] w-full h-full flex items-center justify-between max-w-[990px]">
                <div className="flex items-center h-full gap-x-[10px]">
                    <img
                        className="w-[36px] h-[36px] rounded-full"
                        // src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
                        src={profile?.profilePhoto}
                        alt=""
                    />
                    <div className="h-full flex flex-col justify-center">
                        <h3 className="text-[#000000] font-bold font-Poppins text-[17px]">{profile?.firstName + " " + profile?.lastName}</h3>
                        <p className="text-[rgba(0,0,0,0.35)] font-medium text-[13px] tracking-[-0.08px]">Active</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-[24px]">
                    <FaPhoneAlt className="text-[#A32BCA] h-[24px] w-[24px]" onClick={callHandler} />
                    <BsFillCameraVideoFill className="text-[#A32BCA] h-[24px] w-[24px]" onClick={callHandler} />
                </div>
            </div>
        </div>
    );
};
