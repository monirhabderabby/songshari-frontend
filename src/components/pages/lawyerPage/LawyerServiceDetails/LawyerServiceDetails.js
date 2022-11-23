import React from "react";
import CustomHeader from "../../../shared/CustomHeader/CustomHeader";
import Footer from "../../../shared/Footer/Footer";
import LawyerServiceDetailsBox from "./LawyerServiceDetailsBox";
import LawyerServiceDetailsContent from "./LawyerServiceDetailsContent";
import LawyerServiceDetailsHeader from "./LawyerServiceDetailsHeader";
import LawyerServiceDetailsReview from "./LawyerServiceDetailsReview";

const LawyerServiceDetails = () => {
  return (
    <section className=" bg-[#fafbff]">
      <CustomHeader title="Lawyer Service Details" />
      <div className="py-10 custom-container">
        <LawyerServiceDetailsHeader />
        {/* Lawyer Service Details */}
        <h1 className="text-center lg:text-left text-[42px] mt-[70px] font-bold text-[#32353B]">
          Lawyer Service name here
        </h1>
        <div className="grid lg:grid-cols-3 gap-10 pt-[20px] justify-center lg:justify-between">
          <div className="col-span-2">
            <LawyerServiceDetailsContent />

            <LawyerServiceDetailsReview />
          </div>
          <div>
            <LawyerServiceDetailsBox />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default LawyerServiceDetails;
