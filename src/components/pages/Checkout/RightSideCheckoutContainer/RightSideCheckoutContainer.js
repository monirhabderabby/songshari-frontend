import React from "react";

// Components
import OrderReview from "./OrderReview/OrderReview";
import productImg from "../../../../assets/images/shop/01.jpg";
import DiscountForm from "./DiscountForm/DiscountForm";
import BillingSummary from "./BillingSummary/BillingSummary";

export const RightSideCheckoutContainer = () => {
  // const products = useSelector(state => state.persistedReducer?.checkout);
  const products = [
    {
      id: 1,
      name: "Apple",
      description: "dfdsf",
      quantity: 2,
      price: 20,
      prevPrice: 25,
      totalPrice: 40,
      img: productImg,
    },
    {
      id: 2,
      name: "Amet nunc, tincidunt interdum rhoncus massa",
      description: "dfdsf",
      quantity: 1,
      price: 200,
      prevPrice: 210,
      totalPrice: 200,
      img: productImg,
    },
    {
      id: 3,
      name: "Amet nunc, tincidunt interdum rhoncus massa",
      description: "dfdsf",
      quantity: 5,
      price: 120,
      prevPrice: 150,
      totalPrice: 600,
      img: productImg,
    },
  ];
  return (
    <div>
      {/* Order Review */}
      <OrderReview {...{ products }} />

      {/* Discount form */}
      <DiscountForm />

      {/* Billing Summary */}
      <BillingSummary />
    </div>
  );
};
