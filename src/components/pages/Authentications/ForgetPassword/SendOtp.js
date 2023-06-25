import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import "../../../../App.css";

const SendOtp = ({ isLoading, setOpen, sendOtpByEmail, email, setEmail }) => {
    const onsubmit = e => {
        e.preventDefault();
        return sendOtpByEmail({ data: { email } });
    };
    return (
        <AnimatePresence>
            <div className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer flex justify-center items-center"></div>
            <motion.div
                initial={{
                    opacity: 0,
                    y: "-100px",
                    x: "-200px",
                    scale: 0.6,
                }}
                animate={{
                    opacity: 1,
                    y: "-100px",
                    x: "-200px",
                    scale: 1,
                    transition: { duration: 0.4, ease: "easeOut" },
                }}
                exit={{
                    opacity: 0,
                    y: "-100px",
                    x: "-200px",
                    scale: 0,
                    transition: { duration: 0.3, ease: "easeInOut" },
                }}
                className="rounded sm:max-w-full w-[400px] space-y-4  bg-white p-6 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
            >
                <h2 className=" text-3xl font-extrabold text-gray-900 whitespace-nowrap">Forgot your password?</h2>
                <p>We'll mail you a Verification Code</p>
                <form onSubmit={e => onsubmit(e)}>
                    <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl">
                        <input
                            type="text"
                            name="email"
                            className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                            placeholder="Email"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="flex-1 outline-none h-full text-sm bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] w-full rounded-xl p-2 mt-3 text-white"
                    >
                        {isLoading ? "Loading..." : "Send me a password reset OTP"}
                    </button>
                </form>
                <button
                    className="flex-1 outline-none h-full text-sm bg-gray-200 w-full rounded-xl p-2 mt-3 text-black"
                    onClick={() => setOpen(false)}
                >
                    Cancel
                </button>
            </motion.div>
        </AnimatePresence>
    );
};

export default SendOtp;
