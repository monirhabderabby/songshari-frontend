import { Switch } from "@mui/material";
import { pink } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";
import React from "react";

const PinkSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
        color: pink[600],
        "&:hover": {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
        },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: pink[600],
    },
}));

const label = { inputProps: { "aria-label": "Color switch demo" } };

export const PortionSwitch = ({ item }) => {
    return (
        <div className="flex items-center  ">
            <div className="w-[80px]">
                <p className="text-[16px] font-Inter font-normal tracking-wider">{item.portion}</p>
            </div>
            <PinkSwitch {...label} defaultChecked />
        </div>
    );
};
