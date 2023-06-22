import { Switch } from "@mui/material";
import { pink } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";
import React from "react";
import { useUpdatePortionAccessMutation } from "../../../../Redux/features/userInfo/userApi";

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

export const PortionSwitch = ({ portion, isAccess }) => {
    //Redux API
    const [updatePortionAccess] = useUpdatePortionAccessMutation();
    const handleSwitch = () => {
        let data;
        switch (portion) {
            case "Matrimony":
                // Matrimony access cannot be false
                return;
            case "Lawyer":
                data = {
                    lawyerAccess: !isAccess,
                };
                updatePortionAccess({ portion: portion, data: data });
                return;
            case "Agent":
                data = {
                    agentAccess: !isAccess,
                };
                updatePortionAccess({ portion: portion, data: data });
                return;
            case "Kazi":
                data = {
                    kaziAccess: !isAccess,
                };
                updatePortionAccess({ portion: portion, data: data });
                return;
            case "Course":
                data = {
                    courseAccess: !isAccess,
                };
                updatePortionAccess({ portion: portion, data: data });
                return;
            case "Shop":
                data = {
                    shopAccess: !isAccess,
                };
                updatePortionAccess({ portion: portion, data: data });
                return;

            default:
                return;
        }
    };
    return (
        <div className="flex items-center  ">
            <div className="w-[80px]">
                <p className="text-[14px] lg:text-[16px] font-Inter font-normal tracking-wider">{portion}</p>
            </div>
            <PinkSwitch {...label} checked={isAccess} onChange={handleSwitch} disabled={portion === "Matrimony"} />
        </div>
    );
};
