import { Select } from "antd";
import React, { useState } from "react";
import { SupportHeader } from "./SupportHeader";
import SupportTable from "./SupportTable";

export const SupportContainer = () => {
    const [status, setStatus] = useState("");
    return (
        <div>
            <SupportHeader />
            <div className="mt-[20px] lg:mt-[40px] border-[1px] border-gray-200 rounded-[4px]  w-full h-auto">
                <div className="w-full flex justify-between items-center px-[20px]">
                    <h4 className=" py-[10px] text-[16px] lg:text-[20px] font-semibold font-Inter">All Tickets</h4>
                    <Select
                        defaultValue=""
                        style={{
                            width: 120,
                        }}
                        onChange={value => setStatus(value)}
                        options={[
                            {
                                value: "",
                                label: "All",
                            },
                            {
                                value: "closed",
                                label: "Closed",
                            },
                            {
                                value: "Opened",
                                label: "Opened",
                            },
                            {
                                value: "Solved",
                                label: "Solved",
                            },
                        ]}
                    />
                </div>
                <div className="overflow-auto">
                    <SupportTable status={status} />
                </div>
            </div>
        </div>
    );
};
