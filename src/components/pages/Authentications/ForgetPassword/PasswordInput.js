import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"
import { toast } from "react-hot-toast";
import { useUpdatePersonalDetailsMutation } from "../../../../Redux/features/userInfo/userApi";

const PasswordInput = ({setOpen}) => {
  const navigate = useNavigate()
const [password, setPassword] = useState("")
  const [updatePassword, { data, isLoading }] =
    useUpdatePersonalDetailsMutation();
  const submitPassword = (e) => {
    e.preventDefault();
    if(password.length>=6) updatePassword({password})
  }
  useEffect(() => {
    if (data) {toast.success("Password changed")
  }
  },[data])
  
  return data? (
    <>
      <div className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"></div>
      <div className="rounded sm:max-w-full w-[400px] space-y-4 bg-white p-6 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <h2 className=" text-3xl font-extrabold text-gray-900">
          Password Change Successful
        </h2>
        <p className="my-24">
          You are logged in and you changed your password
        </p>
        
        <button onClick={()=>navigate("/")} className="flex-1 outline-none h-full text-sm bg-gray-200 w-full rounded-xl p-2 mt-3 text-black">
          Back to Home
        </button>
      </div>
    </>
  ):(
    <>
      <div className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"></div>
      <div className="rounded sm:max-w-full w-[400px] space-y-4 bg-white p-6 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <h2 className=" text-3xl font-extrabold text-gray-900">
          New Password !
        </h2>
        <p>
          Enter new password here.
        </p>
        <form onSubmit={submitPassword}>
          <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl">
            <input
              onChange={(e)=>setPassword(e.target.value)}
              type="text"
              name="password"
              className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="flex-1 outline-none h-full text-sm bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] w-full rounded-xl p-2 mt-3 text-white"
          >
            {isLoading?"Loading...":"Save Password"}
          </button>
        </form>
        <button onClick={()=>setOpen(false)} className="flex-1 outline-none h-full text-sm bg-gray-200 w-full rounded-xl p-2 mt-3 text-black">
          Cancel
        </button>
      </div>
    </>
  )
};

export default PasswordInput;
