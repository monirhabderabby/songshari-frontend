import React from 'react';
import { HiOutlineInformationCircle } from "react-icons/hi";
import { AiOutlineStar } from "react-icons/ai";

const DetailsReview = () => {
    return (
        <div className='flex mx-auto w-full justify-center gap-[22px]'>
            <div className='font-poppins font-bold text-2xl text-[#FFFFFF]'>
                <div className='flex justify-center items-center bg-gradient-to-tl from-[#643A92] to-[#D2174C] rounded-2xl w-[158px] h-[176px]'>
                    <div className='text-center mx-auto'>
                        <div className='flex mx-auto items-center justify-center h-[55px] w-[55px] bg-[#D8F3F1] rounded-2xl mt-[29px] mb-3'>
                            <HiOutlineInformationCircle className='text-[#D2174C] text-[32px]' />
                        </div>
                        <p className='font-medium'> Details</p>
                        <p className='text-[10px] mt-1 pb-[17px]'>Click To View</p>
                    </div>
                </div>
            </div>
            <div className='font-poppins font-bold text-2xl text-[#FFFFFF]'>
                <div className='flex justify-center bg-gradient-to-tl from-[#643A92] to-[#D2174C] rounded-2xl w-[158px] h-[176px] items-center'>
                    <div className='text-center'>
                        <div className='flex mx-auto items-center justify-center h-[55px] w-[55px] bg-[#D8F3F1] rounded-2xl mt-[29px] mb-3'>
                            <AiOutlineStar className='text-[#D2174C] text-[32px]' />
                        </div>
                        <p className='font-medium'>Review</p>
                        <p className='text-[10px] mt-1 pb-[17px]'>Click To View</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsReview;