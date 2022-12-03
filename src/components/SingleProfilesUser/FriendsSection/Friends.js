import React from "react";
import "../../../App.css";
import tick from "../../../assets/images/icons/tick.png";
import { useGetAllRequestQuery } from "../../../Redux/features/connections/connectionApi";

export const Friends = ({ data, isLoading }) => {
    const { data: request } = useGetAllRequestQuery();

    if (request) {
        console.log(request);
    }
    const friends = [1, 2, 3, 4, 5, 6, 7];
    return (
        <div className="w-full grid grid-cols-1 gap-y-4">
            {friends?.map(f => {
                return (
                    <div
                        className="p-[21px] h-[141px] lg:w-[501px] mx-auto bg-white shadow-[2px_2px_8px_rgba(0,0,0,0.12)] rounded-[15px] flex justify-between items-center"
                        key={f}
                    >
                        <div className="h-full flex items-center">
                            <img
                                className="w-[83px] h-[100px] rounded-[15px] mr-[21px]"
                                src="https://placeimg.com/192/192/people"
                                alt="Not Available"
                            />
                            <div>
                                <div className="flex items-center">
                                    <h1 className="text-[20px] leading-[30px] text-[#333333] font-bold mr-[4px]">Erma Porter</h1>
                                    <img src={tick} alt="Not Available" />
                                </div>
                                <span className="text-[16px] leading-[26px] text-[#333333] font-normal">A month ago</span>
                            </div>
                        </div>
                        <button
                            className={`hover:text-white text-[#E41272] transition-[0.3s] border-[1px] h-[40px] w-[133px] border-[rgba(0,0,0,0.15)] rounded-full hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] duration-300`}
                        >
                            Connected
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
