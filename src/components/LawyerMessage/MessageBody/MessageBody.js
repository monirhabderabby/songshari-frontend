import React from 'react';
import user from '../../../assets/images/LawyerMessage/user.png';
import profile from '../../../assets/images/LawyerMessage/profile2.png';
import { IoCall } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { FiMoreVertical } from "react-icons/fi";
import { BsFillCameraFill } from "react-icons/bs";
import { HiPhoto } from "react-icons/hi2";
import { HiMicrophone } from "react-icons/hi2";
import { CgSmileMouthOpen } from "react-icons/cg";
import { AiFillLike } from "react-icons/ai";

const MessageBody = () => {

    return (
        <div className='bg-[#FFFFFF] font-Poppins font-normal rounded-[20px] mb-9 pb-9'>
            <div className='flex justify-between bg-[#FEFEFE] shadow-[0px_12px_23px_rgba(62, 73, 84, 0.04)] px-[15px] rounded-[20px]'>
                <div className='flex py-8 mr-[169px]'>
                    <img className='rounded-[64px]' src={profile} alt="Profile Pic" />
                    <div className='ml-[15px]'>
                        <h1 className='font-medium text-[20px] text-[#000000]'>Roberto Charloz</h1>
                        <p className='mt-2 font-normal text-[16px] text-[#999999]'>Last seen 4:23 AM</p>
                    </div>
                </div>
                <div className='flex items-center content-center font-medium text-base text-[#A32BCA] my-9 px-5 gap-4'>
                    <div className='bg-[#ECF0FF] rounded-full p-3 text-[22px]'>
                        <IoCall />
                    </div>
                    <div className='bg-[#ECF0FF] rounded-full p-3 text-[22px]'>
                        <IoVideocam />
                    </div>
                    <div className='text-[22px]'>
                        <FiMoreVertical />
                    </div>
                </div>
            </div>
            <div className='flex justify-end mr-5'>
                <div className='flex'>
                    <div className='flex flex-col items-end'>
                        <div className='w-[500px] mb-[23px]'>
                            <p className='text-base text-[#FFFFFF] rounded-t-[20px] rounded-l-[20px] bg-[#A32BCA] pl-[27px] pr-[22px] pt-[9px] pb-4'>sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                            <span className='flex text-xs text-[#969696] justify-end mt-[10px]'>9.30 AM</span>
                        </div>
                        <div className='w-[373px] mb-[23px]'>
                            <p className='text-base text-[#FFFFFF] rounded-t-[20px] rounded-l-[20px] bg-[#A32BCA] pl-[27px] pr-[22px] pt-[9px] pb-4'>nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea</p>
                            <span className='flex text-xs text-[#969696] justify-end mt-[10px]'>9.30 AM</span>
                        </div>
                    </div>
                    <div className='flex items-end ml-5 mb-[30px]'>
                        <img className='h-[58px]' src={user} alt="Profile Pic" />
                    </div>
                </div>
            </div>
            <div className='ml-[15px]'>
                <div className='flex mb-[17px]'>
                    <img className=' h-[58px] mr-[26px]' src={profile} alt="Profile Pic" />
                    <div className='w-[500px]'>
                        <p className='text-sm text-[#000000] rounded-b-[20px] rounded-r-[20px] bg-[#F2F2F2] pl-[27px] pr-[22px] pt-[9px] pb-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptat</p>
                        <span className='text-xs text-[#969696] mt-3'>4.30 AM</span>
                    </div>
                </div>
                <div className='flex mb-[17px]'>
                    <img className=' h-[58px] mr-[26px]' src={profile} alt="Profile Pic" />
                    <div className='w-[500px]'>
                        <p className='text-sm text-[#000000] rounded-b-[20px] rounded-r-[20px] bg-[#F2F2F2] pl-[27px] pr-[22px] pt-[9px] pb-4'>Hey, check my design update last night. Tell me what you think and if that is OK. I hear client said they want to change the layout concept</p>
                        <span className='text-xs text-[#969696] mt-3'>4.30 AM</span>
                    </div>
                </div>
            </div>
            <div className='flex content-center items-center justify-between border border-[#E2E2E2] rounded-[22px] py-6  mt-9 mx-4 gap-6'>
                <input className='focus: outline-none w-full pl-7 text-base text-[#B0B0B0]' type="text" name="" id="" placeholder='Type message...' />
                <div className='flex gap-6 items-center text-[#A5ABB3] pr-4'>
                    <div className='text-[22px]'>
                        <BsFillCameraFill />
                    </div>
                    <div className='text-[22px]'>
                        <HiPhoto />
                    </div>
                    <div className='text-[22px]'>
                        <HiMicrophone />
                    </div>
                    <div className='text-[22px]'>
                        <CgSmileMouthOpen />
                    </div>
                    <div className='text-[#A32BCA] text-[22px]'>
                        <AiFillLike />
                    </div>
                    <button className='font-medium text-base text-[#A32BCA] bg-[#EFF3FF] rounded-[20px] px-6 py-4'>SEND</button>
                </div>
            </div>
        </div>
    );
};

export default MessageBody;