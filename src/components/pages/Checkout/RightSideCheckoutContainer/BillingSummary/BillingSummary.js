// Configuration
import React from "react";

// Third party package
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";

const BillingSummary = () => {
    const billingSummaryDetailes = useSelector(state => state.persistedReducer?.billingSummary?.billingSummary);
    const { discount, shipping, subTotal, tax } = billingSummaryDetailes || {};

    const checkLabel = (
        <p className="text-sm text-[#4F4F4F]">
            Please check to acknowledge <span className="text-[#1D68CD]">Our Privacy & Terms Policy</span>
        </p>
    );

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
                    <p>{shipping}</p>
                </div>
                <div className="flex justify-between items-center text-sm leading-5 text-[#4F4F4F] pr-5">
                    <p>Tax</p>
                    <p>{tax}</p>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center font-bold text-sm leading-5 my-5">
                    <p>Grand Total</p>
                    <p>BDT 7500</p>
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
                <div className="mb-4">
                    <FormControlLabel control={<Checkbox />} label={checkLabel} />
                </div>
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
