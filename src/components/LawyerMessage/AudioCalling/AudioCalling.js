import React from 'react';
import message from '../../../assets/images/LawyerCall/message.png';
import user from '../../../assets/images/LawyerCall/user.png';
import { RxSpeakerModerate } from "react-icons/rx";
import { HiMicrophone } from "react-icons/hi2";
import { MdCallEnd } from "react-icons/md";

const AudioCalling = () => {
    return (
        <div className='w-8/12 h-[814px] rounded-3xl mt-[74px] mx-auto relative overflow-hidden bg-[url("https://i.ibb.co/djngxHf/background.png")]'>
            <div className='z-50'>
                <img src={message} alt="shape" />
                <div>
                    <img src={user} alt="user" />
                    <h1>Martha Craig</h1>
                    <span>Contacting…</span>
                </div>
                <div className='flex'>
                    <RxSpeakerModerate />
                    <HiMicrophone />
                    <MdCallEnd />
                </div>
            </div>
        </div>
    );
};

export default AudioCalling;