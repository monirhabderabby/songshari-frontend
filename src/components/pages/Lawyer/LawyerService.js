import React, { useState } from 'react';
import CommonBanner from '../../comons/CommonBanner';
import LawyerAddServiceFrom from './LawyerAddServiceFrom';
import LawyerCard from './LawyerCard';
import style from "./lawyerservice.module.css";

const LawyerService = () => {
    const [page, setPage] = useState(2);
    return (
        <div className='bg-gray-100'>
            <div>
                <CommonBanner title="Lawyer Profile" currentStage='Lawyer Profile' />
            </div>
            <div className='container mx-auto'>
                <div className='flex justify-center mt-20'>
                    <div className='w-[523px] h-[54px]'>
                        <div className="px-2 md:px-0 mx-4 mb-4">
                            <div className={`${style.notification_bar}`}>
                                <div className="flex justify-center items-center gap-4">
                                    <button className="mt-4 font-medium leading-tight text-gray-800">Activity</button>
                                    <button
                                        className={`mt-4 font-medium leading-tight ${page === 2 ? "text-primary font-bold" : "text-gray-800"}`}
                                        onClick={() => setPage(2)}
                                    >
                                        Profile
                                    </button>
                                    <button
                                        className={`mt-4 font-medium leading-tight ${page === 3 ? "text-primary font-bold" : "text-gray-800"}`}
                                        onClick={() => setPage(3)}
                                    >
                                        Friends <sup className={`text-white ${style.bg_Color} p-1 rounded-full text-[10px]`}>1</sup>
                                    </button>
                                    <button className="mt-4 font-medium leading-tight text-gray-800">
                                        heading<sup className={`text-white ${style.bg_Color} p-1 rounded-full text-[10px]`}>5</sup>
                                    </button>
                                    <button className="mt-4 font-medium leading-tight text-gray-800">
                                        Message<sup className={`text-white ${style.bg_Color} p-1 rounded-full text-[10px]`}>14</sup>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center my-10'>
                    <LawyerCard />
                </div>
                <div className='flex justify-center mt-10'>
                    <div>
                        <LawyerAddServiceFrom />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LawyerService;