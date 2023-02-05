import React from "react";
import { TbFaceIdError } from "react-icons/tb";

export const TBFaceError = () => {
    return (
        <div className="h-[150px] w-full flex justify-center items-center flex-col">
            <TbFaceIdError className="text-[45px] text-[#FF3366]" />
            <h3 className="text-[16px] text-gray-400 font-medium font-syne">SomeThing went wrong. Please try again later</h3>
        </div>
    );
};
