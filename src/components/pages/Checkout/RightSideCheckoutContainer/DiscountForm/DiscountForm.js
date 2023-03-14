import React, { useState } from "react";

// Third party package
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";

const DiscountForm = () => {
    const [coupon, setCoupon] = useState("");
    const { subTotal } = useSelector(state => state.persistedReducer?.billingSummary?.billingSummary) || {};

    const onSubmit = () => {
        const data = {
            coupon,
            subTotal,
        };

        console.log(data);
    };

    return (
        <div className="mt-6 pb-6 flex items-center justify-between gap-x-[10px]">
            <TextField
                id="outlined-basic"
                label="Discount Code"
                variant="outlined"
                size="small"
                className="w-full lg:w-[241px]"
                onChange={e => setCoupon(e.target.value)}
            />
            <button
                className={`px-4 lg:px-8 rounded text-white text-[12px] lg:text-[16px] font-bold h-[40px] bg-[linear-gradient(90deg,_#E22987_0%,_#AB2BC5_100%)]`}
                onClick={onSubmit}
            >
                Apply
            </button>
        </div>
    );
};

export default DiscountForm;
