import React from "react";

// Third party package
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const RunningOrderCard = ({ order, index }) => {
    const { service, user } = order || {};
    const { firstName } = user || {};
    const { title } = service || {};
    return (
        <div
            className="p-8 rounded-[20px]"
            style={{
                backgroundImage: "linear-gradient(180deg, #F4EBFF 0%, #FFEAFD 100%)",
            }}
        >
            <button className="bg-[#E41272] rounded-xl px-4 py-3 text-white font-semibold leading-6 mb-3">{firstName}</button>
            <p className="font-medium leading-6 ">{title}</p>
            <p className="mb-6 text-gray-400 text-[14px]">
                Customer: <span className="text-gray-600">{firstName}</span>
            </p>

            <div className="flex items-center gap-20 mb-3">
                <p className="text-sm font-light leading-5">Progress</p>
                <p className="text-sm font-semibold leading-5">20%</p>
            </div>
            <div className="w-[100%] md:w-[50%]">
                <Box sx={{ width: "100%" }}>
                    <LinearProgress variant="determinate" value={20} />
                </Box>
            </div>
        </div>
    );
};

export default RunningOrderCard;
