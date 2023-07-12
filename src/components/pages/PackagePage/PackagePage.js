// Configuration
import React, { useEffect } from "react";

// components
import CustomHeader from "../../shared/CustomHeader/CustomHeader";

const PackagePage = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <CustomHeader title={"Packages"} />
      <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
        <h1>This is All Packages page</h1>
      </div>
    </div>
  );
};

export default PackagePage;
