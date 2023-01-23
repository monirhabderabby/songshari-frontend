import React, { useEffect } from "react";
import { decodeToken } from "react-jwt";
import { useDispatch, useSelector } from "react-redux";
import getCookie from "../../../Helper/cookies/getCookie";
import { setBillingDetailesInitialState } from "../../../Redux/features/checkout/checkoutDetailsSlice";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import { LeftSideCheckoutContainer } from "./LeftSideCheckoutContainer/LeftSideCheckoutContainer";
import { RightSideCheckoutContainer } from "./RightSideCheckoutContainer/RightSideCheckoutContainer";

export const CheckoutPage = () => {
  const dispatch = useDispatch();
  const authInfo = useSelector(
    (state) => state.persistedReducer?.userInfo?.userInfo?.user
  );
  const { firstName, lastName } = authInfo || {};
  const token = getCookie("token");
  const { email } = decodeToken(token) || {};

  useEffect(() => {
    dispatch(
      setBillingDetailesInitialState({
        firstName,
        lastName,
        email,
      })
    );
  }, [dispatch, firstName, lastName, email]);
  return (
    <div className="bg-[#FAFBFF] min-h-[2700px]">
      <CustomHeader title="Checkout" />
      <section className="max-w-[1200px] mx-auto px-[20px] mt-[81px]">
        <div className="w-full grid grid-cols-2 gap-x-[24px]">
          <div className="left_side w-[570px] h-[430px] mx-auto bg-[#FAFBFF]">
            <LeftSideCheckoutContainer />
          </div>
          <div className="right_Side w-[370px] h-[430px] mx-auto">
            <RightSideCheckoutContainer />
          </div>
        </div>
    );
};
