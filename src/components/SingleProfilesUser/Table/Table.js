import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../../../App.css";
import { Friends } from "../FriendsSection/Friends";
import { Matches } from "../profileSection/Matches";
import { Profile } from "../profileSection/Profile";
import ProfileServices from "../ServicesSection/ProfileServices";
import SingleUserActivity from "../SingleUserActivity/SingleUserActivity";

const Table = ({ data, isLoading }) => {
    const [page, setPage] = useState(2);
    //here navigate use for manage edit proofile information route
    const navigate = useNavigate();

    return (
        <div>
            <div className="mb-4 w-full">
                <div className="w-full h-[60px] lg:max-w-[512px] mx-auto bg-white mb-[20px] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] rounded-[4px]">
                    <div className="flex justify-center items-center h-full  gap-4">
                        <button
                            className={`font-medium text-[15px] leading-tight ${page === 1 ? "text-primary font-bold" : "text-gray-800"}`}
                            onClick={() => setPage(1)}
                        >
                            Activity
                        </button>
                        <button
                            className={`font-medium text-[15px] leading-tight ${page === 2 ? "text-primary font-bold" : "text-gray-800"}`}
                            onClick={() => {
                                navigate("/userprofile");
                                setPage(2);
                            }}
                        >
                            Profile
                        </button>
                        <button
                            className={`font-medium text-[15px] leading-tight ${page === 3 ? "text-primary font-bold" : "text-gray-800"}`}
                            onClick={() => setPage(3)}
                        >
                            Services <sup className="text-white bg_Color px-2 py-1 rounded-full text-[10px]">1</sup>
                        </button>
                        <button
                            className={`font-medium text-[15px] leading-tight ${page === 4 ? "text-primary font-bold" : "text-gray-800"}`}
                            onClick={() => setPage(4)}
                        >
                            Connections{" "}
                            <sup className="text-white bg_Color px-2 py-1 rounded-full text-[10px]">{data?.connectionRequests?.length}</sup>
                        </button>
                        <button
                            className={`font-medium text-[15px] leading-tight ${page === 5 ? "text-primary font-bold" : "text-gray-800"}`}
                            onClick={() => setPage(5)}
                        >
                            Matches <sup className="text-white bg_Color px-2 py-1 rounded-full text-[10px]">1</sup>
                        </button>
                    </div>
                </div>
            </div>

            {/* table 1 */}
            {page === 1 && <SingleUserActivity {...{ data, isLoading }} />}
            {page === 2 && <Profile {...{ data, isLoading }} />}
            {page === 3 && <ProfileServices />}
            {page === 4 && <Friends {...{ data, isLoading }} />}
            {page === 5 && <Matches />}
        </div>
    );
};

export default Table;
