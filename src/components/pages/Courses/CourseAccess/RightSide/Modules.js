// Configuration
import React from "react";

// Third party packages
import { Collapse } from "antd";
import { Contents } from "./Contents";
const { Panel } = Collapse;

export const Modules = ({ modules }) => {
    return (
        <div>
            {modules?.map(module => {
                return (
                    <Collapse accordion style={{ width: "100%" }}>
                        <Panel header={module?.name}>
                            <div className="w-full flex flex-col">
                                <Contents contents={module?.contents} />
                            </div>
                        </Panel>
                    </Collapse>
                );
            })}
        </div>
    );
};
