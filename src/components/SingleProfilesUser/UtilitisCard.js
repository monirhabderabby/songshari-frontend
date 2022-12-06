import React from "react";
import { FiSettings } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import "../../assets/css/utiliticard.css";

const UtilitisCard = () => {
    return (
        <div>
            <div
                className="utiliti-card bg-white rounded-[10px] mt-[30px] py-6 flex items-center justify-around"
                style={{ boxShadow: "0px 10px 5px rgba(119, 123, 146, 0.02)" }}
            >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F8E9F7]">
                    <button type="button" className="w-12 h-12 rounded-full inline-flex relative items-center p-2 text-xl text-center">
                        <HiOutlineMail className="text-xl text-[#0000EE] ml-[6px]" />
                        <span className="sr-only">Notifications</span>
                        <div className="inline-flex absolute bottom-6 left-6 justify-center items-center w-5 h-5 text-xs font-bold text-white bg-gradient rounded-full border-2 border-white dark:border-gray-900">
                            <small>20</small>
                        </div>
                    </button>
                </div>
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F8E9F7]">
                    <button type="button" className="w-12 h-12 rounded-full inline-flex relative items-center p-2 text-xl text-center">
                        <MdOutlineNotificationsActive className="text-xl text-[#0000EE] ml-[6px]" />
                        <span className="sr-only">Notifications</span>
                        <div className="inline-flex absolute bottom-6 left-6 justify-center items-center w-5 h-5 text-xs font-bold text-white bg-gradient rounded-full border-2 border-white dark:border-gray-900">
                            <small>12</small>
                        </div>
                    </button>
                </div>
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F8E9F7]">
                    <button type="button" className="w-12 h-12 rounded-full inline-flex relative items-center p-3 text-xl text-center text-white ">
                        <FiSettings className="text-lg text-[#0000EE] ml-[2px]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UtilitisCard;
