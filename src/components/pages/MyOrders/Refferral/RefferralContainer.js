import { Tabs } from "antd";
import React from "react";
import { AllRefferedContainer } from "./AllReffered/AllRefferedContainer";
import { WithDrawContainer } from "./Withdraw/WithDrawContainer";

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
            label: `WithDraw`,
            children: <WithDrawContainer />,
        },
    ];
    return (
        <div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    );
};
