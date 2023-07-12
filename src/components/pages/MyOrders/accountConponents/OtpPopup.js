/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useRef} from 'react';

import ErrorIcon from "@mui/icons-material/Error";
import { useUpdateEmailMutation } from '../../../../Redux/features/Verification.js/verification';

const OtpPopup = ({
  setOpen,
  otp,
  email,
  setEmail,
  setPassword,
  setMessage,
  successSnackBarOpen,
  setSuccessSnackBarOpen,
}) => {
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return; // only allow numeric input
    const newOtp = [...otpValues];
    newOtp[index] = value;
    setOtpValues(newOtp);

    if (value !== "" && index < otpValues.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  const [updateEmail, { data }] = useUpdateEmailMutation();

  useEffect(() => {
    if (otp && otp === otpValues.join("")) {
      updateEmail({ email });
    }
  }, [otpValues, otp]);

  useEffect(() => {
    if (data) {
      setMessage(data?.message);
      setOpen(false);
      setEmail("");
      setPassword("");
      setSuccessSnackBarOpen(true);
    }
  }, [data]);
  return (
    <>
      <div className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"></div>
      <div className="rounded sm:max-w-full w-[400px] space-y-4 bg-white p-6 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <h2 className=" text-3xl font-extrabold text-gray-900">
          Verification code!
        </h2>
        <p>
          A 6 digit verification code sent to your new email. please type it
          here.
        </p>
        <div className="flex justify-center items-center h-full">
          <div className="flex space-x-4">
            {otpValues.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                className="otp-input w-12 h-12 text-2xl font-bold border-2 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => handleChange(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ))}
          </div>
        </div>
        {otp &&
          otp !== otpValues.join("") &&
          otpValues.join("").length === 6 && (
            <div className="flex items-center justify-center text-yellow-500">
              <div>
                <ErrorIcon />
              </div>
              <p>Wrong OTP</p>
            </div>
          )}
        <button
          onClick={() => setOpen(false)}
          className="flex-1 outline-none h-full text-sm bg-gray-200 w-full rounded-xl p-2 mt-3 text-black"
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default OtpPopup;
