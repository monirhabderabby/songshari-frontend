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
import {
  checkError,
  checkObject,
  handleCustomMessage,
  orderItemsToString,
  removeDuplicates,
} from "../../../../../assets/utilities/orderPlacement/orderPlacement";

export const OrderPlacement = () => {
  const [displayErrors, setDisplayErrors] = useState(false);
  const [customErrorMessage, setCustomErrorMessage] = useState([]);
  const [successSnackBarOpen, setSuccessSnackBarOpen] = useState(false);
  const [privacyChecked, setPrivacyCheked] = useState(false);
  const [fieldError, setFieldError] = useState();
  const { checkoutDetailes, billingSummary } =
    useSelector((state) => state.persistedReducer) || {};
  const storedPaymentMethod =
    useSelector(
      (state) => state?.persistedReducer?.checkoutDetailes?.paymentMethod
    ) || {};
  
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

    // Error handle End
    if (customErrorMessage.length === 0) {
      placeOrder(data);
    } else {
      setDisplayErrors(true);
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
      }, 2000);
    }
  }, [isSuccess, navigate, dispatch]);

  useEffect(() => {
    setFieldError(
      checkError(privacyChecked, shippingDetailes, billingDetailes)
    );
  }, [privacyChecked, shippingDetailes, billingDetailes]);

  useEffect(() => {
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

    handleCustomMessage(updatedErrorsArray, setCustomErrorMessage);
  }, [billingDetailes, privacyChecked, shippingDetailes]);

  // checkbox handler
  const handleCheckBox = (e) => {
    setPrivacyCheked(e.target.checked);
    setCustomErrorMessage(
      customErrorMessage.filter(
        (item) => item !== "Please checked our terms and condition"
      )
    );
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
      {customErrorMessage?.length !== 0 && displayErrors && (
        <div className="w-full ">
          {customErrorMessage?.map((item, index) => {
            return <Error key={item} message={item} />;
          })}
        </div>
      )}
      {(fieldError || storedPaymentMethod === "cash") && (
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
      {!fieldError && storedPaymentMethod === "amarPay" && (
        <form
          action={`${apiBaseUrl}/payment/shop?amount=${
            subTotal + 100 + tax
          }&tax=${tax}&deliveryCharge=${5}&items=${orderItemsToString(orderItems)}&desc=Shop payment&_token=${getCookie(
            "token"
          )}&shipAddress1=${shippingDetailes?.address1}&shipAddress2=${
            shippingDetailes?.address2
          }&shipCity=${shippingDetailes?.city}&shipState=${
            shippingDetailes?.state
          }&shipZipCode=${shippingDetailes?.zipCode}&shipPhone=${
            shippingDetailes?.phone
          }&billAddress1=${billingDetailes?.address1}&billAddress2=${
            billingDetailes?.address2
          }&billCity=${billingDetailes?.city}&billState=${
            billingDetailes?.state
          }&shipZipCode=${billingDetailes?.zipCode}&billPhone=${
            billingDetailes?.phone
          }`}
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
