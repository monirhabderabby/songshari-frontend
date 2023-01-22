// configuration
import React from "react";

// Third party packages
import { TextField } from "@material-ui/core";

export const ShippingDetailes = () => {
    // hook variables
    return (
        <div className="w-full h-auto shadow-[0px_2px_6px_rgba(0,0,0,0.14)] p-[20px] rounded-[4px] bg-white">
            <h3 className="text-[#000000] font-bold font-sans text-[16px]">Shipping Address</h3>
            <div className="w-full grid grid-cols-2 gap-x-[18px] gap-y-[16px] mt-[20px]">
                <TextField label="First Name" name="firstName" variant="outlined" size="small" />
                <TextField label="Last Name" name="lastName" variant="outlined" size="small" />
                <TextField label="Email" name="email" variant="outlined" size="small" className="col-span-2" />
                <TextField label="Street Address" name="streetAddress" variant="outlined" size="small" className="col-span-2" />
                <TextField name="streetAddress" variant="outlined" size="small" className="col-span-2" />
                <TextField label="State/Province" name="state" variant="outlined" size="small" />
                <TextField label="City" name="city" variant="outlined" size="small" />
                <TextField label="Zip/Postal Code" name="postCode" variant="outlined" size="small" />
                <TextField label="Phone" name="phone" variant="outlined" size="small" />
            </div>
        </div>
    );
};
