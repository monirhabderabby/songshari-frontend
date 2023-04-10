import React, { useState } from "react";
import WarningIcon from "@mui/icons-material/Warning";
import IgnoreCard from "./cards/IgnoreCard";
import RecentUsersByAuth from "../../../shared/SearchBars/RecentUsersByAuth";
import { LineWaveLoader } from "../../../shared/Cards/Loader/lineWaveLoader/LineWaveLoader";
import { Pagination } from "@mui/material";

const Active = () => {
  const [userObj, setUser] = useState({});
  const [page, setPage] = useState(1);

  return (
    <div>
      <RecentUsersByAuth {...{ page, limit: "15", setUser }} />
      {userObj?.data?.members?.map((item) => (
        <IgnoreCard {...{ item, useCase: "ignore" }} />
      ))}
      {userObj?.data?.members?.length === 0 && (
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <WarningIcon color="warning" />
            <h1>No active user found</h1>
          </div>
        </div>
      )}
      {userObj?.isLoading && (
        <div className="h-[350px] w-full flex justify-center items-center">
          <LineWaveLoader />
        </div>
      )}
      {userObj?.data && userObj?.data?.total > 15 && <div className="my-[100px] w-full flex justify-center">
        <Pagination
          count={Math.ceil(userObj?.data?.total / 15) || 0}
          variant="outlined"
          color="secondary"
          onChange={(event, value) => setPage(value)}
        />
      </div>}
    </div>
  );
};

export default Active;
