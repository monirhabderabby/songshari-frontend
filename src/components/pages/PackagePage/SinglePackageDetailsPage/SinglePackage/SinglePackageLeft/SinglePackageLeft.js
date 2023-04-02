import React from "react";
import PackageItemsInfo from "./PackageItemsInfo/PackageItemsInfo";
import PackageReview from "./PackageReview/PackageReview";

const SinglePackageLeft = () => {
  const itemsArray = [1, 2, 3, 4];
  return (
    <div>
      {/* single package left side Header section */}
      <div>
        <h1 className="text-[#354895] text-[24px] lg:text-[34px] font-bold font-outfit">
          Package Name Here
        </h1>
        <p className="text-[20px] text-gray-500 font-syne mt-[14px]">
          Complete details of the full package Complete details of the full
          package Complete details of the full package
        </p>
        <img
          src="https://bohubrihi.com/wp-content/uploads/2022/11/Office-and-Google-Package-Bohubrihi-Online-Course.png"
          alt="CourseImage"
          className="mt-[18px] w-full rounded-[6px] lg:max-w-[666px] lg:max-h-[371px]"
          loading="lazy"
        />
      </div>

      {/* All items in this package */}
      <div className="mt-16">
        {itemsArray.map((item) => {
          return <PackageItemsInfo key={item} />;
        })}
      </div>

      {/* Review */}
      <PackageReview />
    </div>
  );
};

export default SinglePackageLeft;
