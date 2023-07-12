import React, { useState, useEffect } from "react";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {  useVerifyNewEmailAndPasswordMutation } from "../../../../Redux/features/Verification.js/verification";
import OtpPopup from "./OtpPopup";
import Error from "../../../ui/error/Error";
import { SuccessSnackBar } from "../../../ui/error/snackBar/SuccessSnackBar";

const ChangeEmail = () => {
  const [successSnackBarOpen, setSuccessSnackBarOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [customError, setCustomError] = useState("")
  const [password, setPassword] = useState();
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState();
  const [open, setOpen] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [verifyNewEmailAndPassword, { data, isLoading, error }] = useVerifyNewEmailAndPasswordMutation();
  console.log(data, isLoading, error);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      verifyNewEmailAndPassword({email, password})
    } else {
      setCustomError("Both email and password is required");
    }
  };

  useEffect(() => {
    if (data) {
      setMessage(data?.message);
      setOpen(true);
      setSuccessSnackBarOpen(true);
      setOtp(data?.data?.otp);
      setCustomError("");
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      setCustomError(error?.data?.message);
    }
  }, [error]);

  
  return (
    <div>
      <div className="font-Nunito border-b-[1px] border-[#eeeeee] w-auto pb-[7px]">
        <h3 className="text-[24px] text-gray-500">Change Email</h3>
        <h5 className="text-[16px] text-gray-400">
          Some verification will be needed to change email
        </h5>
      </div>

      <form
        onSubmit={handleSubmit}
        className="my-[20px] flex flex-col items-start w-full"
      >
        <div className="relative w-full md:w-[500px]">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={showPass ? "text" : "password"}
            name="confirmPassword"
            placeholder="Enter current password"
            className={`relative bg-transparent px-4 outline-1 h-[50px] w-full lg:w-[500px] border-[1px] border-[#bdbdbd] mt-[8px] rounded-[4px]`}
          />
          <span
            onClick={() => setShowPass(!showPass)}
            className={`flex cursor-pointer ${
              showPass
                ? "bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]"
                : "bg-gray-400"
            } items-center justify-center absolute p-1 h-10 w-10 rounded-full right-3 top-3`}
          >
            {showPass ? (
              <VisibilityOffIcon style={{ fill: "white" }} />
            ) : (
              <RemoveRedEyeIcon style={{ fill: "white" }} />
            )}
          </span>
        </div>
        <div className="relative w-full md:w-[500px]">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter new Email"
            className={`relative bg-transparent px-4 outline-1 h-[50px] w-full lg:w-[500px] border-[1px] border-[#bdbdbd] mt-[8px] rounded-[4px]`}
          />
        </div>
        {customError && (
          <div className="relative w-full md:w-[500px]">
            <Error message={customError} />
          </div>
        )}
        <input
          type="submit"
          value={isLoading ? "Loading..." : "Update email"}
          className="mt-[20px] cursor-pointer hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] px-4 py-2 rounded-[50px] text-white bg-[linear-gradient(166deg,rgba(242,40,118,0.8)_20%,rgba(148,45,217,0.8)_100%)] duration-300"
        />
      </form>
      {open && (
        <OtpPopup
          setOpen={setOpen}
          otp={otp}
          setEmail={setEmail}
          setPassword={setPassword}
          email={email}
          setMessage={setMessage}
          successSnackBarOpen={successSnackBarOpen}
          setSuccessSnackBarOpen={setSuccessSnackBarOpen}
        />
      )}
      <SuccessSnackBar
        successSnackBarOpen={successSnackBarOpen}
        setSuccessSnackBarOpen={setSuccessSnackBarOpen}
        message={message}
      />
    </div>
  );
};

export default ChangeEmail;
