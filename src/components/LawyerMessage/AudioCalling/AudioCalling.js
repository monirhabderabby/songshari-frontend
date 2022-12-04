import React from 'react';
import message from '../../../assets/images/LawyerCall/message.png';
import user from '../../../assets/images/LawyerCall/user.png';
import { RxSpeakerModerate } from "react-icons/rx";
import { HiMicrophone } from "react-icons/hi2";
import { MdCallEnd } from "react-icons/md";

// https://i.ibb.co/vq7L8YD/background1.png

const AudioCalling = () => {
    return (
        <div className='w-8/12 h-[814px] rounded-3xl mt-[74px] mx-auto relative overflow-hidden bg-[url("https://i.ibb.co/djngxHf/background.png")]'>
            <div className='w-full h-full'>
                <img className='absolute left-20 top-[79px]' src={message} alt="shape" />
                <div className='relative'>
                    <div className='mx-auto text-center text-white'>
                        <img className='mx-auto mt-[79px] mb-[18px]' src={user} alt="user" />
                        <h1>Martha Craig</h1>
                        <span>Contacting…</span>
                    </div>
                    <div className='flex mx-auto gap-14 mt-[283px]'>
                        <div className="flex rounded-full bg-white bg-opacity-50 items-center justify-center h-[86px] w-[86px]">
                            <RxSpeakerModerate />
                        </div>
                        <div className="flex rounded-full bg-white bg-opacity-50 items-center justify-center h-[86px] w-[86px]">
                            <HiMicrophone />
                        </div>
                        <div className="flex rounded-full bg-white bg-opacity-50 items-center justify-center h-[86px] w-[86px]">
                            <MdCallEnd />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioCalling;