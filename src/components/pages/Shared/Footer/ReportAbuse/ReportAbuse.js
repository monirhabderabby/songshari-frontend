// Configuration
import React, { useEffect } from "react";

// Components
import CustomHeader from "../../../../shared/CustomHeader/CustomHeader";
import { MobileBackButton } from "../../../../shared/Components/MobileBackButton";
import Footer from "../../../../shared/Footer/Footer";
import { BottomNav } from "../../../../../Wrapper/Home/mobileversion/BottomNav";
import ReportForm from "./ReportForm/ReportForm";

const ReportAbuse = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="hidden lg:block">
        <CustomHeader title={"Report Abuse"} />
      </div>
      <div className="lg:hidden">
        <MobileBackButton name={"Report Abuse"} />
      </div>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0">
        <h2 className="text-4xl font-Inter mt-5 font-medium">
          Facing any issue with anything on our website.
        </h2>
        <h3 className="text-xl font-Inter mt-1 font-light">
          Just let us know in details And we will handle the rest.
        </h3>

        <div className="max-w-lg mx-auto p-5 my-8 shadow-md rounded">
          <ReportForm />
        </div>
      </div>

      <div className="hidden lg:block">
        <Footer />
      </div>
      <div className="lg:hidden">
        <div className="h-16"></div>
        <BottomNav />
      </div>
    </div>
  );
};

export default ReportAbuse;
