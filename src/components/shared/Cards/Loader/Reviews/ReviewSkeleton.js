import React from "react";

// Third party packages
import Skeleton from "@mui/material/Skeleton";

export const ReviewSkeleton = () => {
    return (
        <div className="flex justify-start items-start gap-6 pb-8 mb-7 border-b border-[#F4F4F5]">
            <div className="w-[73px] h-[43px]">
                <Skeleton variant="circular" width={60} height={60} />
            </div>
            <div>
                <div>
                    <Skeleton animation="wave" width={400} height={20} />
                    <Skeleton animation="wave" width={400} height={20} />
                    <div className="mt-[15px]">
                        <Skeleton animation="wave" width={100} />
                    </div>
                </div>
            </div>
        </div>
    );
};
