// configuration
import React, { useState } from "react";
import { useNavigate } from "react-router";

// components
import { Friends } from "../../../../SingleProfilesUser/FriendsSection/Friends";
import { Profile } from "../../../../SingleProfilesUser/profileSection/Profile";

// css files
import "../../../../../App.css";

const KaziTable = ({ data, isLoading }) => {
    const [page, setPage] = useState(2);
    //here navigate use for manage edit proofile information route
    const navigate = useNavigate();

    return (
        <div>
            <div className="mb-4 w-full">
                <div className="w-full h-[60px] lg:max-w-[512px] mx-auto bg-white mb-[20px] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] rounded-[4px]">
                    <div className="flex justify-center items-center h-full gap-4">
                        <button
                            className={`font-medium text-[15px] leading-tight ${page === 1 ? "text-primary font-bold" : "text-gray-800"}`}
                            onClick={() => setPage(1)}
                        >
                            Info
                        </button>
                        <button
                            className={`font-medium text-[15px] leading-tight ${page === 2 ? "text-primary font-bold" : "text-gray-800"}`}
                            onClick={() => {
                                navigate("/userprofile");
                                setPage(2);
                            }}
                        >
                            Connection
                        </button>
                    </div>
                </div>
            </div>

            {/* table 1 */}
            {page === 1 && <Profile {...{ data, isLoading }} />}
            {page === 2 && <Friends {...{ data, isLoading }} />}
        </div>
    );
};

export default KaziTable;
