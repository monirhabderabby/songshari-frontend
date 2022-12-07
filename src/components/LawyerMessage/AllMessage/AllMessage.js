import React from 'react';
import { FiMoreVertical } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import profile1 from '../../../assets/images/LawyerMessage/profile1.png';
import profile2 from '../../../assets/images/LawyerMessage/profile2.png';
import profile3 from '../../../assets/images/LawyerMessage/profile3.png';
import profile4 from '../../../assets/images/LawyerMessage/profile4.png';

const AllMessage = () => {

    const allUsers = [
        {
            id: 1,
            img: profile1,
            name: 'Olivia Rellaq',
            time: '25m ago',
            message: 'Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
            id: 2,
            img: profile2,
            name: 'Roberto Charloz',
            time: '2m ago',
            message: 'Hey, check my design update last night. Tell me what you think and if that is OK. I hear client said they want to change the layout concept',
        },
        {
            id: 3,
            img: profile3,
            name: 'Laura Chyan',
            time: '5m ago',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
        },
        {
            id: 4,
            img: profile4,
            name: 'Keanu Tipes',
            time: '41m ago',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
        }
    ]

    return (
        <div>
            <div className='bg-[#FEFEFE] shadow-[0px_12px_23px_rgba(62, 73, 84, 0.04)] rounded-t-[20px] mt-[30px] mb-[20px]'>
                <div className='flex justify-between mx-[30px]'>
                    <div className='flex items-center content-center bg-[#F0F0F0] w-[396px] my-[18px] py-3 rounded-[49px]'>
                        <h1 className='bg-[#FFFFFF] rounded-[45px] ml-[9px] font-poppins font-semibold text-base text-[#000000] px-8 py-2'>All messages</h1>
                    </div>
                    <div className='flex items-center content-center text-[#5A5A5A] text-base'>
                        <div className='gap-5 text-xl'>
                            <BiSearch />
                        </div>
                        <div className='text-xl'>
                            <FiMoreVertical />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#FFFFFF] px-[30px] rounded-b-[20px]'>
                {
                    allUsers.map(data => <div className='flex mb-5' key={data.id}>
                        <img className=' h-[58px]' src={data.img} alt="" />
                        <div className='ml-[34px]'>
                            <div className='flex justify-between mb-[10px]'>
                                <h1 className='font-medium text-base text-[#000000]'>{data.name}</h1>
                                <p className='font-normal text-sm text-[#898989]'>{data.time}</p>
                            </div>
                            <div>
                                <p className='font-normal text-sm text-[#000000]'>{data.message}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllMessage;