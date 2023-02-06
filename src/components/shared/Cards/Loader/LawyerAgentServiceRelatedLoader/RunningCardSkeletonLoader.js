import Skeleton from "@mui/material/Skeleton";
import React from "react";

export const RunningCardSkeletonLoader = () => {
    return (
        <div
            style={{
                backgroundImage: "linear-gradient(180deg, #F4EBFF 0%, #FFEAFD 100%)",
            }}
            className="w-[393px] h-[250px] rounded-[20px] p-8"
        >
            <Skeleton variant="text" width="166px" height="68px" />
            <div>
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
            </div>
        </div>
    );
};
