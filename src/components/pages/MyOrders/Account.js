import React, { useState, useEffect } from "react";

import { Toaster, toast } from "react-hot-toast";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useUpdatePassWordMutation } from "../../../Redux/features/Verification.js/verification";

export const Account = () => {
  const [showOldPass, setShowOldPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  // Redux Hook
  const [updatePassWord, { data, isLoading, error }] =
    useUpdatePassWordMutation();

  useEffect(() => {
    if (data) {
      setNewPass("");
      setOldPass("");
      setConfirmPass("");
      toast.success("Password changed successfully");
    }
  }, [data]);
  useEffect(() => {
    if (error) {
      setNewPass("");
      setOldPass("");
      setConfirmPass("");
      toast.error(error?.message);
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!oldPass) return toast.error("Please type old Password");
    if (!newPass) return toast.error("Please type new Password");
    if (confirmPass !== newPass)
      return toast.error(
        "Confirm password you entered, doesn't match to new password"
      );
    if (newPass.length < 8)
          return toast.error("New password must be at least 8 characters");
    
    updatePassWord({ newPass:newPass, oldPass:oldPass });
  };
  return (
    <div className="w-full">
      <div className="font-Nunito border-b-[1px] border-[#eeeeee] w-auto pb-[7px]">
        <h3 className="text-[24px] text-gray-500">Change password</h3>
        <h5 className="text-[16px] text-gray-400">
          Do not share your password with anyone
        </h5>
      </div>

      <form
        onSubmit={handleSubmit}
        className="my-[20px] flex flex-col items-start"
      >
        <div className="relative">
          <input
            onChange={(e) => setOldPass(e.target.value)}
            type={showOldPass ? "text" : "password"}
            value={oldPass}
            name="oldPassword"
            placeholder="Old Password"
            className={`relative bg-transparent px-4 focus:outline-cyan-500 outline-1 h-[50px] w-full lg:w-[500px] border-[1px] border-[#bdbdbd] mt-[8px] rounded-[4px]`}
          />
          <span
            onClick={() => setShowOldPass(!showOldPass)}
            className={`flex cursor-pointer ${
              showOldPass ? "bg-cyan-500" : "bg-gray-400"
            } items-center justify-center absolute p-1 h-10 w-10 rounded-full right-3 top-3`}
          >
            {showOldPass ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
          </span>
        </div>

        <div className="relative">
          <input
            onChange={(e) => setNewPass(e.target.value)}
            type={showNewPass ? "text" : "password"}
            name="newPassword"
            value={newPass}
            placeholder="New Password"
            className={`relative bg-transparent px-4 focus:outline-cyan-500 outline-1 h-[50px] w-full lg:w-[500px] border-[1px] border-[#bdbdbd] mt-[8px] rounded-[4px]`}
          />
          <span
            onClick={() => setShowNewPass(!showNewPass)}
            className={`flex cursor-pointer ${
              showNewPass ? "bg-cyan-500" : "bg-gray-400"
            } items-center justify-center absolute p-1 h-10 w-10 rounded-full right-3 top-3`}
          >
            {showNewPass ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
          </span>
        </div>
        <div className="relative">
          <input
            onChange={(e) => setConfirmPass(e.target.value)}
            value={confirmPass}
            type={showConfirmPass ? "text" : "password"}
            name="confirmPassword"
            placeholder="Retype New Password"
            className={`relative bg-transparent px-4 focus:outline-cyan-500 outline-1 h-[50px] w-full lg:w-[500px] border-[1px] border-[#bdbdbd] mt-[8px] rounded-[4px]`}
          />
          <span
            onClick={() => setShowConfirmPass(!showConfirmPass)}
            className={`flex cursor-pointer ${
              showConfirmPass ? "bg-cyan-500" : "bg-gray-400"
            } items-center justify-center absolute p-1 h-10 w-10 rounded-full right-3 top-3`}
          >
            {showConfirmPass ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
          </span>
        </div>

        <input
          type="submit"
          value={isLoading?"Loading...":"Update password"}
          className="mt-[20px] cursor-pointer hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] px-4 py-2 rounded-[50px] text-white bg-[linear-gradient(166deg,rgba(242,40,118,0.8)_20%,rgba(148,45,217,0.8)_100%)] duration-300"
        />
      </form>
      <Toaster />
    </div>
  );
};
