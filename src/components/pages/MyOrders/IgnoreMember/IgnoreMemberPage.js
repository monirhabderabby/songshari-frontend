import React from 'react';

import { Tabs } from "antd";
import Ignored from './Ignored';
import Active from './active';

const IgnoreMemberPage = () => {
    const onChange = key => {
        console.log(key);
    };
    const items = [
        {
            key: "1",
            label: `Ignored Members`,
            children: <Ignored />,
        },
        {
            key: "2",
            label: `Active Members`,
            children: <Active />
        },
    ];
    return (
        <div>
            <h3 className="text-[20px] text-gray-600">Ignore Member</h3>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    );
}

export default IgnoreMemberPage;
