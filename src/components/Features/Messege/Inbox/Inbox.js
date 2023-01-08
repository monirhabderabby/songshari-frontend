import React from "react";
import { Outlet } from "react-router";
import CustomHeader from "../../../shared/CustomHeader/CustomHeader";
import Footer from "../../../shared/Footer/Footer";
import { Sidebar } from "../Sidebar/Sidebar";

export const Inbox = () => {
    return (
        <div className="bg-[#FAFBFF]">
            <CustomHeader title="Chat" />
            <div className="lg:w-full xl:max-w-[1400px] h-[calc(100vh-30vh)] mx-auto flex mt-[66px]">
                <div className="lg:w-[437px] xl:w-[557px] h-full">
                    <Sidebar />
                </div>
                <div className="flex-1 h-[calc(100vh-30vh)]">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};
