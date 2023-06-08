// Configuration
import React, { useEffect } from "react";

// Components
import CustomHeader from "../../../shared/CustomHeader/CustomHeader";
import SuccessStoryGlobalPage from "./SuccessStoryGlobalPage/SuccessStoryGlobalPage";
import { MobileBackButton } from "../../../shared/Components/MobileBackButton";
import Footer from "../../../shared/Footer/Footer";
import { BottomNav } from "../../../../Wrapper/Home/mobileversion/BottomNav";

const SuccessStoryGlobalContainer = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="hidden lg:block">
        <CustomHeader title={"Happy Stories"} />
      </div>
      <div className="lg:hidden">
        <MobileBackButton name={"Happy Stories"} />
      </div>

      <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto px-6 lg:px-0">
        <SuccessStoryGlobalPage />
      </div>

      <div className="hidden lg:block">
        <Footer />
      </div>
      <div className="lg:hidden">
        <div className="h-20"></div>
        <BottomNav />
      </div>
    </div>
  );
};

export default SuccessStoryGlobalContainer;
