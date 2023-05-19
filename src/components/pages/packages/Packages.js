import React from "react";
import { MobileBackButton } from "../../shared/Components/MobileBackButton";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import PackageContainer from "./PackageContainer";
import Footer from "../../shared/Footer/Footer";

const Packages = () => {
  return (
    <>
      <div className="lg:hidden">
        <MobileBackButton name="Packages" />
      </div>
      <div>
        <div className="hidden lg:block">
          <CustomHeader title="Packages" />
        </div>
        <PackageContainer />
        <div className="hidden lg:block">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Packages;
