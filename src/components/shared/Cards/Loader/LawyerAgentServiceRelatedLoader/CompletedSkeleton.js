import Skeleton from "@mui/material/Skeleton";
import React from "react";

export const CompletedSkeleton = ({ activity }) => {
    return (
        <div
            className="rounded-xl p-6 w-[393px] h-[188px]"
            style={{
                backgroundImage: `${
                    activity ? "linear-gradient(180deg, #690E94 0%, #192C6F 100%)" : "linear-gradient(180deg, #F4FFF5 0%, #FFFBF1 100%)"
                }`,
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
        >
            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <Skeleton variant="text" width="100px" height="100px" />
                </div>
                <div className="col-span-2 ml-[25px] my-auto">
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                </div>
            </div>
        </div>
    );
};
