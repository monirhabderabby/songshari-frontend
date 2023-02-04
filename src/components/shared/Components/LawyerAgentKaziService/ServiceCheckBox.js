// Configuration
import React from "react";

// Third party packges
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";

export const ServiceCheckBox = ({ checked, setChecked, setCustomError }) => {
    const handleCheckBox = e => {
        setCustomError("");
        setChecked(e.target.checked);
    };
    return (
        <div className="flex items-start">
            <Checkbox
                checked={checked}
                sx={{
                    color: pink[800],
                    "&.Mui-checked": {
                        color: pink[600],
                    },
                }}
                onChange={handleCheckBox}
            />
            <p className="w-11/12 mx-2 text-[12px] font-normal font-sans leading-[17px] lowercase text-[#707276]">
                I confirm that I am able to deliver this service to Buyers within the delivery time specified. I will update or pause my Offer if I
                can no longer meet this delivery time. I understand that late delivery will adversely affect my rankings on PPH and will entitle the
                Buyer to a refund. See T&Cs.
            </p>
        </div>
    );
};
