import React from "react";

// Third party package
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const LawyerActivityRunningCaseCard = ({ singleCase }) => {
  return (
    <div className="text-white p-8 rounded-[20px] bg-[linear-gradient(180deg,#6A248A_0%,#503B9C_95.31%,#654CC7_100%)]">
      <button className="bg-[#E41272] rounded-xl px-4 py-3 text-white font-semibold leading-6 mb-3">
        {singleCase.category}
      </button>
      <p className="font-medium leading-6 mb-8">{singleCase.caseDescription}</p>
      <div className="flex items-center gap-20 mb-3">
        <p className="text-sm font-light leading-5">Progress</p>
        <p className="text-sm font-semibold leading-5">
          {singleCase.progress}%
        </p>
      </div>
      <div className="w-[100%] md:w-[50%]">
        <Box sx={{ width: "100%" }}>
          <LinearProgress variant="determinate" value={singleCase.progress} />
        </Box>
      </div>
    </div>
  );
};

export default LawyerActivityRunningCaseCard;
