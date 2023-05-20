import WarningIcon from "@mui/icons-material/Warning";
import { Pagination } from "@mui/material";
import React, { useState } from "react";
import { LineWaveLoader } from "../../../shared/Cards/Loader/lineWaveLoader/LineWaveLoader";
import MyIgnoredMembers from "../../../shared/SearchBars/MyIgnoredMembers";
import IgnoreCard from "./cards/IgnoreCard";

const Ignored = () => {
    const [userObj, setUser] = useState({});
    const [page, setPage] = useState(1);

    return (
        <div>
            <MyIgnoredMembers {...{ setUser, page, limit: 15 }} />
            {userObj?.data?.blockedUsers?.map(item => (
                <IgnoreCard {...{ item, useCase: "unignore" }} />
            ))}
            {userObj?.isLoading && (
                <div className="h-[350px] w-full flex justify-center items-center">
                    <LineWaveLoader />
                </div>
            )}
            {userObj?.data?.blockedUsers?.length === 0 && (
                <div className="flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <WarningIcon color="warning" />
                        <h1>No ignored user found</h1>
                    </div>
                </div>
            )}
            {userObj?.data && userObj?.data?.total > 15 && (
                <div className="my-[100px] w-full flex justify-center">
                    <Pagination
                        count={Math.ceil(userObj?.data?.total / 15) || 0}
                        variant="outlined"
                        color="secondary"
                        onChange={(event, value) => setPage(value)}
                    />
                </div>
            )}
        </div>
    );
};

export default Ignored;
