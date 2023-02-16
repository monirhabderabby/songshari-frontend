// Configuration
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

// Third party package
import { MdCancel } from "react-icons/md";
import { useSelector } from "react-redux";

const ActivityHeader = () => {
    const data = useSelector(state => state.persistedReducer?.ordersInfo);
    const { pendingOrder, runningOrder, completedOrder } = data || {};
    const { totalData: totalPending } = pendingOrder || {};
    const { totalData: totalRunning } = runningOrder || {};
    const { totalData: totalCompleted } = completedOrder || {};

    return (
        <div className="flex flex-wrap lg:flex-nowrap gap-x-8 gap-y-4 justify-center lg:justify-between items-center mb-8 lg:mb-28">
            <div className="flex justify-between items-center px-2 lg:px-8 w-36 h-28 md:w-48 lg:w-[339px] lg:h-[168px] border-t-4 border-[#E41272] rounded-b-[20px] shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
                <div>
                    <p className="text-2xl md:text-4xl lg:text-[58px] leading-6 lg:leading-[87px] font-semibold font-Poppins">{totalPending}</p>
                    <p className="text-[#404040] text-sm font-Poppins">Total Pending Order</p>
                </div>
                <div>
                    <FaCheckCircle className="text-[42px] text-[#E41272]" />
                </div>
            </div>
            <div className="flex justify-between items-center px-2 lg:px-8 w-36 h-28 md:w-48 lg:w-[339px] lg:h-[168px] border-t-4 border-[#E41272] rounded-b-[20px] shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
                <div>
                    <p className="text-2xl md:text-4xl lg:text-[58px] leading-6 lg:leading-[87px] font-semibold font-Poppins">{totalCompleted}</p>
                    <p className="text-[#404040] text-sm font-Poppins">Total Completed Case</p>
                </div>
                <div>
                    <FaCheckCircle className="text-[42px] text-[#E41272]" />
                </div>
            </div>
            <div className="flex justify-between items-center px-2 lg:px-8 w-36 h-28 md:w-48 lg:w-[339px] lg:h-[168px] border-t-4 border-[#E41272] rounded-b-[20px] shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
                <div>
                    <p className="text-2xl md:text-4xl lg:text-[58px] leading-6 lg:leading-[87px] font-semibold font-Poppins">{totalRunning}</p>
                    <p className="text-[#404040] text-sm font-Poppins">Total Running Order</p>
                </div>
                <div>
                    <MdCancel className="text-[42px] text-[#E41272]" />
                </div>
            </div>
        </div>
    );
};

export default ActivityHeader;
