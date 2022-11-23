import React from 'react';
import CustomHeader from '../../Shared/CustomHeader/CustomHeader';
import CompletedCase from './CompletedCase/CompletedCase';
import PendingOrder from './PendingOrder/PendingOrder';
import RunningCase from './RunningCase/RunningCase';
import Services from './Services/Services';

const LawyerServicesPage = () => {
    return (
        <div>
            <CustomHeader title={"Lawyer Profile"} ></CustomHeader>
            <div className='custom-container w-11/12 mx-auto xl:w-full'>
                {/* Internal NavBar for Lawyer Profile */}
                <div className="flex justify-center md:h-[54px] items-center mt-[39px] z-50">
                    <div className="shadow-[0px_5px_30px_rgba(35,57,184,0.2)] bg-white rounded-[10px] h-full px-[39px]">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-x-[28px]">
                            <button className="mt-4 font-medium leading-tight text-gray-800">
                                Service
                            </button>
                            <button className={"mt-4 font-medium leading-tight text-gray-800"}>
                                Profile
                            </button>
                            <button className={"mt-4 font-medium leading-tight text-gray-800"}>
                                Review
                                <sup className="text-white bg_Color px-[6px] py-1 rounded-full text-[10px]">
                                    04
                                </sup>
                            </button>
                            <button className="mt-4 font-medium leading-tight text-gray-800">
                                Activity
                            </button>
                        </div>
                    </div>
                </div>
                <Services></Services>
                <PendingOrder></PendingOrder>
                <RunningCase></RunningCase>
                <CompletedCase></CompletedCase>
            </div>
        </div>
    );
};

export default LawyerServicesPage;