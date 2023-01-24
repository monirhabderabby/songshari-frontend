import React from "react";
import LawyerActivityBasicDetails from "./LawyerActivityBasicDetails/LawyerActivityBasicDetails";
import LawyerActivityCompletedCase from "./LawyerActivityCompletedCase/LawyerActivityCompletedCase";
import LawyerActivityPendingCase from "./LawyerActivityPendingCase/LawyerActivityPendingCase";
import LawyerActivityRunningCase from "./LawyerActivityRunningCase/LawyerActivityRunningCase";

const LawyerActivity = () => {
  return (
    <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
      {/* Activity basic details */}
      <LawyerActivityBasicDetails />

      {/* Pending case */}
      <LawyerActivityPendingCase />

      {/* Running case */}
      <LawyerActivityRunningCase />

      {/* Completed case */}
      <LawyerActivityCompletedCase />
    </div>
  );
};

export default LawyerActivity;
