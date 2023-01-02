import React from "react";

export const ConnectedConnectionLoader = () => {
    return (
        <div className="flex h-[141px] w-full items-center justify-between rounded-[15px] bg-white p-[21px] shadow-[2px_2px_8px_rgba(0,0,0,0.12)]">
            <div className="flex items-center">
                <div className="mr-[21px] h-[100px] w-[83px] animate-pulse rounded-[15px] bg-gray-100"></div>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4">
                        <div className="anima h-3 w-[170px] rounded-[4px] bg-gray-100"></div>
                        <div className="anima h-3 w-[150px] rounded-[4px] bg-gray-100"></div>
                    </div>
                </div>
            </div>
            <div className="h-[42px] w-[151px] rounded-[50px] border-[1px] border-[rgba(0,0,0,0.15)]"></div>
        </div>
    );
};
