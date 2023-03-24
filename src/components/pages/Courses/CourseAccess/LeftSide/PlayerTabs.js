import { Tabs } from "antd";
import React from "react";

export const PlayerTabs = () => {
    const onChange = key => {
        console.log(key);
    };
    const items = [
        {
            key: "1",
            label: `Video Description`,
            children: `Content of Tab Pane 1`,
        },
        {
            key: "2",
            label: `Quiz`,
            children: "fdshfsdhf",
        },
    ];

    return (
        <div className="mt-[15px]">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    );
};
