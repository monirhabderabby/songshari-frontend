import React from "react";

export const Account = () => {
    return (
        <div>
            <div className="font-Nunito border-b-[1px] border-[#eeeeee] w-auto pb-[7px]">
                <h3 className="text-[24px] text-gray-500">Change password</h3>
                <h5 className="text-[16px] text-gray-400">Do not share your password with anyone</h5>
            </div>

            <form className="my-[20px] flex flex-col items-start">
                <label htmlFor="email" className="font-Inter">
                    <h3 className="text-[14px] text-gray-500">Your email address</h3>
                    <p className="text-[10px] text-gray-400">The email address with which the account was opened</p>
                </label>
                <input type="email" name="email" className="bg-transparent h-[35px] w-[500px] border-[1px] border-[#bdbdbd] mt-[8px] rounded-[4px]" />
                <input
                    type="submit"
                    value="Send password reset link"
                    className="mt-[20px] cursor-pointer hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] px-4 py-2 rounded-[50px] text-white bg-[linear-gradient(166deg,rgba(242,40,118,0.8)_20%,rgba(148,45,217,0.8)_100%)] duration-300"
                />
            </form>
        </div>
    );
};
