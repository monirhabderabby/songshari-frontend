// Configuration
import React from "react";

// Third party package
import { Pagination } from "@mui/material";

// Components
import completeIcon from "../../../../../assets/images/LawyerProfileImg/completedCaseLogo.png";
import AgentActivityCompletedCaseCard from "../../../../shared/Cards/Agent/AgentActivityCompletedCaseCard";

const AgentActivityCompletedCase = () => {
  const completedCasesInfo = [
    {
      id: 1,
      caseName: "Agent Case Name",
      price: 5000,
      time: "4h 30m",
      img: completeIcon,
    },
    {
      id: 2,
      caseName: "Agent Case Name",
      price: 2500,
      time: "4h 30m",
      img: completeIcon,
    },
    {
      id: 3,
      caseName: "Agent Case Name",
      price: 8000,
      time: "4h 30m",
      img: completeIcon,
    },
    {
      id: 4,
      caseName: "Agent Case Name",
      price: 8000,
      time: "4h 30m",
      img: completeIcon,
    },
    {
      id: 5,
      caseName: "Agent Case Name",
      price: 8000,
      time: "4h 30m",
      img: completeIcon,
    },
    {
      id: 6,
      caseName: "Agent Case Name",
      price: 8000,
      time: "4h 30m",
      img: completeIcon,
    },
  ];
  return (
    <div className="mb-24">
      <h1 className="text-[#333333] text-3xl leading-8 font-medium font-Inter mb-10">
        Completed Case
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-12 mb-16">
        {completedCasesInfo.map((singleCase) => (
          <AgentActivityCompletedCaseCard
            key={singleCase.id}
            {...{ singleCase }}
          />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[#3E4954] font-medium font-Poppins">
          Showing 6 from 160 data
        </p>
        <Pagination count={5} variant="outlined" shape="rounded" />
      </div>
    </div>
  );
};

export default AgentActivityCompletedCase;
