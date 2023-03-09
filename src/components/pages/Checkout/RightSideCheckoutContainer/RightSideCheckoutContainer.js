import React from "react";

// Components
import BillingSummary from "./BillingSummary/BillingSummary";
import DiscountForm from "./DiscountForm/DiscountForm";
import OrderReview from "./OrderReview/OrderReview";

export const RightSideCheckoutContainer = () => {
    return (
        <div>
            {/* Order Review */}
            <OrderReview />

            {/* Discount form */}
            <DiscountForm />

            {/* Billing Summary */}
            <BillingSummary />
        </div>
    );
};
