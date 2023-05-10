import React from "react";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import Footer from "../../shared/Footer/Footer";
import PackageContainer from "./PackageContainer";

const Packages = () => {
  return (
    <div>
      <CustomHeader title="Shop Packages" />
      <PackageContainer />
      <Footer />
    </div>
  );
};

export default Packages;
