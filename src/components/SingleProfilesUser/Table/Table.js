import React, { useState } from "react";
import "../../../App.css";
import "../../../assets/css/table.css";
import { Friends } from "../FriendsSection/Friends";
import { Profile } from "../profileSection/Profile";

const Table = () => {
    const [page, setPage] = useState(2);
    return (
        <div>
            <div className="pt-5">
                <div className="notification-bar">
                    <div class="flex justify-center items-center gap-4">
                        <button class="mt-4 font-medium leading-tight text-gray-800">Activity</button>
                        <button
                            class={`mt-4 font-medium leading-tight ${page === 2 ? "text-primary font-bold" : "text-gray-800"}`}
                            onClick={() => setPage(2)}
                        >
                            Profile
                        </button>
                        <button
                            class={`mt-4 font-medium leading-tight ${page === 3 ? "text-primary font-bold" : "text-gray-800"}`}
                            onClick={() => setPage(3)}
                        >
                            Friends <sup className="text-white bg_Color p-1 rounded-full text-[10px]">1</sup>
                        </button>
                        <button class="mt-4 font-medium leading-tight text-gray-800">
                            heading
                            <span class="inline-block px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-pink-600 text-white rounded">
                                1
                            </span>
                        </button>
                        <button class="mt-4 font-medium leading-tight text-gray-800">
                            Message
                            <span class="inline-block px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-pink-600 text-white rounded">
                                1
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            {/* table 1 */}
            {page === 2 && <Profile />}
            {page === 3 && <Friends />}
        </div>
    );
};

export default Table;
