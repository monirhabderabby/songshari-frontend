import React from "react";
import { FiSettings } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Popover } from 'antd'
import { useState } from "react";
import Notification from "./Notification/Notification";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { CancelOutlined } from "@mui/icons-material";

const UtilitisCard = () => {
    const [clicked, setClicked] = useState(false);
    const [hovered, setHovered] = useState(false);
    const hide = () => {
        setClicked(false);
        setHovered(false);
    };
    const handleHoverChange = (open) => {
        setHovered(open);
        setClicked(false);
    };
    const handleClickChange = (open) => {
        setHovered(false);
        setClicked(open);
    };

    const Title = () => {
        return (
            <div className="w-[340px]" >
                <div className="px-4 flex justify-between ">
                    <div>
                        <p>Notifications</p>
                        <p> <DoneAllIcon style={{ color: '#E41272', width: '16px' }} /><span className="text-xs" style={{ color: '#E41272' }}>Mark as read</span></p>
                    </div>
                    <div onClick={hide}>
                        <CancelOutlined style={{ color: '#67868F' }} />
                    </div>
                </div>
            </div>

        )
    }
    return (
        <div>
            <div
                className="utiliti-card bg-white rounded-[10px] mt-[24px] py-6 flex items-center justify-around"
                style={{ boxShadow: "0px 10px 5px rgba(119, 123, 146, 0.02)" }}
            >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F8E9F7]">
                    <button type="button" className="w-12 h-12 rounded-full inline-flex relative items-center p-2 text-xl text-center">
                        <HiOutlineMail className="text-xl text-[#0000EE] ml-[6px]" />
                        <span className="sr-only">Notifications</span>
                        <div className="inline-flex absolute bottom-6 left-6 justify-center items-center w-5 h-5 text-xs font-bold text-white bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-full">
                            <small>20</small>
                        </div>
                    </button>
                </div>


                <Popover

                    content={<Notification />}
                    title={<Title />}
                    trigger="hover"
                    open={hovered}
                    onOpenChange={handleHoverChange}
                    placement="bottom"

                >

                    <Popover
                        content={
                            <Notification />
                        }
                        title={<Title />}
                        trigger="click"
                        open={clicked}
                        placement="bottom"
                        onOpenChange={handleClickChange}


                    >
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F8E9F7]">
                            <button type="button" className="w-12 h-12 rounded-full inline-flex relative items-center p-2 text-xl text-center">
                                <MdOutlineNotificationsActive className="text-xl text-[#0000EE] ml-[6px]" />
                                <span className="sr-only">Notifications</span>
                                <div className="inline-flex absolute bottom-6 left-6 justify-center items-center w-5 h-5 text-xs font-bold text-white bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-full ">
                                    <small>12</small>
                                </div>
                            </button>
                        </div>
                    </Popover>
                </Popover>


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
