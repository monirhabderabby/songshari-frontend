import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";

export const PaymentMethodForCourse = () => {
    const [paymentMethod, setPaymentMethod] = useState("amarPay");

    const amarPay = (
        <div className="w-full flex items-center">
            <img className="w-[147px]" src="https://www.aamarpay.com/images/logo/aamarpay_logo.png" alt="logo" loading="lazy" />
        </div>
    );
    return (
        <div className="w-full h-auto shadow-[0px_2px_6px_rgba(0,0,0,0.14)] p-[20px] rounded-[4px] bg-white mt-[30px]">
            <h3 className="text-[20px] font-fira font-semibold text-black mb-[20px]">Payment Method</h3>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="amarPay"
                    name="radio-buttons-group"
                    onChange={() => setPaymentMethod("amarPay")}
                >
                    <FormControlLabel checked={paymentMethod?.includes("amarPay")} control={<Radio />} label={amarPay} />
                </RadioGroup>
            </FormControl>
        </div>
    );
};
