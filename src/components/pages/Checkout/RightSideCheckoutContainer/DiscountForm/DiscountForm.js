import React, { useEffect, useState } from "react";

// Third party package
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { setCouponApplied, setDiscount, setSubtotal } from "../../../../../Redux/features/checkout/billingSummarySlice";
import { useApplyCouponMutation } from "../../../../../Redux/features/Shop/shopApi";
import { OvalLoader } from "../../../../shared/Cards/Loader/OvalLoader/OvalLoader";
import Error from "../../../../ui/error/Error";

const DiscountForm = () => {
    const [error, setError] = useState(false);
    const [code, setCoupon] = useState("");
    const dispatch = useDispatch();

    // Redux ApI
    const [applyCoupon, { isLoading, data: response, error: responseError }] = useApplyCouponMutation();

    const { subTotal, isCouponApplied } = useSelector(state => state.persistedReducer?.billingSummary?.billingSummary) || {};

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (response) {
            const disCountedPrice = Number(subTotal) - response?.subTotal;
            dispatch(setDiscount(disCountedPrice));
            dispatch(setSubtotal(response?.subTotal));
            dispatch(setCouponApplied());
        }
    }, [response, dispatch]);

    useEffect(() => {
        const { data } = responseError || {};
        setError(data?.message);
    }, [responseError]);

    return (
        !isCouponApplied && (
            <>
                <div className="h-[80px] flex items-center justify-between gap-x-[10px]">
                    <TextField
                        id="outlined-basic"
                        label="Discount Code"
                        variant="outlined"
                        size="small"
                        className="w-full"
                        value={code}
                        onChange={e => {
                            setError("");
                            setCoupon(e.target.value);
                        }}
                        disabled={isCouponApplied}
                    />
                    <button
                        className={`px-4 lg:px-8 rounded text-white text-[12px] lg:text-[16px] font-bold h-[40px] bg-[linear-gradient(90deg,_#E22987_0%,_#AB2BC5_100%)] disabled:bg-slate-300`}
                        onClick={onSubmit}
                        disabled={isCouponApplied}
                    >
                        {isLoading ? <OvalLoader height={25} width={25} /> : "Apply"}
                    </button>
                </div>

                {error && <Error message={error} />}
            </>
        )
    );
};

export default DiscountForm;
