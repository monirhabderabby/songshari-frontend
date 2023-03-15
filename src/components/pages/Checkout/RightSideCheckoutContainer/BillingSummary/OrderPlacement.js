import React, { useEffect, useState } from "react";

// Third party packages
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { BiErrorCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { resetBillingSummaryState } from "../../../../../Redux/features/checkout/billingSummarySlice";
import { usePlaceOrderMutation } from "../../../../../Redux/features/Shop/shopApi";
import { clearCartCount } from "../../../../../Redux/features/Shop/shopSlice";
import { OvalLoader } from "../../../../shared/Cards/Loader/OvalLoader/OvalLoader";

export const OrderPlacement = () => {
    const [customErrorMessage, setCustomErrorMessage] = useState([]);
    const [privacyChecked, setPrivacyCheked] = useState(false);
    const { checkoutDetailes, billingSummary } = useSelector(state => state.persistedReducer) || {};
    const { subTotal, tax } = billingSummary?.billingSummary || {};
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [placeOrder, { isLoading, isSuccess }] = usePlaceOrderMutation();

    const orderItems = billingSummary?.orderItems;

    const { shippingDetailes, billingDetailes } = checkoutDetailes || {};
    console.log(checkoutDetailes);

    // function declaration
    const handleOrderPlace = () => {
        const data = {
            shippingInfo: shippingDetailes,
            billingInfo: billingDetailes,
            totalPrice: Number(subTotal + 100 + tax),
            orderItems: orderItems,
        };

        // Error handle start

        if (!privacyChecked) {
            setCustomErrorMessage(["Please checked our terms and condition"]);
            return;
        }

        let shippingInfoProperties = checkObject(shippingDetailes);
        if (shippingInfoProperties.includes("address2")) {
            shippingInfoProperties = shippingInfoProperties.filter(item => item !== "address2");
        }

        let billingInfoProperties = checkObject(billingDetailes);
        if (billingInfoProperties.includes("address2")) {
            billingInfoProperties = billingInfoProperties.filter(item => item !== "address2");
        }

        const errorsArray = [...shippingInfoProperties, ...billingInfoProperties];
        const updatedErrorsArray = removeDuplicates(errorsArray);

        handleCustomMessage(updatedErrorsArray);

        // Error handle End

        if (customErrorMessage.length === 0) {
            placeOrder(data);
        }
    };

    useEffect(() => {
        if (isSuccess) {
            localStorage.removeItem("cart");
            dispatch(resetBillingSummaryState());
            dispatch(clearCartCount());
            navigate("/my-orders/orderStatus");
        }
    }, [isSuccess, navigate, dispatch]);

    const handleCheckBox = e => {
        setPrivacyCheked(e.target.checked);
        setCustomErrorMessage(customErrorMessage.filter(item => item !== "Please checked our terms and condition"));
    };

    function removeDuplicates(arr) {
        return arr.filter((item, index) => {
            return arr.indexOf(item) === index;
        });
    }

    function checkObject(obj) {
        return Object.keys(obj).filter(key => {
            const value = obj[key];
            return value === null || value === undefined || value === "";
        });
    }

    const handleCustomMessage = arr => {
        let message = [];
        arr.map(item => {
            message.push(`${item} required in both the Shipping and Billing details`);
            return item;
        });
        setCustomErrorMessage(message);
    };

    return (
        <div>
            <div className="">
                <TextField id="outlined-multiline-flexible" label="Order Comment" placeholder="Type here..." multiline rows={4} className="w-full" />
            </div>
            <FormControl>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={privacyChecked} name="gilad" onChange={handleCheckBox} />}
                        label={
                            <p>
                                I agree with the <span className="text-blue-500">Terms</span> and
                                <span className="text-blue-500"> Condition</span>
                            </p>
                        }
                        sx={{
                            paddingY: "5px",
                            paddingLeft: "10px",
                        }}
                    />
                </FormGroup>
            </FormControl>
            {customErrorMessage?.length !== 0 && (
                <div className="w-full mb-[10px] bg-red-100 py-[10px] px-[4px]">
                    {customErrorMessage?.map((item, index) => {
                        return (
                            <div key={index} className="text-[12px] text-red-400 font-outfit flex mb-[8px] gap-x-[4px] items-center">
                                <BiErrorCircle />
                                <span>{item}</span>
                            </div>
                        );
                    })}
                </div>
            )}
            <button
                className="w-full font-bold text-[#F6F6F6] py-[10px] rounded-md"
                style={{
                    backgroundImage: "linear-gradient(137.27deg, #EE2FFF 19.41%, #CD1D5C 65.49%)",
                    boxShadow: "0px 4px 4px rgba(14, 53, 191, 0.25)",
                }}
                onClick={handleOrderPlace}
            >
                {isLoading ? <OvalLoader title="Loading..." /> : <p>Pay BDT {Number(subTotal + 100 + tax)}</p>}
            </button>
        </div>
    );
};
