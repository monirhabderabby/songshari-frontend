import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { resetBillingSummaryState } from "../../../../Redux/features/checkout/billingSummarySlice";
import { clearCartCount } from "../../../../Redux/features/Shop/shopSlice";
import { AllOrders } from "./AllOrders";
import { StatusSelector } from "./StatusSelector";

export const OrderStatus = () => {
    const [paramsObj] = useSearchParams();
    const [totalOrders, setTotalOrders] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    useEffect(() => {
        if (paramsObj.get("tranId")) {
        localStorage.removeItem("cart");
        dispatch(resetBillingSummaryState());
        dispatch(clearCartCount());
      }
    }, [dispatch, paramsObj]);

    return (
        <div className="flex flex-col gap-y-[20px] h-full w-full">
            {totalOrders > 0 && <StatusSelector totalOrders={totalOrders} />}
            <AllOrders setTotalOrders={setTotalOrders} />
        </div>
    );
};
