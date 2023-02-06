import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import React from "react";

export const PendingSkeleton = () => {
    return (
        <div
            className="px-6 lg:px-10 py-6 rounded-lg"
            style={{
                backgroundImage: "linear-gradient(180deg, #FFEAF3 0%, #EDF0FF 100%)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
        >
            <Stack spacing="12px">
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <div>
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                </div>
                <div className="flex justify-between items-center">
                    <Skeleton width="55px" height="55px" variant="circular" />
                    <Skeleton variant="text" width="104px" height="48px" />
                    <Skeleton variant="text" width="104px" height="48px" />
                </div>
            </Stack>
        </div>
    );
};
