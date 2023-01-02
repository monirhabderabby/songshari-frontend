import React from "react";

export const ProfileSkeletonLoader = () => {
    return (
        <div>
            <section className="w-[360px] h-[400px] shadow-[0px_10px_5px_rgba(119,123,146,0.02)] bg-white rounded-[10px] relative">
                <div className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] relative h-[150px] w-full rounded-tl-[10px] rounded-tr-[10px]">
                    <div className="h-[135px] absolute -bottom-[50%] left-[110px] w-[135px] z-50 bg-white shadow-sm border-[1px] rounded-full flex justify-center items-center">
                        <div className="h-[120px] w-[120px] bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center absolute top-[70%]">
                    <div className="h-[15px] w-[90px] rounded-[4px] bg-gray-200 animate-pulse"></div>
                    <div className="h-[28px] w-[5px] bg-gray-200 rounded-[4px] mx-[20px]"></div>
                    <div className="h-[15px] w-[90px] rounded-[4px] bg-gray-200 animate-pulse"></div>
                </div>
                <div className="absolute top-[85%] w-full flex justify-center">
                    <div className="h-[40px] w-[40px] bg-gray-200 rounded-full mr-[27px] animate-pulse"></div>
                    <div className="h-[40px] w-[125px] rounded-[50px] bg-gray-200 animate-pulse"></div>
                </div>
            </section>
        </div>
    );
};
