import { TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const BillingInfoBoxForCourse = () => {
    const personalInfo = useSelector(state => state.persistedReducer?.userInfo?.userInfo?.user);
    const { firstName, lastName, email } = personalInfo || {};
    let fullName;

    if (firstName && lastName) {
        fullName = `${firstName} ${lastName}`;
    }
    return (
        <div className="mt-[30px] w-full shadow-[0px_2px_6px_rgba(0,0,0,0.14)] p-[20px] rounded-[4px] bg-white">
            <h1 className="text-[20px] font-fira font-semibold text-black">Billing Info</h1>
            <div className="grid grid-cols-2 gap-[10px] mt-[15px]">
                <TextField id="outlined-basic" value={fullName} label="Full name" className="col-span-2" variant="outlined" />
                <TextField id="outlined-basic" label="Phone" variant="outlined" className="col-span-2 lg:col-span-1" />
                <TextField id="outlined-basic" label="Email" value={email} disabled variant="outlined" className="col-span-2 lg:col-span-1" />
            </div>
        </div>
    );
};
