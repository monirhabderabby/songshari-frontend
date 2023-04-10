/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useForm } from "react-hook-form";
import { DeactivateForm } from "./deactivateForm";
import  {useDeactivateAccountMutation}  from "./../../../../Redux/features/deactivateAccount/deactivateApi"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loadPhotos, loadUserData } from "../../../../Redux/features/userInfo/userInfo";
import removeCookie from "../../../../Helper/cookies/removeCookie";
import { clearShopSlice } from "../../../../Redux/features/Shop/shopSlice";
import { resetBillingSummaryState } from "../../../../Redux/features/checkout/billingSummarySlice";

const DeactivateAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit,reset } = useForm();
  const [deactivateAccount,{data:deactivateData, isLoading}] = useDeactivateAccountMutation();
  const  onSubmit = async (data) =>{
    const fields = Object.keys(data);
    fields.forEach(item=>{
      if(data[item]==="") delete data[item]
    })
    await deactivateAccount(data);
  }
useEffect(()=>{
  if(deactivateData){
    reset()
    dispatch(loadUserData(null));
    dispatch(loadPhotos([]));
    removeCookie("token");
    localStorage.removeItem("wishlist" && "cart");
    dispatch(clearShopSlice());
    dispatch(resetBillingSummaryState());
    navigate("/");
  }
},[deactivateData])


  return (
    <div className="">
      <h3 className="text-[20px] text-gray-600">Deactivate Account</h3>
      <DeactivateForm {...{register, onSubmit, handleSubmit,isLoading}}/>
    </div>
  );
};

export default DeactivateAccount;
