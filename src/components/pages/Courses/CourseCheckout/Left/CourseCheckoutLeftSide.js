import React from "react";
import { BillingInfoBoxForCourse } from "./BillingInfoBoxForCourse";
import { PaymentMethodForCourse } from "./PaymentMethodForCourse";
import { PromoBox } from "./PromoBox";

export const CourseCheckoutLeftSide = () => {
    return (
        <div>
            <PromoBox />
            <BillingInfoBoxForCourse />
            <PaymentMethodForCourse />
        </div>
    );
};
