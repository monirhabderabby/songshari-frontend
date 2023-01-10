// configuration
import React from "react";
import { Outlet } from "react-router";

// Third party packages
import { FindPartnerHeaderButton } from "./FindPartnerHeaderButton";
import { FindPartnerSearchBox } from "./FindPartnerSearchBox";

export const FindPartnersMobile = () => {
    return (
        <div className=" lg:hidden px-[26px] bg-[#F8F8FF] min-h-screen">
            <FindPartnerSearchBox />
            <FindPartnerHeaderButton />
            <Outlet />
        </div>
    );
};
