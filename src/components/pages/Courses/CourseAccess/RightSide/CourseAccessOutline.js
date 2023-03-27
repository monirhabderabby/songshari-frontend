import { Collapse } from "antd";
import React from "react";
import { Modules } from "./Modules";

// Third party packages
const { Panel } = Collapse;

export const CourseAccessOutline = ({ sections }) => {
    return (
        <Collapse accordion style={{ width: "100%" }}>
            <div className="text-[14px] text-black/80 px-[12px] py-[10px] font-Inter border-b-[1px]">
                <p className="font-semibold">
                    {sections?.length}/{sections?.length} modules seen
                </p>
                <p>Watch all the videos To get certificate </p>
            </div>
            {sections?.map(milestone => {
                return (
                    <Panel header={milestone.name} key={milestone?._id}>
                        <div className="w-full flex flex-col">
                            <Modules modules={milestone?.modules} />
                        </div>
                    </Panel>
                );
            })}
        </Collapse>
    );
};
