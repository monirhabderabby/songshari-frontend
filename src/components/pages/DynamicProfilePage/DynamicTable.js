// configuration
import React, { useState } from "react";

// Third party packages
import { DynamicActivityPage } from "./DynamicActivityPage";
import { DynamicMatches } from "./DynamicMaches";
import { DynamicProfileInfo } from "./DynamicProfileInfo";

//css files
import Badge from "@mui/material/Badge";
import { useEffect } from "react";
import "../../../App.css";
import { DynamicServicesContainer } from "./DynamicServicesContainer/DynamicServicesContainer";

const DynamicTable = ({ data, isLoading }) => {
    const [isMember, setIsMember] = useState(null);
    const [page, setPage] = useState(2);

    const { role } = data || {};

    useEffect(() => {
        if (role.includes("member")) {
            setIsMember(true);
        } else if (role.includes("lawyer") || role.includes("kazi") || role.includes("agent")) {
            setIsMember(false);
        }
    }, [role]);

    return (
        <div>
            <div className="px-2 md:px-0 mb-4">
                <div className="w-full h-[60px] bg-white mb-[20px] lg:w-[512px] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] rounded-[4px]">
                    <div className="flex justify-evenly items-center h-full gap-4">
                        {isMember && (
                            <button
                                className={`font-medium text-[15px] leading-tight ${page === 1 ? "text-primary font-bold" : "text-gray-800"}`}
                                onClick={() => setPage(1)}
                            >
                                Activity
                            </button>
                        )}
                        <button
                            className={`font-medium text-[15px] leading-tight ${page === 2 ? "text-primary font-bold" : "text-gray-800"}`}
                            onClick={() => {
                                setPage(2);
                            }}
                        >
                            Profile
                        </button>
                        {!isMember && (
                            <button
                                className={`font-medium text-[15px] leading-tight ${page === 3 ? "text-primary font-bold" : "text-gray-800"}`}
                                onClick={() => setPage(3)}
                            >
                                Services
                            </button>
                        )}
                        <Badge badgeContent={4} color="primary">
                            <button
                                className={`font-medium text-[15px] leading-tight ${page === 4 ? "text-primary font-bold" : "text-gray-800"}`}
                                onClick={() => setPage(4)}
                            >
                                Connections
                            </button>
                        </Badge>
                        {isMember && (
                            <button
                                className={`font-medium text-[15px] leading-tight ${page === 5 ? "text-primary font-bold" : "text-gray-800"}`}
                                onClick={() => setPage(5)}
                            >
                                Matches <sup className="text-white bg_Color px-2 py-1 rounded-full text-[10px]">1</sup>
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {page === 1 && <DynamicActivityPage />}
            {page === 3 && <DynamicServicesContainer />}
            {page === 2 && <DynamicProfileInfo {...{ data, isLoading }} />}
            {page === 5 && <DynamicMatches />}
        </div>
    );
};

export default DynamicTable;
