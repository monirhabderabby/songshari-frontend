import React, { useState } from "react";
import { CourseInfo } from "./CourseInfo/CourseInfo";
import { Faq } from "./faq/Faq";
import { InstructorInfo } from "./InstructorInfo/InstructorInfo";

export const CourseDetailesTab = () => {
    const [tab, setTab] = useState(1);
    return (
        <div className="w-full h-auto">
            <div className="mt-[73px] w-full bg-gray-200 h-[45px] flex overflow-hidden relative">
                <button
                    className={`flex-1 ${tab === 1 ? "bg-[#354895] text-white" : "bg-transparent text-black"} font-Nunito font-normal`}
                    style={{ transition: "background-color 0.5s ease" }}
                    onClick={() => setTab(1)}
                >
                    <span className="z-40">Course Info</span>
                </button>
                <button
                    className={`flex-1 ${tab === 2 ? "text-white font-bold bg-[#354895]" : "bg-transparent text-black"} font-Nunito font-normal`}
                    style={{ transition: "background-color 0.5s ease" }}
                    onClick={() => setTab(2)}
                >
                    Instructor
                </button>
            </div>
            {tab === 1 && <CourseInfo />}
            {tab === 2 && <InstructorInfo />}
            <Faq />
        </div>
    );
};
