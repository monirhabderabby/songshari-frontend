// configuration
import React, { useState } from "react";
import { BillingDetailes } from "./BillingDetailes";
import { PaymentMethod } from "./PaymentMethod";
import { ShippingDetailes } from "./ShippingDetailes";

export const LeftSideCheckoutContainer = () => {
    const [checked, setChecked] = useState(false);
    return (
        <div className="w-full bg-[#FAFBFF] flex flex-col gap-y-[20px]">
            <BillingDetailes />
            <ShippingDetailes />
            <PaymentMethod />
        </div>
    );
};
