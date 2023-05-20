/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import removeCookie from "../../../../Helper/cookies/removeCookie";
import { clearShopSlice } from "../../../../Redux/features/Shop/shopSlice";
import { resetBillingSummaryState } from "../../../../Redux/features/checkout/billingSummarySlice";
import { loadPhotos, loadUserData } from "../../../../Redux/features/userInfo/userInfo";
import { useDeactivateAccountMutation } from "./../../../../Redux/features/deactivateAccount/deactivateApi";
import { DeactivateForm } from "./deactivateForm";

const DeactivateAccount = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const [deactivateAccount, { data: deactivateData, isLoading, error }] = useDeactivateAccountMutation();
    const onSubmit = async data => {
        const fields = Object.keys(data);
        fields.forEach(item => {
            if (data[item] === "") delete data[item];
        });
        await deactivateAccount(data);
    };
    useEffect(() => {
        if (deactivateData) {
            reset();
            dispatch(loadUserData(null));
            dispatch(loadPhotos([]));
            removeCookie("token");
            localStorage.removeItem("wishlist" && "cart");
            dispatch(clearShopSlice());
            dispatch(resetBillingSummaryState());
            navigate("/");
        }
    }, [deactivateData]);

    return (
        <div className="">
            <h3 className="text-[20px] text-gray-600">Deactivate Account</h3>
            <DeactivateForm {...{ register, onSubmit, handleSubmit, isLoading, error }} />
        </div>
    );
};

export default DeactivateAccount;
