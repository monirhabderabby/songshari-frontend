import React, { useEffect, useState } from "react";

// Third party package
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { setDiscount, setSubtotal } from "../../../../../Redux/features/checkout/billingSummarySlice";
import { useApplyCouponMutation } from "../../../../../Redux/features/Shop/shopApi";
import { OvalLoader } from "../../../../shared/Cards/Loader/OvalLoader/OvalLoader";

const DiscountForm = () => {
    const [code, setCoupon] = useState("");
    const dispatch = useDispatch();

    // Redux ApI
    const [applyCoupon, { isLoading, data: response }] = useApplyCouponMutation();

    const { subTotal } = useSelector(state => state.persistedReducer?.billingSummary?.billingSummary) || {};

    const onSubmit = () => {
        const data = {
            subTotal,
        };
        applyCoupon({
            data,
            code,
        });

        setCoupon("");
    };

    useEffect(() => {
        const { subTotal: responseSubtotal } = response || {};
        if (response) {
            const disCountedPrice = Number(subTotal) - responseSubtotal;
            dispatch(setDiscount(disCountedPrice));
            dispatch(setSubtotal(responseSubtotal));
        }
    }, [response, dispatch]);

    return (
        <div className="mt-6 pb-6 flex items-center justify-between gap-x-[10px]">
            <TextField
                id="outlined-basic"
                label="Discount Code"
                variant="outlined"
                size="small"
                className="w-full lg:w-[241px]"
                value={code}
                onChange={e => setCoupon(e.target.value)}
            />
            <button
                className={`px-4 lg:px-8 rounded text-white text-[12px] lg:text-[16px] font-bold h-[40px] bg-[linear-gradient(90deg,_#E22987_0%,_#AB2BC5_100%)]`}
                onClick={onSubmit}
            >
                {isLoading ? <OvalLoader height={25} width={25} /> : "Apply"}
            </button>
        </div>
    );
};

export default DiscountForm;
