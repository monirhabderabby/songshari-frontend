import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStorePaymentMethod } from "../../../../Redux/features/checkout/checkoutDetailsSlice";

export const PaymentMethod = () => {
    const storedPaymentMethod = useSelector(state => state?.persistedReducer?.checkoutDetailes?.paymentMethod) || {};
    const [paymentMethod, setPaymentMethod] = useState(storedPaymentMethod);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setStorePaymentMethod(paymentMethod));
    }, [paymentMethod, dispatch]);
    const amarPay = (
        <div className="w-full flex items-center">
            <img className="w-[147px]" src="https://www.aamarpay.com/images/logo/aamarpay_logo.png" alt="logo" loading="lazy" />
        </div>
    );

    const cash = (
        <div className="w-full flex items-center">
            <img
                className="w-[147px] h-[71px]"
                src="https://i.postimg.cc/W3cLgW99/Pngtree-cash-payments-on-delivery-6357122.png"
                alt="logo"
                loading="lazy"
            />
        </div>
    );
    return (
        <div className="w-full h-auto shadow-[0px_2px_6px_rgba(0,0,0,0.14)] p-[20px] rounded-[4px] bg-white">
            <h3 className="text-[#000000] font-bold font-sans text-[16px] mb-[20px]">Payment Method</h3>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="amarPay"
                    name="radio-buttons-group"
                    onChange={() => setPaymentMethod("amarPay")}
                >
                    <FormControlLabel checked={paymentMethod?.includes("amarPay")} control={<Radio />} label={amarPay} />
                </RadioGroup>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="cash"
                    name="radio-buttons-group"
                    onChange={() => setPaymentMethod("cash")}
                >
                    <FormControlLabel checked={paymentMethod?.includes("cash")} control={<Radio />} label={cash} />
                </RadioGroup>
            </FormControl>
        </div>
    );
};
