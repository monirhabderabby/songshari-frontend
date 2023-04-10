import React from "react";

// Components
import CustomHeader from "../../../shared/CustomHeader/CustomHeader";
import SuccessStoryGlobalPage from "./SuccessStoryGlobalPage/SuccessStoryGlobalPage";

const SuccessStoryGlobalContainer = () => {
  return (
    <div>
      <CustomHeader title={"Happy Stories"} />
      <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
        <SuccessStoryGlobalPage />
      </div>
    </div>
  );
};

export default SuccessStoryGlobalContainer;
