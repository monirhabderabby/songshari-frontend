import { Tabs } from "antd";
import React from "react";
import { AllRefferedContainer } from "./AllReffered/AllRefferedContainer";
import { ReferralEarnings } from "./Earnings/ReferralEarnings";

export const RefferralContainer = () => {
    const onChange = key => {
        console.log(key);
    };
    const items = [
        {
            key: "1",
            label: `Referred`,
            children: <AllRefferedContainer />,
        },
        {
            key: "2",
            label: `Earnings`,
            children: <ReferralEarnings />,
        },
        {
            key: "3",
            label: `WithDraw`,
            children: `Content of Tab Pane 3`,
        },
    ];
    return (
        <div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    );
};
