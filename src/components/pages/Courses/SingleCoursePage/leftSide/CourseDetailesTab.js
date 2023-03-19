import React, { useState } from "react";

export const CourseDetailesTab = () => {
    const [tab, setTab] = useState(1);
    return (
        <div className="mt-[73px] w-full bg-gray-200 h-[45px] flex overflow-hidden relative">
            <button
                className={`flex-1 ${
                    tab === 1 ? "bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white" : "bg-transparent text-black"
                } font-Nunito font-normal`}
                onClick={() => setTab(1)}
            >
                <span className="z-40">Course Info</span>
            </button>
            <button
                className={`flex-1 ${
                    tab === 2
                        ? "text-white font-bold bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]"
                        : "bg-transparent text-black"
                } font-Nunito font-normal`}
                onClick={() => setTab(2)}
            >
                Instructor
            </button>
        </div>
    );
};
