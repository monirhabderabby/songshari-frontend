import React from "react";

// Third party packages
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";

// Components
import OrderReviewCard from "../../../../shared/Cards/Shop/OrderReviewCard/OrderReviewCard";

const OrderReview = ({ products }) => {
  const { Panel } = Collapse;
  const panelHeader = (
    <div>
      <h3 className="leading-5 font-bold mb-1">Order Review</h3>
      <p className="text-xs leading-5">{products.length} items in cart</p>
    </div>
  );
  return (
    <div>
      <div>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          expandIconPosition="end"
        >
          <Panel header={panelHeader} key="1">
            {products.map((product) => (
              <OrderReviewCard key={product.id} {...{ product }} />
            ))}
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default OrderReview;
