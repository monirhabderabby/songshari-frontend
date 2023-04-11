import { Tooltip } from "@mui/material";
import { Tabs } from "antd";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegClone } from "react-icons/fa";
import { useGetReferOfMeQuery } from "../../../../Redux/features/Ticket/ticketApi";
import { AllRefferedContainer } from "./AllReffered/AllRefferedContainer";
import { WithDrawContainer } from "./Withdraw/WithDrawContainer";

export const RefferralContainer = () => {
    const [isCoppied, setCoppied] = useState(false);

    const { data, isLoading, isSuccess } = useGetReferOfMeQuery();
    const { referral } = data || {};

    const items = [
        {
            key: "1",
            label: `Referred`,
            children: <AllRefferedContainer referral={referral} />,
        },
        {
            key: "2",
            label: `WithDraw`,
            children: <WithDrawContainer />,
        },
    ];

    const onChange = key => {
        console.log(key);
    };

    return (
        <div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            {!isLoading && isSuccess && (
                <div className="mt-[10px] text-gray-500 font-Nunito flex flex-col lg:flex-row gap-y-[12px] items-start lg:justify-between lg:items-center">
                    <p>Your refer id: #{referral?.length > 0 && referral[0]?.referralId}</p>
                    <div className="flex items-center gap-x-[20px] shadow-[rgba(0,0,0,0.09)_0px_3px_12px] h-[40px] text-[10px] lg:text-[16px]  px-4">
                        <p>{referral?.length > 0 && referral[0]?.link}</p>
                        <CopyToClipboard text={referral?.length > 0 && referral[0]?.link} onCopy={() => setCoppied(true)}>
                            <Tooltip title={isCoppied ? "copied" : "copy to clipboard"}>
                                <button className="bg-[linear-gradient(315deg,#eb4786_0%,#b854ab_74%)] p-2 rounded-[8px] cursor-pointer">
                                    <FaRegClone className="text-white hover:shadow-xl " />
                                </button>
                            </Tooltip>
                        </CopyToClipboard>
                    </div>
                </div>
            )}
        </div>
    );
};
