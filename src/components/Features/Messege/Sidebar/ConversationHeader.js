import { Select } from "antd";
import React from "react";
import { BiMessageDetail } from "react-icons/bi";

export const ConversationHeader = () => {
    return (
        <div className="xl:max-w-[546px] lg:max-w-[337px] min-w-[400px] bg-white h-[122px] rounded-[20px] shadow-[0px_3px_4px_rgba(62,73,84,0.04)] flex items-center justify-between px-[30px]">
            <div className="flex items-center gap-x-[15px]">
                <img
                    className="w-[57px] h-[57px] rounded-full"
                    src="https://i.postimg.cc/j2nh3WBh/310814492-3383940818533755-1197676094327108122-n.jpg"
                    alt="profile"
                />
                <div className="flex flex-col justify-center">
                    <p className="text-[#000000] font-semibold text-[18px] font-">Monir Hossain</p>
                    <Select
                        defaultValue="Active"
                        className="m-0"
                        style={{
                            width: 100,
                        }}
                        bordered={false}
                        options={[
                            {
                                value: "Active",
                                label: "Active",
                            },
                            {
                                value: "Offline",
                                label: "Offline",
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="bg-[#A32BCA] w-[144px] h-[49px] rounded-[27px] flex justify-center items-center gap-x-[14px]">
                <BiMessageDetail className="text-white text-[22px]" />
                <div className="text-white text-[16px] font-medium">+ New</div>
            </div>
        </div>
    );
};
