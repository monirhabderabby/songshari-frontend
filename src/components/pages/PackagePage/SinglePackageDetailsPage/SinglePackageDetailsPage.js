// Configuration
import React, { useEffect } from "react";

// Components
import CustomHeader from "../../../shared/CustomHeader/CustomHeader";
import SinglePackageLeft from "./SinglePackage/SinglePackageLeft/SinglePackageLeft";
import SinglePackageRight from "./SinglePackage/SinglePackageRight/SinglePackageRight";

const SinglePackageDetailsPage = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <CustomHeader title={"Package"} />
      <div className="w-full lg:w-[1200px]  2xl:w-[1400px] mx-auto h-auto flex lg:flex-row flex-col gap-y-[20px] pt-[44px] px-[26px] mb-12">
        <div className="w-full lg:max-w-[660px] 2xl:w-[850px] mx-auto">
          <SinglePackageLeft />
        </div>
        <div className="sticky top-[44px] flex-1 mx-auto max-w-[400px]">
          <SinglePackageRight />
        </div>
      </div>
    </div>
  );
};

export default SinglePackageDetailsPage;
