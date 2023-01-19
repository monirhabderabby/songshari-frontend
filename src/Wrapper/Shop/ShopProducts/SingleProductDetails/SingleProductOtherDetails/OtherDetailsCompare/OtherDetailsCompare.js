import React from "react";
import OtherDetailsCompareCard from "./OtherDetailsCompareCard/OtherDetailsCompareCard";

const OtherDetailsCompare = ({ data }) => {
  return (
    <div className="mt-12">
      <h1 className="text-[#272727] text-3xl leading-[34px] font-semibold mb-10">
        Similar Products
      </h1>
      <div className="grid grid-cols-2 gap-9">
        {data.comparedProducts.map((product) => (
          <OtherDetailsCompareCard key={product.id} {...{ product }} />
        ))}
      </div>
    </div>
  );
};

export default OtherDetailsCompare;
