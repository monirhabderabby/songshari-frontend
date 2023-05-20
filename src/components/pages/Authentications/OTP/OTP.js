// configuration
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

// Third party packages
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router";
import hideemail from "../../../../assets/utilities/hideEmail/hideEmail";

// components
import { useDispatch } from "react-redux";
import getCookie from "../../../../Helper/cookies/getCookie";
import { useReSendOtpMutation, useVerifyEmailMutation } from "../../../../Redux/features/userInfo/userApi";
import { setVerificationData } from "../../../../Redux/features/userInfo/verificationSlice";
import Error from "../../../ui/error/Error";

export const OTP = () => {
    // hook variables
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [verifyEmail, { data, isLoading, error }] = useVerifyEmailMutation();
    const [reSendOtp, { data: reSendResponse, isLoading: reSendLoading }] = useReSendOtpMutation();
    const [customError, setCustomError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //js variables
    const token = getCookie("token");
    const myDocodeToken = decodeToken(token);

    useEffect(() => {
        if (data?.message === "Email verified") {
            dispatch(setVerificationData(true));
            setTimeout(navigate("/userProfile"), 200);
        }
    }, [navigate, data?.message, dispatch]);

    useEffect(() => {
        if (error && error?.data?.success === false) {
            setCustomError(error?.data?.message);
        }
    }, [error]);

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
        const result = {
            otp: proceedOtp,
        };
        verifyEmail(result);
    };

    const reSentOtpHandler = async () => {
        await reSendOtp();
        if (reSendResponse) {
            toast.success(`OTP sent to your ${hideemail(myDocodeToken?.email)}`);
        }
    };
    return (
        <>
            <div className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"></div>
            <div className="rounded sm:max-w-full w-[400px] space-y-4 bg-white absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <div className="relative max-w-lg mx-auto bg-white shadow-xl rounded-2xl px-6 pt-10 pb-9">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                        <div className="font-semibold text-3xl">
                            <p>Email Verification</p>
                        </div>
                        <div className="flex flex-row text-sm font-medium text-gray-400">
                            <p>
                                We have sent a code to your email <br /> {hideemail(myDocodeToken?.email)}
                            </p>
                        </div>
                    </div>
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
                                        className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] border-none text-white text-sm shadow-sm"
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
                </div>
            </div>
        </>
    );
};
