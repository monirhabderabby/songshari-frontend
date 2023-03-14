// Configuration
import React, { useEffect } from "react";

// Third party package
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { calculatePercentage } from "../../../../../assets/utilities/CheckoutHelperCalculation/checkoutHelperCalculation";
import { setTax } from "../../../../../Redux/features/checkout/billingSummarySlice";

const BillingSummary = () => {
    const dispatch = useDispatch();
    const billingSummaryDetailes = useSelector(state => state.persistedReducer?.billingSummary?.billingSummary);

    const { discount, shipping, subTotal, tax } = billingSummaryDetailes || {};

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
                <div className="mb-5">
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Order Comment"
                        placeholder="Type here..."
                        multiline
                        rows={4}
                        className="w-full"
                    />
                </div>
                <FormControl>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked name="gilad" />}
                            label={
                                <p>
                                    I agree with the <span className="text-blue-500">Terms</span> and
                                    <span className="text-blue-500"> Condition</span>
                                </p>
                            }
                        />
                    </FormGroup>
                </FormControl>
                <button
                    className="w-full font-bold text-[#F6F6F6] py-[10px] rounded-md"
                    style={{
                        backgroundImage: "linear-gradient(137.27deg, #EE2FFF 19.41%, #CD1D5C 65.49%)",
                        boxShadow: "0px 4px 4px rgba(14, 53, 191, 0.25)",
                    }}
                >
                    Pay BDT 5400
                </button>
            </div>
        </div>
    );
};

export default BillingSummary;
