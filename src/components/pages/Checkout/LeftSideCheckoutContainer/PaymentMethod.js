import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React from "react";

export const PaymentMethod = () => {
    const amarPay = (
        <div className="w-full flex items-center">
            <img className="w-[147px]" src="https://www.aamarpay.com/images/logo/aamarpay_logo.png" alt="logo" />
        </div>
    );
    return (
        <div className="w-full h-auto shadow-[0px_2px_6px_rgba(0,0,0,0.14)] p-[20px] rounded-[4px] bg-white">
            <h3 className="text-[#000000] font-bold font-sans text-[16px] mb-[20px]">Payment Method</h3>
            <FormControl>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
                    <FormControlLabel checked control={<Radio />} label={amarPay} />
                </RadioGroup>
            </FormControl>
        </div>
    );
};
