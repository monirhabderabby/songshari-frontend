import React from 'react';
import { HiTable } from "react-icons/hi";
import { BsArrowUpShort } from "react-icons/bs";

const AllUsers = () => {

    const usersActivities = [
        {
            id: 1,
            serial: '01',
            activity: 'Send message to user @mikel543',
            date: [
                {
                    dateData: 'Jan 1, 2022'
                },
                {
                    dateData: 'Jan 2, 2022'
                },
                {
                    dateData: 'Jan 3, 2022'
                }
            ]
        },
        {
            id: 2,
            serial: '02',
            activity: 'Buy a lawyer service for $100 from the lawyer @jackob',
            date: [
                {
                    dateData: 'Jan 1, 2022'
                },
                {
                    dateData: 'Jan 2, 2022'
                },
                {
                    dateData: 'Jan 3, 2022'
                }
            ]
        },
        {
            id: 3,
            serial: '03',
            activity: 'Cart a item #5833 from store @PandaMart',
            date: [
                {
                    dateData: 'Jan 1, 2022'
                },
                {
                    dateData: 'Jan 2, 2022'
                },
                {
                    dateData: 'Jan 3, 2022'
                }
            ]
        },
        {
            id: 4,
            serial: '04',
            activity: 'View user profile @james',
            date: [
                {
                    dateData: 'Jan 1, 2022'
                },
                {
                    dateData: 'Jan 2, 2022'
                },
                {
                    dateData: 'Jan 3, 2022'
                }
            ]
        },
        {
            id: 5,
            serial: '05',
            activity: 'Like a post #54333 of @kamal',
            date: [
                {
                    dateData: 'Jan 1, 2022'
                },
                {
                    dateData: 'Jan 2, 2022'
                },
                {
                    dateData: 'Jan 3, 2022'
                }
            ]
        },
        {
            id: 6,
            serial: '06',
            activity: 'Publish a new post',
            date: [
                {
                    dateData: 'Jan 1, 2022'
                },
                {
                    dateData: 'Jan 2, 2022'
                },
                {
                    dateData: 'Jan 3, 2022'
                }
            ]
        },
        {
            id: 7,
            serial: '07',
            activity: 'Change phone number',
            date: [
                {
                    dateData: 'Jan 1, 2022'
                },
                {
                    dateData: 'Jan 2, 2022'
                },
                {
                    dateData: 'Jan 3, 2022'
                }
            ]
        },
        {
            id: 8,
            serial: '08',
            activity: 'Commented to his own post #53234',
            date: [
                {
                    dateData: 'Jan 1, 2022'
                },
                {
                    dateData: 'Jan 2, 2022'
                },
                {
                    dateData: 'Jan 3, 2022'
                }
            ]
        },
        {
            id: 9,
            serial: '09',
            activity: 'Send message to user @mikel543',
            date: [
                {
                    dateData: 'Jan 1, 2022'
                },
                {
                    dateData: 'Jan 2, 2022'
                },
                {
                    dateData: 'Jan 3, 2022'
                }
            ]
        },
        {
            id: 10,
            serial: '10',
            activity: 'View user profile @james',
            date: [
                {
                    dateData: 'Jan 1, 2022'
                },
                {
                    dateData: 'Jan 2, 2022'
                },
                {
                    dateData: 'Jan 3, 2022'
                }
            ]
        },
        {
            id: 11,
            serial: '11',
            activity: 'Like a post #54333 of @kamal',
            date: [
                {
                    dateData: 'Jan 1, 2022'
                },
                {
                    dateData: 'Jan 2, 2022'
                },
                {
                    dateData: 'Jan 3, 2022'
                }
            ]
        },
        {
            id: 12,
            serial: '12',
            activity: 'Buy a Agent service for $100 from the Agent @jackob',
            date: [
                {
                    dateData: 'Jan 1, 2022'
                },
                {
                    dateData: 'Jan 2, 2022'
                },
                {
                    dateData: 'Jan 3, 2022'
                }
            ]
        },
        {
            id: 13,
            serial: '13',
            activity: 'Publish a new post',
            date: [
                {
                    dateData: 'Jan 1, 2022'
                },
                {
                    dateData: 'Jan 2, 2022'
                },
                {
                    dateData: 'Jan 3, 2022'
                }
            ]
        },
        {
            id: 14,
            serial: '14',
            activity: 'Cart a item #5833 from store @PandaMart',
            date: [
                {
                    dateData: 'Jan 1, 2022'
                },
                {
                    dateData: 'Jan 2, 2022'
                },
                {
                    dateData: 'Jan 3, 2022'
                }
            ]
        },
        {
            id: 15,
            serial: '15',
            activity: 'Change Profile Picture',
            date: [
                {
                    dateData: 'Jan 1, 2022'
                },
                {
                    dateData: 'Jan 2, 2022'
                },
                {
                    dateData: 'Jan 3, 2022'
                }
            ]
        }
    ]

    return (
        <div className='bg-[#D9D9D9] font-Inter'>
            <h1 className='font-semibold text-[24px] text-[#000000] pt-[34px] pb-9 pl-[14px] text-start'>Activity</h1>

            <div className='flex items-center justify-between px-6 mt-[15px]'>
                <div className='flex items-center justify-center gap-[10px]'>
                    <HiTable className='text-[20px] text-[#B0BABF]' />
                    <div className=' flex h-12 items-center'>
                        <div>
                            <select name='showAll' id="showAll" className="font-medium text-base text-[#222222] bg-transparent focus:outline-none block w-full h-full">
                                <option selected>Show All</option>
                                <option value="premium">Premium</option>
                                <option value="diamond">Diamond</option>
                                <option value="gold">Gold</option>
                            </select>
                        </div>
                    </div>
                </div>
                <p>Sort</p>
            </div>

            <div className='flex items-center justify-between px-[23px] font-normal text-[14px] text-[#6E7C87]'>
                <div className='w-[82%]'>
                    <div className='inline-flex py-[7px] border-b border-b-[#E5E9EB] items-center text-left'>
                        <p className='mr-1'>ID</p>
                        <BsArrowUpShort className='text-[30px] text-[#B0BABF]' />
                        <p className='ml-[32px]'>Action</p>
                    </div>
                </div>

                <div className='w-[18%] text-left py-[7px] border-b border-b-[#E5E9EB]'>
                    <div>
                        <p>Date</p>
                    </div>
                </div>
            </div>

            {
                usersActivities.map(userActivity =>
                    <div key={userActivity.id} className='flex items-center justify-between px-[23px] font-normal text-[14px] text-[#252C32]'>
                        <div className='w-[82%]'>
                            <div className='inline-flex gap-8 pl-3 py-[7px] border-b border-b-[#E5E9EB] items-center text-left'>
                                <p>{userActivity.serial}</p>
                                <p className='pl-5'>{userActivity.activity}</p>
                            </div>
                        </div>

                        <div className='w-[18%] text-left py-[7px] border-b border-b-[#E5E9EB]'>
                            <div className='flex items-center'>
                                <div>
                                    <select name='activityDate' id="activityDate" className="bg-transparent focus:outline-none block w-full h-full">
                                        {
                                            userActivity.date.map(d => <option selected>{d.dateData}</option>)
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default AllUsers;