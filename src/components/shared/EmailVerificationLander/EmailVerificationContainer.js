import React, { useEffect, useRef } from "react";

// lottie files
import lottie from "lottie-web";
import { decodeToken } from "react-jwt";
import getCookie from "../../../Helper/cookies/getCookie";
import { useSendOtpByTokenMutation } from "../../../Redux/features/Verification.js/verification";
import plan from "../../../assets/lottieFiles/awaiting-email.json";
import { OvalLoader } from "../Cards/Loader/OvalLoader/OvalLoader";
import { OtpInput } from "./OtpInput";

export const EmailVerificationContainer = ({ from }) => {
    const animationContainer = useRef(null);

    //Api
    const [sendOtpByToken, { isLoading: sentOtpLoading, isSuccess: otpSentSuccess }] = useSendOtpByTokenMutation();

    //js variables
    const token = getCookie("token");
    const myDocodeToken = decodeToken(token);
    const { email } = myDocodeToken || {};

    // function declaration
    const otpSentHandler = () => {
        sendOtpByToken();
    };

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: "svg", // Choose the appropriate renderer (svg, canvas, html)
            loop: true,
            autoplay: true,
            animationData: plan,
        });

        return () => {
            // Clean up the animation when the component unmounts
            anim.destroy();
        };
    }, []);
    return (
        <div className="w-full flex flex-col items-center">
            <div ref={animationContainer} className=" w-[200px]"></div>
            <div className="content text-center w-full lg:w-1/2">
                <h1 className="text-[22px] font-Inter font-semibold">Verify your email address</h1>
                <p className="font-Nunito text-[14px]">
                    You've entered <span className="font-bold">{email}</span> as the email address for your account.
                </p>
                <p className="font-Nunito text-[14px]">
                    Unlock the full potential of our website by verifying your email! Gain access to exclusive features and personalized benefits by
                    simply confirming your email address.
                </p>
            </div>

            <section className="mt-[30px]">
                {!otpSentSuccess && (
                    <button
                        className={`
                        ${sentOtpLoading ? "bg-[#eaeaea]" : "bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]"}
                        w-[220px] py-1 text-white rounded-[4px] mt-[10px] focus:shadow-md flex justify-center items-center disabled:bg-[#eaeaea]`}
                        onClick={otpSentHandler}
                        disabled={sentOtpLoading || otpSentSuccess}
                    >
                        {sentOtpLoading ? <OvalLoader height={20} width={20} color="#ffffff" /> : "Verify your email"}
                    </button>
                )}
                {otpSentSuccess && <OtpInput from={from} />}
            </section>
        </div>
    );
};
