// Configuration
import React, { useEffect } from "react";

// Third party package
import { useDispatch, useSelector } from "react-redux";
import { calculatePercentage } from "../../../../../assets/utilities/CheckoutHelperCalculation/checkoutHelperCalculation";
import { setTax } from "../../../../../Redux/features/checkout/billingSummarySlice";
import { OrderPlacement } from "./OrderPlacement";

const BillingSummary = () => {
    const dispatch = useDispatch();
    const billingSummaryDetailes = useSelector(state => state.persistedReducer?.billingSummary?.billingSummary);

    const { discount, subTotal, tax } = billingSummaryDetailes || {};

    useEffect(() => {
        dispatch(setTax(calculatePercentage(subTotal, 15)));
    }, [subTotal, dispatch]);

    return (
        <div className="p-5 bg-gray-50">
            <h3 className="font-bold mb-8">Billing Summary</h3>
            <div className="pb-7 border-b border-[#E0E0E0]">
                <div className="flex justify-between items-center text-sm leading-5 text-[#4F4F4F] pr-5 mb-3">
                    <p>Subtotal</p>
                    <p>{subTotal}</p>
                </div>
                <div className="flex justify-between items-center text-sm leading-5 text-[#4F4F4F] pr-5 mb-3">
                    <p>Discount</p>
                    <p>{discount}</p>
                </div>
                <div className="flex justify-between items-center text-sm leading-5 text-[#4F4F4F] pr-5 mb-3">
                    <p>Shipping</p>
                    <p>{100}</p>
                </div>
                <div className="flex justify-between items-center text-sm leading-5 text-[#4F4F4F] pr-5">
                    <p>Tax</p>
                    <p>{tax}</p>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center font-bold text-sm leading-5 my-5">
                    <p>Grand Total</p>
                    <p>BDT {Number(subTotal + 100 + tax)}</p>
                </div>
                <OrderPlacement />
            </div>
        </div>
    );
};

export default BillingSummary;
