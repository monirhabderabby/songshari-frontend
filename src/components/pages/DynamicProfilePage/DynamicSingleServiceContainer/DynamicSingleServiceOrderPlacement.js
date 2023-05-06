import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React, { useState } from "react";
import { Modal } from "../../../modals/Modal";

export const DynamicSingleServiceOrderPlacement = ({ modalControll }) => {
    const [paymentMethod, setPaymentMethod] = useState("amarPay");
    const amarPay = (
        <div className="w-full flex items-center">
            <img className="w-[147px]" src="https://www.aamarpay.com/images/logo/aamarpay_logo.png" alt="logo" loading="lazy" />
        </div>
    );

    const cash = (
        <div className="w-full flex items-center">
            <img
                className="w-[147px] h-[71px]"
                src="https://media.istockphoto.com/id/1055129084/vector/point-logo-design.jpg?s=2048x2048&w=is&k=20&c=BEeCmlzg24vuQNPtjyq40QylHjnlz5W14x9W8OtGq2M="
                alt="logo"
                loading="lazy"
            />
        </div>
    );
    return (
        <Modal modalControll={modalControll}>
            <div className="flex items-center">
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
                    onChange={() => setPaymentMethod("point")}
                >
                    <FormControlLabel checked={paymentMethod?.includes("point")} control={<Radio />} label={cash} />
                </RadioGroup>
            </div>
            <button className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] py-1 px-4 text-white rounded-[4px]">
                Pay Now
            </button>
        </Modal>
    );
};
