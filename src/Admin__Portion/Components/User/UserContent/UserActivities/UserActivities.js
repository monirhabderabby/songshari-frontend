import React from 'react';
import { FiSearch } from "react-icons/fi";
import person1 from '../../../../../assets/images/usersActivity/person1.png';
import person2 from '../../../../../assets/images/usersActivity/person2.png';
import person3 from '../../../../../assets/images/usersActivity/person3.png';
import leftArrow from '../../../../../assets/images/usersActivity/leftArrow.png';
import rightArrow from '../../../../../assets/images/usersActivity/rightArrow.png';
import AllUsers from './AllUsers/AllUsers';

const UserActivities = () => {

    const users = [
        {
            id: 1,
            img: person1,
            name: 'Olivia Rhye',
            membership: 'Diamond User',
            occupation: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.'
        },
        {
            id: 2,
            img: person2,
            name: 'Phoenix Baker',
            membership: 'Platinum user',
            occupation: 'Lead engineering teams at Figma, Pitch, and Protocol Labs.'
        },
        {
            id: 3,
            img: person3,
            name: 'Lana Steiner',
            membership: 'Gold User',
            occupation: 'Former PM for Linear, Lambda School, and On Deck.'
        },
        {
            id: 4,
            img: person2,
            name: 'Phoenix Baker',
            membership: 'Platinum user',
            occupation: 'Lead engineering teams at Figma, Pitch, and Protocol Labs.'
        },
        {
            id: 5,
            img: person2,
            name: 'Phoenix Baker',
            membership: 'Platinum user',
            occupation: 'Lead engineering teams at Figma, Pitch, and Protocol Labs.'
        },
        {
            id: 6,
            img: person3,
            name: 'Lana Steiner',
            membership: 'Gold User',
            occupation: 'Former PM for Linear, Lambda School, and On Deck.'
        }
    ]

    return (
        <div>
            <h1 className='font-Nunito font-bold text-[40px] text-[#1D252D] text-center pt-[94px] pb-[48px]'>View Users Activities</h1>

            {/* User Search */}
            <div className='flex mx-auto items-center w-[492px] h-[52px] bg-[#FFFFFF] border border-[#FFE8F3] py-[14px] px-[21px] text-base rounded-lg gap-6'>
                <FiSearch className='text-[#353751] text-2xl' />
                <input className='font-poppins font-normal text-[#AAAAAA] focus: outline-none h-full w-full' type="search" name="searchUser" id="" placeholder='Search user name' />
            </div>

            <div className='pl-8 pr-[98px]'>
                <div className='grid grid-cols-3 gap-4 pt-[70px] font-Inter'>
                    {
                        users.map(user =>
                            <div key={user.id} className='mb-4'>
                                <img src={user?.img} alt="Not Available" />
                                <h1 className='font-medium text-xl text-[#101828] text-start mt-6 mb-1'>{user?.name}</h1>
                                <h3 className='font-normal text-[18px] text-[#E41272] text-start'>{user?.membership}</h3>
                                <p className='mt-4 font-normal text-[16px] text-[#667085] text-start'>{user.occupation}</p>
                                <div className='flex justify-center items-center text-white bg-[#D9D9D9] rounded-lg mt-6 py-[7px] px-[94px]'>
                                    <button>Select</button>
                                </div>
                                <div className={({ isActive }) => (`w-full  text-center py-[5px] rounded cursor-pointer text-[15px] font-semibold ${isActive ? ' text-white bg-[#E41272]' : 'text-[#000000] bg-[#FFFFFF]'}`)}></div>
                            </div>
                        )}
                </div>

                {/* Pagination */}
                <div className=' flex items-center justify-between mt-10 mb-[70px] font-poppins font-medium text-lg' >
                    <div>
                        <h1 className='text-[#3E4954] text-base'>Showing 6 from 160 data</h1>
                    </div>
                    <nav aria-label="Page navigation example " className=' flex items-center'>
                        <div className="flex px-[10px] py-[14px] leading-tight text-white bg-[#969BA0] border-gray-300 rounded-lg">
                            <img className='mr-[5px]' src={leftArrow} alt="arrow" />
                            <span>Previous</span>
                        </div>

                        <ul className="inline-flex ml-[14px] mr-[26px] -space-x-px bg-gray-300 p-[5px] rounded items-center gap-1">
                            <li>
                                <a href="!#" className="leading-tight text-gray-500 bg-white w-[47px] h-[43px] rounded flex items-center justify-center hover:bg-gray-100 hover:text-gray-700 ">1</a>
                            </li>
                            <li>
                                <a href="!#" className="leading-tight text-[#E41272]  w-[47px] h-[43px] rounded flex items-center justify-center hover:bg-gray-100 hover:text-gray-700 ">2</a>
                            </li>
                            <li>
                                <a href="!#" className="leading-tight text-[#E41272] w-[47px] h-[43px] rounded flex items-center justify-center  hover:bg-gray-100 hover:text-gray-700 ">3</a>
                            </li>
                            <li>
                                <a href="!#" className="leading-tight text-[#E41272] w-[47px] h-[43px] rounded flex items-center justify-center  hover:bg-gray-100 hover:text-gray-700 ">4</a>
                            </li>
                        </ul>

                        <div className="flex px-[10px] py-[14px] leading-tight bg-[#E41272] border border-gray-300 rounded-lg text-white">
                            <span>Next</span>
                            <img className='ml-[5px]' src={rightArrow} alt="arrow" />
                        </div>
                    </nav>
                </div>

                {/* All users table */}
                <div>
                    <AllUsers></AllUsers>
                </div>

                {/* Pagination */}
                <div className=' flex items-center justify-between mt-10 mb-[70px] font-poppins font-medium text-lg' >
                    <div>
                        <h1 className='text-[#3E4954] text-base'>Showing 6 from 160 data</h1>
                    </div>
                    <nav aria-label="Page navigation example " className=' flex items-center'>
                        <div className="flex px-[10px] py-[14px] leading-tight text-white bg-[#969BA0] border-gray-300 rounded-lg">
                            <img className='mr-[5px]' src={leftArrow} alt="arrow" />
                            <span>Previous</span>
                        </div>

                        <ul className="inline-flex ml-[14px] mr-[26px] -space-x-px bg-gray-300 p-[5px] rounded items-center gap-1">
                            <li>
                                <a href="!#" className="leading-tight text-gray-500 bg-white w-[47px] h-[43px] rounded flex items-center justify-center hover:bg-gray-100 hover:text-gray-700 ">1</a>
                            </li>
                            <li>
                                <a href="!#" className="leading-tight text-[#E41272]  w-[47px] h-[43px] rounded flex items-center justify-center hover:bg-gray-100 hover:text-gray-700 ">2</a>
                            </li>
                            <li>
                                <a href="!#" className="leading-tight text-[#E41272] w-[47px] h-[43px] rounded flex items-center justify-center  hover:bg-gray-100 hover:text-gray-700 ">3</a>
                            </li>
                            <li>
                                <a href="!#" className="leading-tight text-[#E41272] w-[47px] h-[43px] rounded flex items-center justify-center  hover:bg-gray-100 hover:text-gray-700 ">4</a>
                            </li>
                        </ul>

                        <div className="flex px-[10px] py-[14px] leading-tight bg-[#E41272] border border-gray-300 rounded-lg text-white">
                            <span>Next</span>
                            <img className='ml-[5px]' src={rightArrow} alt="arrow" />
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default UserActivities;