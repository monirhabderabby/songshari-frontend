import React from "react";
import { PromoBox } from "./PromoBox";
import { BillingInfoBoxForCourse } from "./BillingInfoBoxForCourse";

export const CourseCheckoutLeftSide = () => {
    return (
        <div>
            <PromoBox />
            <BillingInfoBoxForCourse />
        </div>
    );
};
