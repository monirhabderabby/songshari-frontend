import React from "react";
// Componetns
import errorIcon from "../../../assets/images/icons/404pageIcon.png";
import { MobileBackButton } from "../Components/MobileBackButton";
import CustomHeader from "../CustomHeader/CustomHeader";

// CSS
import "../../../App.css";

export const NotFoundPage = () => {
    return (
        <div>
            <div className="lg:hidden">
                <MobileBackButton name="No Found Page" />
            </div>
            <div className="hidden lg:block">
                <CustomHeader title="No Found Page" />
            </div>
            <div className="h-[100vh] lg:h-[calc(100vh-30vh)] w-full flex flex-col items-center justify-center gap-[12px]">
                <img className="h-[238px] w-[238px]" src={errorIcon} alt="errorIcon" />
                <h3 className="text-[28px] font-Nunito font-normal gradient_text text-center">This page doesn't seem to exist.</h3>
                <h2 className="font-semibold text-[20px] text-center">It looks like the link pointing here was faulty. Maybe try searching?</h2>
            </div>
        </div>
    );
};
