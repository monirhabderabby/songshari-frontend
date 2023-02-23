import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "../../../../App.css";
import setCookie from "../../../../Helper/cookies/setCookie";
import {
  useSendOtpByEmailMutation,
  useChangePasswordMutation,
} from "../../../../Redux/features/Verification.js/verification";
import OtpInput from "./OtpInput";
import PasswordInput from "./PasswordInput";
import SendOtp from "./SendOtp";

export default function ForgetPasswordModal({ setOpen }) {
  const [email, setEmail] = useState("");
  const [sendOtpByEmail, { data, isLoading, error }] =
    useSendOtpByEmailMutation();
  const [
    changePassword,
    { data: otpData, isLoading: passLoading, error: otpError },
  ] = useChangePasswordMutation();

  useEffect(() => {
    if (data) toast.success(data?.message);
    if (error) toast.error(error?.message);
    if (otpError) toast.error(otpError?.message);
  }, [data, error, otpError]);
  useEffect(() => {
    if (otpData) {
      setCookie("token", otpData?.data?.token);
    }
  }, [otpData]);
  return (
    <>
      {!data && !otpData && (
        <SendOtp
          sendOtpByEmail={sendOtpByEmail}
          isLoading={isLoading}
          setOpen={setOpen}
          email={email}
          setEmail={setEmail}
        />
      )}
      {!otpData && data && (
        <OtpInput
          changePassword={changePassword}
          passLoading={passLoading}
          email={email}
          setOpen={setOpen}
        />
      )}
      {data && otpData && <PasswordInput setOpen={setOpen} />}
    </>
  );
}

// className="flex-1 outline-none h-full text-sm bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] w-full rounded-xl p-2 mt-3 text-white"

// className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
