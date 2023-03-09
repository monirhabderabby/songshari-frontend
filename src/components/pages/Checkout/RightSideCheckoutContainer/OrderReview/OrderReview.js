import React, { useEffect, useState } from "react";

// Third party packages
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";

// Components
import { useDispatch } from "react-redux";
import { sumPrices } from "../../../../../assets/utilities/CheckoutHelperCalculation/checkoutHelperCalculation";
import { initialSubTotal } from "../../../../../Redux/features/checkout/billingSummarySlice";
import OrderReviewCard from "../../../../shared/Cards/Shop/OrderReviewCard/OrderReviewCard";

const OrderReview = () => {
    const dispatch = useDispatch();
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    useEffect(() => {
        dispatch(initialSubTotal(sumPrices(cart)));
    }, [dispatch, cart]);

    const { Panel } = Collapse;
    const panelHeader = (
        <div>
            <h3 className="leading-5 font-bold mb-1">Order Review</h3>
            <p className="text-xs leading-5">{cart?.length} items in cart</p>
        </div>
    );

    let content;
    if (!cart || cart?.length <= 0) {
        content = <div className="font-Poppins text-gray-400">Your cart is currently empty.</div>;
    } else {
        content = (
            <div>
                {cart?.map(product => (
                    <OrderReviewCard key={product.id} {...{ product, cart, setCart }} />
                ))}
            </div>
        );
    }

    return (
        <div>
            <div>
                <Collapse
                    bordered={false}
                    defaultActiveKey={["1"]}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    expandIconPosition="end"
                >
                    <Panel header={panelHeader} key="1">
                        {content}
                    </Panel>
                </Collapse>
            </div>
        </div>
    );
};

export default OrderReview;
