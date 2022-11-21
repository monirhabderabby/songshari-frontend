import React from 'react';
import CustomHeader from '../shared/CustomHeader/CustomHeader';
import RecentApprovedUsers from './RecentApprovedUsers/RecentApprovedUsers';
import RecentRejectedUsers from './RecentRejectedUsers/RecentRejectedUsers';
import RegistrationRequest from './RegistrationRequest/RegistrationRequest';
import SendForResubmit from './SendForResubmit/SendForResubmit';

const AdminRegistrationRequest = () => {
    return (
        <div>
            <CustomHeader title={"Admin"} ></CustomHeader>
            <div className='custom-container w-11/12 mx-auto xl:w-full'>
                {/* Internal NavBar for Admin */}
                <div className="flex justify-center md:h-[54px] items-center mt-[39px] z-50">
                    <div className="shadow-[0px_5px_30px_rgba(35,57,184,0.2)] bg-white rounded-[10px] h-full px-[39px]">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-x-[28px]">
                            <button className="mt-4 font-medium leading-tight text-gray-800">
                                Activity
                            </button>
                            <button className={"mt-4 font-medium leading-tight text-gray-800"}>
                                Profile
                            </button>
                            <button className={"mt-4 font-medium leading-tight text-gray-800"}>
                                Friends
                                <sup className="text-white bg_Color px-2 py-1 rounded-full text-[10px]">
                                    1
                                </sup>
                            </button>
                            <button className="mt-4 font-medium leading-tight text-gray-800">
                                Heading
                                <sup className="text-white bg_Color px-2 py-1 rounded-full text-[10px]">
                                    5
                                </sup>
                            </button>
                            <button className="mt-4 mb-4 md:mb-0 font-medium leading-tight text-gray-800">
                                Message
                                <sup className="text-white bg_Color px-2 py-1 rounded-full text-[10px]">
                                    14
                                </sup>
                            </button>
                        </div>
                    </div>
                </div>
                <RegistrationRequest />
                <SendForResubmit />
                <RecentApprovedUsers />
                <RecentRejectedUsers />
            </div>
        </div>
    );
};

export default AdminRegistrationRequest;