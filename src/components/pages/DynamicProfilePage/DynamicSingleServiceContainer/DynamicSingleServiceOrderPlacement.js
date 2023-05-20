import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useServiceOrderWithPointMutation } from "../../../../Redux/features/Service/OrderApi";
import { Modal } from "../../../modals/Modal";
import Error from "../../../ui/error/Error";

export const DynamicSingleServiceOrderPlacement = ({
    modalControll,
    priceInPoint,
    _id,
    userId,
    setSuccessSnackBarOpen,
    serviceOrder,
    isLoading,
    price,
}) => {
    const [paymentMethod, setPaymentMethod] = useState("amarPay");
    const [customError, setCustomError] = useState("");

    //js
    const navigate = useNavigate();

    // Redux API
    const [serviceOrderWithPoint, { isSuccess: pointSuccess, error: pointError, isLoading: pointLoading }] = useServiceOrderWithPointMutation();
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

    // order places
    const orderPlaceHandler = () => {
        let data;
        if (paymentMethod === "amarPay") {
            data = {
                service: _id,
                role: userId,
                price: price,
            };
            serviceOrder(data);
        } else if (paymentMethod === "point") {
            data = {
                service: _id,
                priceInPoint: priceInPoint,
            };

            serviceOrderWithPoint(data);
        }
    };

    useEffect(() => {
        if (pointError) {
            setCustomError("You don't have enough points");
        }
    }, [pointError]);

    useEffect(() => {
        if (pointSuccess) {
            navigate("/payment_Success");
        }
    }, [pointSuccess, setSuccessSnackBarOpen, navigate]);

    return (
        <Modal modalControll={modalControll}>
            <>
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
                <div>{customError && <Error message={customError} />}</div>
                <button
                    className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] py-1 px-4 text-white rounded-[4px]"
                    onClick={orderPlaceHandler}
                >
                    {pointLoading || isLoading ? "..." : "Pay Now"}
                </button>
            </>
        </Modal>
    );
};
