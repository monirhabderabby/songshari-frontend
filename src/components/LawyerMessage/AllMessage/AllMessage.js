import React from 'react';
import { FiMoreVertical } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import profile1 from '../../../assets/images/LawyerMessage/profile1.png';
import profile2 from '../../../assets/images/LawyerMessage/profile2.png';
import profile3 from '../../../assets/images/LawyerMessage/profile3.png';
import profile4 from '../../../assets/images/LawyerMessage/profile4.png';

const AllMessage = () => {
    return (
        <div>
            <div className='bg-[#FEFEFE] shadow-[0px_12px_23px_rgba(62, 73, 84, 0.04)] rounded-t-[20px] mt-[30px] mb-[20px]'>
                <div className='flex justify-between mx-[30px]'>
                    <div className='flex items-center content-center bg-[#F0F0F0] w-[396px] my-[18px] py-3 rounded-[49px]'>
                        <h1 className='bg-[#FFFFFF] rounded-[45px] ml-[9px] font-poppins font-semibold text-base text-[#000000] px-8 py-2'>All messages</h1>
                    </div>
                    <div className='flex items-center content-center text-[#5A5A5A] text-base'>
                        <BiSearch className='mr-5' />
                        <FiMoreVertical />
                    </div>
                </div>
            </div>
            <div className='bg-[#FFFFFF] px-[30px] rounded-b-[20px]'>
                <div className='flex mb-5'>
                    <img className=' h-[58px]' src={profile1} alt="" />
                    <div className='ml-[34px]'>
                        <div className='flex justify-between mb-[10px]'>
                            <h1>Olivia Rellaq</h1>
                            <p>25m ago</p>
                        </div>
                        <div>
                            <p>Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </div>
                <div className='flex mb-5 bg-[#FCFCFC]'>
                    <img className=' h-[58px]' src={profile2} alt="" />
                    <div className='ml-[34px]'>
                        <div className='flex justify-between mb-[10px]'>
                            <h1>Olivia Rellaq</h1>
                            <p>25m ago</p>
                        </div>
                        <div>
                            <p>Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </div>
                <div className='flex mb-5'>
                    <img className=' h-[58px]' src={profile3} alt="" />
                    <div className='ml-[34px]'>
                        <div className='flex justify-between mb-[10px]'>
                            <h1>Olivia Rellaq</h1>
                            <p>25m ago</p>
                        </div>
                        <div>
                            <p>Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </div>
                <div className='flex mb-5'>
                    <img className=' h-[58px]' src={profile4} alt="" />
                    <div className='ml-[34px]'>
                        <div className='flex justify-between mb-[10px]'>
                            <h1>Olivia Rellaq</h1>
                            <p>25m ago</p>
                        </div>
                        <div>
                            <p>Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllMessage;