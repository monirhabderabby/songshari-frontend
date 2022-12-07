import React from 'react';
import user from '../../../assets/images/LawyerCall/user.png';
import { IoChatbubbleSharp } from "react-icons/io5";
import { IoIosReverseCamera } from "react-icons/io";
import smile from '../../../assets/images/LawyerCall/smile.png';
import { RxSpeakerModerate } from "react-icons/rx";
import { HiMicrophone } from "react-icons/hi2";
import { MdCallEnd } from "react-icons/md";

const VideoCalling = () => {
    return (
        <div className='w-8/12 h-[814px] font-poppins rounded-3xl mt-[74px] mx-auto relative overflow-hidden bg-[url("https://i.ibb.co/djngxHf/background.png")]'>
            <div className='w-full h-full'>
                <div className='absolute left-24 top-[79px] text-white text-[41px] bg-white bg-opacity-50 rounded-full p-3'>
                    <IoChatbubbleSharp />
                </div>
                <div className='absolute right-36 top-[79px] text-white text-[41px] bg-white bg-opacity-50 rounded-full p-3'>
                    <IoIosReverseCamera />
                </div>
                <div className='relative'>
                    <div className='mx-auto text-center text-white'>
                        <img className='mx-auto mt-[79px] mb-[18px]' src={user} alt="user" />
                        <h1 className='font-bold text-[32px]'>Martha Craig</h1>
                        <span className='font-normal text-2xl text-[#66564D]'>Contacting…</span>
                        <div className='mx-auto mt-[154px] h-[83px] w-[83px]'>
                            <img src={smile} alt="smile emoji" />
                        </div>
                    </div>
                    <div className='flex justify-center gap-14 mt-[46px]'>
                        <div className="flex rounded-full text-white text-[40px] bg-white bg-opacity-50 items-center justify-center p-3">
                            <RxSpeakerModerate />
                        </div>
                        <div className="flex rounded-full text-white text-[40px] bg-white bg-opacity-50 items-center justify-center p-3">
                            <HiMicrophone />
                        </div>
                        <div className="flex rounded-full text-white text-[40px] bg-[#FE294D] items-center justify-center p-3">
                            <MdCallEnd />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCalling;