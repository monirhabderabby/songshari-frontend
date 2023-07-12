import { Tooltip } from "@mui/material";
import React from "react";
import { BsShopWindow } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { MdManageAccounts, MdOutlineNotificationsActive } from "react-icons/md";
import { useNavigate } from "react-router";

const UtilitisCard = ({ data }) => {
    const navigate = useNavigate();
    return (
        <div>
            <div
                className="utiliti-card w-full bg-white rounded-[10px] mt-[24px] py-6 flex items-center justify-around"
                style={{ boxShadow: "0px 10px 5px rgba(119, 123, 146, 0.02)" }}
            >
                <Tooltip title="Message">
                    <div onClick={() => navigate("/inbox")} className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F8E9F7]">
                        <button type="button" className="w-12 h-12 rounded-full inline-flex relative items-center p-2 text-xl text-center">
                            <HiOutlineMail className="text-lg text-[#0000EE] ml-[6px]" />
                            <span className="sr-only">Notifications</span>
                            <div className="inline-flex absolute bottom-6 left-6 justify-center items-center w-4 h-4 text-xs font-bold text-white bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-full">
                                <small>20</small>
                            </div>
                        </button>
                    </div>
                </Tooltip>

                <Tooltip title="Notification">
                    <div
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F8E9F7]"
                        onClick={() => navigate(`/desktopNotification/${data?._id}`)}
                    >
                        <button type="button" className="w-12 h-12 rounded-full inline-flex relative items-center p-2 text-xl text-center">
                            <MdOutlineNotificationsActive className="text-lg text-[#0000EE] ml-[6px]" />
                            <span className="sr-only">Notifications</span>
                            {data?.notificationCount!==0 && <div className="inline-flex absolute bottom-6 left-6 justify-center items-center w-4 h-4 text-xs font-bold text-white bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-full ">
                                <small>{data?.notificationCount>9? "9+":data?.notificationCount}</small>
                            </div>}
                        </button>
                    </div>
                </Tooltip>

                <Tooltip title="Setting">
                    <div
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F8E9F7]"
                        onClick={() => navigate("/my-orders/account")}
                    >
                        <button
                            type="button"
                            className="w-12 h-12 rounded-full inline-flex relative items-center p-3 text-xl text-center text-white "
                        >
                            <MdManageAccounts className="text-lg text-[#0000EE] ml-[2px]" />
                        </button>
                    </div>
                </Tooltip>
                <Tooltip title="My Orders">
                    <div
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F8E9F7]"
                        onClick={() => navigate("/my-orders/orderStatus")}
                    >
                        <button
                            type="button"
                            className="w-12 h-12 rounded-full inline-flex relative items-center p-3 text-xl text-center text-white "
                        >
                            <BsShopWindow className="text-lg text-[#0000EE] ml-[2px]" />
                        </button>
                    </div>
                </Tooltip>
            </div>
        </div>
    );
};

export default UtilitisCard;
