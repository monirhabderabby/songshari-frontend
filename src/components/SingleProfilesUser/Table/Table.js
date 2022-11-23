import React, { useState } from "react";
import "../../../App.css";
import "../../../assets/css/table.css";
import { Friends } from "../FriendsSection/Friends";
import Accordian from "../profileSection/Accordion";
import { Matches } from "../profileSection/Matches";
import { Profile } from "../profileSection/Profile";

const Table = () => {
    const [page, setPage] = useState(2);
    return (
        <div className="">
            <div className="px-2 md:px-0 mx-4 mb-4">
                <div className="notification-bar">
                    <div className="flex justify-center items-center gap-4">
                        <button className="mt-4 font-medium leading-tight text-gray-800">Activity</button>
                        <button
                            className={`mt-4 font-medium leading-tight ${page === 2 ? "text-primary font-bold" : "text-gray-800"}`}
                            onClick={() => setPage(2)}
                        >
                            Profile
                        </button>
                        <button
                            className={`mt-4 font-medium leading-tight ${page === 3 ? "text-primary font-bold" : "text-gray-800"}`}
                            onClick={() => setPage(3)}
                        >
                            Friends <sup className="text-white bg_Color px-2 py-1 rounded-full text-[10px]">1</sup>
                        </button>
                        <button className="mt-4 font-medium leading-tight text-gray-800">
                            Heading <sup className="text-white bg_Color px-2 py-1 rounded-full text-[10px]">5</sup>
                        </button>
                        <button
                            className={`mt-4 font-medium leading-tight ${page === 4 ? "text-primary font-bold" : "text-gray-800"}`}
                            onClick={() => setPage(4)}
                        >
                            Matches <sup className="text-white bg_Color px-2 py-1 rounded-full text-[10px]">1</sup>
                        </button>
                    </div>
                </div>
            </div>
            {/* table 1 */}
            {page === 2 && <Profile />}
            {page === 3 && <Friends />}
            {page === 4 && <Matches />}
        </div>
    );
};

export default Table;
