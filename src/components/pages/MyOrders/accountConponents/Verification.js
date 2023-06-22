//Configuration
import React from "react";

//Third party packages
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";

//Components
import { useSendOtpByTokenMutation } from "../../../../Redux/features/Verification.js/verification";
import { useGetProfileDetailsWIthAuthQuery } from "../../../../Redux/features/userInfo/userApi";
import { EmailOtp } from "./EmailOtp";

export const Verification = () => {
    // state
    const { firstName } = useSelector(state => state.persistedReducer.userInfo?.userInfo?.user) || {};

    //API
    const { data: loggedInUserProfile } = useGetProfileDetailsWIthAuthQuery();
    const [sendOtpByToken, { isSuccess, isLoading }] = useSendOtpByTokenMutation();

    const { isEmailVerified } = loggedInUserProfile || {};

    let content;
    if (!isEmailVerified) {
        content = (
            <div>
                <h3 className="text-[18px] lg:text-[22px] my-[4px] font-Inter font-bold">Verify your email</h3>
                <p className="max-w-[320px] text-[12px] lg:text-[14px]">
                    Hi <span className="font-medium">{firstName}!</span> use the link below to verify your email and start enjoying songshari.com
                </p>
                <button
                    className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-[14px] lg:text-[16px] w-[130px] lg:w-[220px] py-1 text-white rounded-[4px] mt-[10px] focus:shadow-md flex justify-center items-center"
                    onClick={() => sendOtpByToken()}
                    disabled={isLoading}
                >
                    {isSuccess ? "Sent otp" : isLoading ? "....." : "Verify email"}
                </button>
                {isSuccess && <EmailOtp />}
            </div>
        );
    } else if (isEmailVerified) {
        content = (
            <div>
                <div className="flex items-center gap-x-[10px] text-[16px]">
                    Your Profile is verified <BsFillCheckCircleFill className="text-green-500" />
                </div>
                <p className="text-[12px] font-outfit">Enjoy songshari.com</p>
            </div>
        );
    }
    return content;
};
