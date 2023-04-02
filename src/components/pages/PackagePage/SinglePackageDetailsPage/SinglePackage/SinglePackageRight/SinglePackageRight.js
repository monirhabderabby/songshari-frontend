import React from "react";

// Third party package
import { Divider } from "antd";

const SinglePackageRight = () => {
  return (
    <div className="sticky top-16">
      <div className="w-full lg:max-w-[400px] mx-auto ring-1 ring-inset ring-[#d0deef] rounded-[4px] p-[16px] sticky top-[44px]">
        <h3 className="text-[32px] font-Nunito font-bold">Package Prize</h3>
        <div className="h-[100px] bg-gray-100 w-full rounded-[4px] flex justify-around items-center">
          <span className="text-[16px] font-semibold font-SourceCodePro">
            Total Price
          </span>
          <Divider type="vertical" style={{ height: "70px" }} />
          <div className="flex flex-col gap-y-[6px] text-[18px] font-SourceCodePro">
            <del>5000</del>
            <span>3500</span>
          </div>
        </div>
        <button
          className={`w-full mt-[20px] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(255,0,128)_0%,rgb(148,45,255)_100%)] py-2 rounded-[4px] text-white font-Nunito`}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default SinglePackageRight;
