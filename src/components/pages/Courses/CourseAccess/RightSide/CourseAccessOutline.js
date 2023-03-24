import { Collapse, Progress } from "antd";
import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";

// Third party packages
const { Panel } = Collapse;

export const CourseAccessOutline = ({ setLink }) => {
    const outline = [
        {
            id: 1,
            panelHeader: "Module 0 - Course outline",
            Videos: [
                {
                    id: 1,
                    name: "Introduction of course",
                    link: "https://www.youtube.com/watch?v=zpdOGUIw9dA",
                    time: "00:33",
                },
                {
                    id: 2,
                    name: "How to submit assignment",
                    link: "https://www.youtube.com/watch?v=H_JbXoKYl1Q",
                    time: "00:33",
                },
            ],
        },
        {
            id: 2,
            panelHeader: "Module 1 - Node JS Fundamentals",
            Videos: [
                {
                    id: 1,
                    name: "Introduction of course",
                    link: "https://www.youtube.com/watch?v=zpdOGUIw9dA",
                    time: "00:33",
                },
                {
                    id: 2,
                    name: "How to submit assignment",
                    link: "https://www.youtube.com/watch?v=H_JbXoKYl1Q",
                    time: "00:33",
                },
            ],
        },
        {
            id: 3,
            panelHeader: "Module 2 - Node JS Basic Knowledge",
            Videos: [
                {
                    id: 1,
                    name: "Introduction of course",
                    link: "https://www.youtube.com/watch?v=zpdOGUIw9dA",
                    time: "00:33",
                },
                {
                    id: 2,
                    name: "How to submit assignment",
                    link: "https://www.youtube.com/watch?v=H_JbXoKYl1Q",
                    time: "00:33",
                },
            ],
        },
    ];
    return (
        <Collapse accordion style={{ width: "100%" }}>
            <div className="text-[14px] text-black/80 px-[12px] pt-[10px] font-Inter border-b-[1px]">
                <p className="font-semibold">14/14 modules seen · Progress 100%</p>
                <p>Watch all the videos To get certificate </p>
                <Progress percent={50} status="active" strokeColor={{ from: "#ff317b", to: "#5650ce" }} />
            </div>
            {outline?.map(item => {
                return (
                    <Panel header={item.panelHeader} key={item.id}>
                        <div className="w-full flex flex-col">
                            {item?.Videos?.map((video, index) => {
                                return (
                                    <div
                                        className={`flex items-center py-[8px] gap-x-[6px] hover:bg-gray-100 ${
                                            index === item.Videos.length - 1 ? "border-b-0" : "border-b-[1px]"
                                        } px-[4px] cursor-pointer`}
                                        key={video?.id}
                                        onClick={() => setLink(video?.link)}
                                    >
                                        <AiOutlinePlayCircle className="text-[20px]" />
                                        <div className="flex flex-col font-outfit">
                                            <h4 className="text-[14px]">{video?.name}</h4>
                                            <span className="text-[10px]">{video?.time} Minutes</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Panel>
                );
            })}
        </Collapse>
    );
};
