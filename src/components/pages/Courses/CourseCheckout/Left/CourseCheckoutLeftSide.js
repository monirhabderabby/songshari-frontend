import React from "react";
import { BillingInfoBoxForCourse } from "./BillingInfoBoxForCourse";
import { PaymentMethodForCourse } from "./PaymentMethodForCourse";

export const CourseCheckoutLeftSide = () => {
    return (
        <div>
            <BillingInfoBoxForCourse />
            <PaymentMethodForCourse />
        </div>
    );
};
