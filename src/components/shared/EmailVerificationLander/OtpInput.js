import React, { useState } from "react";

// Third party package
import { toast } from "react-hot-toast";
import { decodeToken } from "react-jwt";

// Components
import { useEffect } from "react";
import { useNavigate } from "react-router";
import getCookie from "../../../Helper/cookies/getCookie";
import { useReSendOtpMutation, useVerifyEmailMutation } from "../../../Redux/features/userInfo/userApi";
import hideEmail from "../../../assets/utilities/hideEmail/hideEmail";
import Error from "../../ui/error/Error";

export const OtpInput = ({ from }) => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [customError, setCustomError] = useState("");
    const [isActiveButton, setActiveButton] = useState(false);

    //API
    const [verifyEmail, { data, isLoading, error }] = useVerifyEmailMutation();
    const [reSendOtp, { data: reSendResponse, isLoading: reSendLoading }] = useReSendOtpMutation();

    //js variables
    const token = getCookie("token");
    const myDocodeToken = decodeToken(token);
    const navigate = useNavigate();

    // function declation
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;
        setCustomError("");

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const verifyHandler = e => {
        e.preventDefault();
        const proceedOtp = otp.join("");
        if (proceedOtp.length === 0) {
            setCustomError("Please enter OTP");
            return;
        } else {
            const result = {
                otp: proceedOtp,
            };
            verifyEmail(result);
        }
    };

    const reSentOtpHandler = async () => {
        await reSendOtp();
        if (reSendResponse) {
            toast.success(`OTP sent to your ${hideEmail(myDocodeToken?.email)}`);
        }
    };

    // useEffect
    useEffect(() => {
        if (data?.message === "Email verified") {
            navigate(from, { replace: true });
        }
    }, [navigate, data?.message, from]);

    useEffect(() => {
        if (error && error?.data?.success === false) {
            setCustomError(error?.data?.message);
        }
    }, [error]);

    // taking decision about button disability
    useEffect(() => {
        const proceedOtp = otp.join("");
        if (proceedOtp.length > 0) {
            setActiveButton(true);
        } else {
            setActiveButton(false);
        }
    }, [otp]);

    return (
        <form action="">
            <div className="flex flex-col">
                <div className="flex flex-row gap-x-[6px] items-center justify-between mx-auto w-full max-w-lg my-4">
                    {otp.map((data, index) => {
                        return (
                            <input
                                className="w-full h-10 flex flex-col items-center justify-center text-black text-center px-5 outline-none rounded-xl border border-gray-200 text-md bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                type="text"
                                name="otp"
                                maxLength="1"
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                                key={index}
                            />
                        );
                    })}
                </div>
                {customError && (
                    <div className="mb-4">
                        <Error message={customError} />
                    </div>
                )}

                <div className="flex flex-col space-y-5">
                    <div>
                        <button
                            className={`${
                                isActiveButton ? "bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]" : "bg-[#eaeaea]"
                            } flex flex-row items-center justify-center text-center w-full border rounded-[4px] outline-none py-3 border-none text-white text-[16px]`}
                            onClick={verifyHandler}
                        >
                            {isLoading ? "Verifying..." : "Verify Account"}
                        </button>
                        {data && <p className="w-full text-center text-2xl font-semibold text-[#5cb85c]">{data?.message}</p>}
                    </div>
                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                        <p>Didn't recieve code?</p>{" "}
                        <button className="flex flex-row items-center text-primary" onClick={reSentOtpHandler}>
                            {reSendLoading ? "Sending..." : "Resend"}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};
