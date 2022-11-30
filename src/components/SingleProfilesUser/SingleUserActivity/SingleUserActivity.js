import React from 'react';
import { DynamicActivityPage } from '../../pages/DynamicProfilePage/DynamicActivityPage';
import profile from "../../../assets/images/profile/up1.png";
import { MdCreateNewFolder } from "react-icons/md";

const SingleUserActivity = () => {
    return (
        <div className="grid grid-cols-1 gap-y-[30px]">
            <div className="w-[457px] mx-auto shadow-[2px_2px_4px_rgba(0,0,0,0.12)] bg-white rounded-[10px] p-[30px] font-Inter font-normal text-[11px]">
                <div className="flex w-full h-[100px] gap-[19px]">
                    <img className="w-12 h-10 rounded-full" src={profile} alt="profile" />
                    <textarea className='text-[#757575] w-full focus:outline-none resize-none' placeholder='Write somethiings here......'></textarea>
                </div>
                <hr />
                <div className="flex w-full justify-between mt-[30px]">
                    <div className='flex items-center'>
                        <label className='mr-[10px] bg-[#F7E9F8] rounded-[20px] cursor-pointer'>
                            <div className='flex items-center justify-center h-[30px] w-[60px] text-2xl text-[#E41272]'>
                                <MdCreateNewFolder />
                            </div>
                            <input className='hidden' type="file" id='' accept=".png, .jpg, .jpeg" />
                        </label>
                        <div className='flex items-center cursor-pointer border border-[rgba(0, 0, 0, 0.2)] rounded-[50px] px-3 py-2 text-[#333333]'>
                            <select id="" className="focus:outline-none cursor-pointer">
                                <option selected>PUBLIC</option>
                                <option value="friends">Friends</option>
                                <option value="me">Only Me</option>
                            </select>
                        </div>
                    </div>
                    <button className="border-[1px] border-[rgba(0,0,0,0.1)] rounded-[50px] py-[6px] px-5 font-bold text-[17px] text-[#FFFFFF] bg-gradient-to-t from-[#942DD9] to-[#F22876] shadow-[0.872px_9.962px_20px_rgba(12, 78, 165, 0.3)]">
                        Post
                    </button>
                </div>
            </div>
            <DynamicActivityPage></DynamicActivityPage>
        </div>
    );
};

export default SingleUserActivity;