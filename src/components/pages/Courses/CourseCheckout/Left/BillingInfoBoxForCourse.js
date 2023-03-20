import { TextField } from "@mui/material";
import React from "react";

export const BillingInfoBoxForCourse = () => {
    return (
        <div className="mt-[30px] w-full shadow-[0px_2px_6px_rgba(0,0,0,0.14)] p-[20px] rounded-[4px] bg-white">
            <h1 className="text-[24px] font-fira font-semibold text-[#354895]">Billing Info</h1>
            <div className="grid grid-cols-2 gap-[10px] mt-[15px]">
                <TextField id="outlined-basic" label="Full name" className="col-span-2" variant="outlined" />
                <TextField id="outlined-basic" label="Phone" variant="outlined" />
                <TextField id="outlined-basic" label="Email" variant="outlined" />
            </div>
        </div>
    );
};
