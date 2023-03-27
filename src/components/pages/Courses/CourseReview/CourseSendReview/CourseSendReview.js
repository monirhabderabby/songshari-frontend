import React from "react";
import { MobileBackButton } from "../../../../shared/Components/MobileBackButton";
import CustomHeader from "../../../../shared/CustomHeader/CustomHeader";
import { CourseSendForm } from "./CourseSendForm";

export const CourseSendReview = ({ open, handleClose }) => {
    return (
        <>
            <div className="hidden lg:block">
                <CustomHeader title="Review" />
            </div>
            <div className="lg:hidden">
                <MobileBackButton name="Review" />
            </div>
            <div className="w-full max-w-[1200px] mx-auto flex justify-center mt-[30px] px-6">
                <div className="w-full md:w-[600px] lg:w-[750px] h-auto shadow-md lg:shadow-2xl ring-1 ring-gray-200">
                    <div className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] px-[30px] py-[20px] text-white">
                        <h3 className="text-[26px] font-Nunito font-medium">Send us your feedback!</h3>
                        <p className="text-[10px] lg:text-[14px] font-normal font-Nunito mt-[8px]">
                            Do you have a suggestion or found some bug? <br />
                            let us know in the field bellow
                        </p>
                    </div>
                    <div className="bg-white ">
                        <CourseSendForm />
                    </div>
                </div>
            </div>
        </>
    );
};
