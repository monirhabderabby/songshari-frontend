import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "../../../../App.css";
import {
  useSendOtpByEmailMutation,
} from "../../../../Redux/features/Verification.js/verification";
import OtpInput from "./OtpInput";
import PasswordInput from "./PasswordInput";
import SendOtp from "./SendOtp";

export default function ForgetPasswordModal({ setOpen }) {
  const [otp, setOtp] = useState("");
  const [submittedOtp, setSubmittedOtp] = useState("");
  const [email, setEmail] = useState("");
  const [sendOtpByEmail, { data, isLoading, error }] =
    useSendOtpByEmailMutation();
  useEffect(() => {
    if (data) {
      toast.success(data?.message);
      setOtp(data?.data?.otp);
    };
    if (error) toast.error(error?.message);
  }, [data, error]);
  return (
    <>
      {!data && !otp && (
        <SendOtp
          sendOtpByEmail={sendOtpByEmail}
          isLoading={isLoading}
          setOpen={setOpen}
          email={email}
          setEmail={setEmail}
        />
      )}
      {otp && data && (
        <OtpInput
          email={email}
          otp={otp}
          submittedOtp={submittedOtp}
          setSubmittedOtp={setSubmittedOtp}
          setOpen={setOpen}
        />
      )}
      {data && otp === submittedOtp && (
        <PasswordInput setOpen={setOpen} otp={otp} email={data?.data?.email} />
      )}
    </>
  );
}
