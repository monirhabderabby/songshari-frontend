// Configuration
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

// Third party package
import { MdCancel } from "react-icons/md";
import { useSelector } from "react-redux";

const ActivityHeader = () => {
    const data = useSelector(state => state.persistedReducer?.orderInfo);
    const { pendingOrder, runningOrder } = data || {};
    const { totalData: totalPending } = pendingOrder || {};
    const { totalData: totalRunning } = runningOrder || {};

    return (
        <div className="flex justify-between items-center mb-28">
            <div className="flex justify-between items-center px-8 w-[339px] h-[168px] border-t-4 border-[#E41272] rounded-b-[20px] shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
                <div>
                    <p className="text-[58px] leading-[87px] font-semibold font-Poppins">{totalPending}</p>
                    <p className="text-[#404040] text-sm font-Poppins">Total Pending Order</p>
                </div>
                <div>
                    <FaCheckCircle className="text-[42px] text-[#E41272]" />
                </div>
            </div>
            <div className="flex justify-between items-center px-8 w-[339px] h-[168px] border-t-4 border-[#E41272] rounded-b-[20px] shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
                <div>
                    <p className="text-[58px] leading-[87px] font-semibold font-Poppins">12</p>
                    <p className="text-[#404040] text-sm font-Poppins">Total Completed Case</p>
                </div>
                <div>
                    <FaCheckCircle className="text-[42px] text-[#E41272]" />
                </div>
            </div>
            <div className="flex justify-between items-center px-8 w-[339px] h-[168px] border-t-4 border-[#E41272] rounded-b-[20px] shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
                <div>
                    <p className="text-[58px] leading-[87px] font-semibold font-Poppins">{totalRunning}</p>
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
