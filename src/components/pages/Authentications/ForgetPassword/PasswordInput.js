import React, { useState } from "react";
import { toast } from "react-hot-toast";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useChangePasswordMutation } from "../../../../Redux/features/Verification.js/verification";

const PasswordInput = ({ setOpen, otp, email }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changePassword, { data, isLoading }] = useChangePasswordMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8)
      toast.error("Password must be at least 8 characters");
    else if (password === confirmPassword)
      changePassword({ otp, password, email });
    else toast.error("password doesn't match");
  };
  return data ? (
    <>
      <div className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"></div>
      <div className="rounded sm:max-w-full w-[400px] space-y-4 bg-white p-6 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <div className="text-[#4BB543] flex flex-col items-center mb-8">
          <div className="py-8 flex flex-col items-center">
            <CheckCircleIcon style={{ fontSize: "60px" }} />
          </div>
          <h2 className=" text-xl font-bold text-gray-900">
            Password Changed Successfully
          </h2>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="flex-1 outline-none h-full text-sm bg-gray-200 w-full rounded-xl p-4 mt-3 text-black"
        >
          Close
        </button>
      </div>
    </>
  ) : (
    <>
      <div className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"></div>
      <div className="rounded sm:max-w-full w-[400px] space-y-4 bg-white p-6 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <div className="text-[#4BB543] flex flex-col items-center mb-4">
          <div className="py-4 flex flex-col items-center">
            <CheckCircleIcon style={{ fontSize: "60px" }} />
          </div>
          <h2 className=" text-xl font-bold text-gray-900">Email Verified !</h2>
        </div>
        <p className="pl-[2px] text-[16px]">Set your new password here.</p>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center my-4 bg-gray-100 p-4 w-full rounded-xl">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              name="password"
              className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center bg-gray-100 p-4 w-full rounded-xl">
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="text"
              name="confirmPassword"
              className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            className="flex-1 outline-none h-full text-sm bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] w-full rounded-xl p-4 mt-3 text-white"
          >
            {isLoading ? "Loading..." : "Save Password"}
          </button>
        </form>
        <button
          onClick={() => setOpen(false)}
          className="flex-1 outline-none h-full text-sm bg-gray-200 w-full rounded-xl p-4 mt-3 text-black"
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default PasswordInput;
