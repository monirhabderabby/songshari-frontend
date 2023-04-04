import React from "react";
import OtherDetailsCompareCard from "./OtherDetailsCompareCard/OtherDetailsCompareCard";

const OtherDetailsCompare = ({ data, similarProducts }) => {
  const { products } = similarProducts || {};

  let content;
  if (products?.length === 0) {
    content = (
      <div className="h-[100px] w-full flex justify-center items-center text-[18px] text-gray-400 font-outfit">
        No Similar product found!
      </div>
    );
  } else {
    content = (
      <div className="grid grid-cols-2 gap-9">
        {products?.map((product) => (
          <OtherDetailsCompareCard key={product._id} {...{ product }} />
        ))}
      </div>
    );
  }
  return (
    <div className="mt-12">
      <h1 className="text-[#272727] text-3xl leading-[34px] font-semibold mb-10">
        Similar Products
      </h1>
      {content}
    </div>
  );
};

export default OtherDetailsCompare;
