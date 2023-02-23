import React, { useState } from "react";
import { toast } from "react-hot-toast";

const OtpInput = ({ email, setOpen, changePassword, passLoading }) => {
  const [otp, setOtp] = useState("");
  console.log(otp);
  const submitOtp = (e) => {
    e.preventDefault();
    if (otp.length === 6 && typeof (otp * 1) === "number")
      changePassword({ data: { email, otp } });
    else {
      toast.error("OTP validation failed");
    }
  };

  return (
    <>
      <div className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"></div>
      <div className="rounded sm:max-w-full w-[400px] space-y-4 bg-white p-6 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <h2 className=" text-3xl font-extrabold text-gray-900">
          Verification code!
        </h2>
        <p>
          A 6 digit verification code sent to your email. please type it here.
        </p>
        <form onSubmit={submitOtp}>
          <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl">
            <input
              onChange={(e) => setOtp(e.target.value)}
              type="text"
              name="otp"
              className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
              placeholder="OTP"
            />
          </div>
          <button
            type="submit"
            className="flex-1 outline-none h-full text-sm bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] w-full rounded-xl p-2 mt-3 text-white"
          >
            {passLoading ? "Loading..." : "Submit"}
          </button>
        </form>
        <button onClick={()=>setOpen(false)} className="flex-1 outline-none h-full text-sm bg-gray-200 w-full rounded-xl p-2 mt-3 text-black">
          Cancel
        </button>
      </div>
    </>
  );
};

export default OtpInput;
