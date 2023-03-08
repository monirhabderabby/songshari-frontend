// Configuration
import React from "react";

// Third party packages
import { AiFillThunderbolt } from "react-icons/ai";

export const ServerErrorMessage = () => {
    return (
        <div className="bg-red-500 flex w-[320px] items-center rounded-[50px] px-[20px] py-[8px]">
            <AiFillThunderbolt className="text-[30px] mr-2 text-yellow-500" />
            <span className="text-[16px] font-Inter text-white">Server error: Our server failed to responde... :(</span>
        </div>
    );
};
