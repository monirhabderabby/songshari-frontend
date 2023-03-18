import React, { useEffect, useState } from "react";

// Third party packages
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { resetBillingSummaryState } from "../../../../../Redux/features/checkout/billingSummarySlice";
import { usePlaceOrderMutation } from "../../../../../Redux/features/Shop/shopApi";
import { clearCartCount } from "../../../../../Redux/features/Shop/shopSlice";
import { OvalLoader } from "../../../../shared/Cards/Loader/OvalLoader/OvalLoader";
import Error from "../../../../ui/error/Error";
import { SuccessSnackBar } from "../../../../ui/error/snackBar/SuccessSnackBar";
import getCookie from "../../../../../Helper/cookies/getCookie";
import { apiBaseUrl } from "../../../../../config";

export const OrderPlacement = () => {
  const [customErrorMessage, setCustomErrorMessage] = useState([]);
  const [successSnackBarOpen, setSuccessSnackBarOpen] = useState(false);
  const [privacyChecked, setPrivacyCheked] = useState(false);
  const { checkoutDetailes, billingSummary } =
    useSelector((state) => state.persistedReducer) || {};
  const { subTotal, tax } = billingSummary?.billingSummary || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [placeOrder, { isLoading, isSuccess }] = usePlaceOrderMutation();

  const orderItems = billingSummary?.orderItems;

  const { shippingDetailes, billingDetailes } = checkoutDetailes || {};

  // function declaration
  // order handler
  const handleOrderPlace = () => {
    const data = {
      shippingInfo: shippingDetailes,
      billingInfo: billingDetailes,
      totalPrice: Number(subTotal + 100 + tax),
      orderItems: orderItems,
    };
    console.log("ORDER PLACEMENT DATA", data);

    // Error handle start

    if (!privacyChecked) {
      setCustomErrorMessage(["Please checked our terms and condition"]);
      return;
    }

    let shippingInfoProperties = checkObject(shippingDetailes);
    if (shippingInfoProperties.includes("address2")) {
      shippingInfoProperties = shippingInfoProperties.filter(
        (item) => item !== "address2"
      );
    }

    let billingInfoProperties = checkObject(billingDetailes);
    if (billingInfoProperties.includes("address2")) {
      billingInfoProperties = billingInfoProperties.filter(
        (item) => item !== "address2"
      );
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
      setSuccessSnackBarOpen(true);

      setTimeout(() => {
        localStorage.removeItem("cart");
        dispatch(resetBillingSummaryState());
        dispatch(clearCartCount());
        navigate("/my-orders/orderStatus");
      }, 3000);
    }
  }, [isSuccess, navigate, dispatch]);

  // checkbox handler
  const handleCheckBox = (e) => {
    setPrivacyCheked(e.target.checked);
    setCustomErrorMessage(
      customErrorMessage.filter(
        (item) => item !== "Please checked our terms and condition"
      )
    );
  };

  // remove duplicate from array
  function removeDuplicates(arr) {
    return arr.filter((item, index) => {
      return arr.indexOf(item) === index;
    });
  }

  // function and check object that if any properties are empty
  function checkObject(obj) {
    return Object.keys(obj).filter((key) => {
      const value = obj[key];
      return value === null || value === undefined || value === "";
    });
  }

  // error message handle and set it on state
  const handleCustomMessage = (arr) => {
    let message = [];
    arr.map((item) => {
      message.push(`${item} required in both the Shipping and Billing details`);
      return item;
    });
    setCustomErrorMessage(message);
  };

  return (
    <div>
      <div className="">
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
            control={
              <Checkbox
                checked={privacyChecked}
                name="gilad"
                onChange={handleCheckBox}
              />
            }
            label={
              <p>
                I agree with the <span className="text-blue-500">Terms</span>{" "}
                and
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
        <div className="w-full ">
          {customErrorMessage?.map((item, index) => {
            return <Error key={item} message={item} />;
          })}
        </div>
      )}
      {customErrorMessage.length !== 0 && (
        <button
          onClick={handleOrderPlace}
          className="w-full font-bold text-[#F6F6F6] py-[10px] rounded-md my-[10px]"
          style={{
            backgroundImage:
              "linear-gradient(137.27deg, #EE2FFF 19.41%, #CD1D5C 65.49%)",
            boxShadow: "0px 4px 4px rgba(14, 53, 191, 0.25)",
          }}
        >
          {isLoading ? (
            <OvalLoader color="#FFFFFF" height={25} />
          ) : (
            <p>Pay BDT {Number(subTotal + 100 + tax)}</p>
          )}
        </button>
      )}
      {customErrorMessage.length === 0 && (
        <form
          action={`${apiBaseUrl}/payment/shop?amount=${
            subTotal + 100 + tax
          }&tax=${tax}&deliveryCharge=${5}&items=63cf9098a1175b13535363f2-2 63cf9098a1175b13535363f2-3&desc=Shop payment&_token=${getCookie(
            "token"
          )}&shipAddress1=dhaka&shipAddress2=dhaka&shipCity=dhaka&shipState=bangladesh&shipZipCode:1200&shipPhone=0134232323&billAddress1=dhaka&billAddress2=dhaka&billCity=dhaka&billState=bangladesh&shipZipCode=1200&billPhone=1273344456`}
          method="post"
        >
          <button
            className="w-full font-bold text-[#F6F6F6] py-[10px] rounded-md my-[10px]"
            style={{
              backgroundImage:
                "linear-gradient(137.27deg, #EE2FFF 19.41%, #CD1D5C 65.49%)",
              boxShadow: "0px 4px 4px rgba(14, 53, 191, 0.25)",
            }}
          >
            {isLoading ? (
              <OvalLoader color="#FFFFFF" height={25} />
            ) : (
              <p>Pay BDT {Number(subTotal + 100 + tax)}</p>
            )}
          </button>
        </form>
      )}

      {/* snackbar */}
      {successSnackBarOpen && (
        <div>
          <SuccessSnackBar
            successSnackBarOpen={successSnackBarOpen}
            setSuccessSnackBarOpen={setSuccessSnackBarOpen}
            message="Order Placed"
          />
        </div>
      )}
    </div>
  );
};
