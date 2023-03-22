import { Collapse, Progress } from "antd";
import React from "react";

// Third party packages
const { Panel } = Collapse;

export const CourseAccessOutline = () => {
    return (
        <Collapse accordion style={{ width: "100%" }}>
            <div className="text-[14px] text-black/80 px-[12px] pt-[10px] font-Inter border-b-[1px]">
                <p className="font-semibold">14/14 modules seen · Progress 100%</p>
                <p>Watch all the videos To get certificate </p>
                <Progress percent={50} status="active" strokeColor={{ from: "#ff317b", to: "#5650ce" }} />
            </div>
            <Panel header="Module 0 - Course outline" key="1">
                <div>
                    <h4>fdsfhds</h4>
                </div>
            </Panel>
            <Panel header="Module 1 - Node JS Fundamentals" key="2">
                <div>
                    <h4>Module 0 - Course outline</h4>
                </div>
            </Panel>
            <Panel header="Module 1 - Node JS Basic Knowledge" key="3">
                <p>dsfjdjsfjdsf</p>
            </Panel>
        </Collapse>
    );
};
