import { Select } from "antd";
import React from "react";

export const StatusSelector = () => {
    return (
        <div className="h-[120px] shadow-[rgba(0,0,0,0.24)_0px_3px_8px] rounded-[6px] p-[12px]">
            <div className="flex justify-between w-full items-center">
                <div>
                    <div className="flex flex-col gap-y-[15px] justify-center h-full items-start">
                        <div>
                            <span className="font-Nunito text-[22px]">My Orders</span> <span>(Your Total Order: 2)</span>
                        </div>
                        <button className="border-[1px] border-primary w-[140px] h-[40px] rounded-[50px]">Contact Us</button>
                    </div>
                </div>
                <div>
                    status:{" "}
                    <Select
                        style={{
                            width: 160,
                        }}
                        loading={false}
                        options={[
                            {
                                value: "processing",
                                label: "Processing",
                            },
                            {
                                value: "approved",
                                label: "Approved",
                            },
                        ]}
                        placeholder="Select Status"
                    />
                </div>
            </div>
        </div>
    );
};
