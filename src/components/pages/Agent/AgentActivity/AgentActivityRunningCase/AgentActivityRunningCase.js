import React from "react";

// Third party package
import { Pagination } from "@mui/material";

// Components
import AgentActivityRunningCaseCard from "../../../../shared/Cards/Agent/AgentActivityRunningCaseCard";

const AgentActivityRunningCase = () => {
  const runningCasesInfo = [
    {
      id: 1,
      category: "Married Life Case",
      caseDescription:
        "Idea of this case will be shared in this short description",
      progress: 70,
    },
    {
      id: 2,
      category: "Complex Case",
      caseDescription:
        "Idea of this case will be shared in this short description",
      progress: 80,
    },
    {
      id: 3,
      category: "Complex Case",
      caseDescription:
        "Idea of this case will be shared in this short description",
      progress: 50,
    },
    {
      id: 4,
      category: "Complex Case",
      caseDescription:
        "Idea of this case will be shared in this short description",
      progress: 50,
    },
    {
      id: 5,
      category: "Complex Case",
      caseDescription:
        "Idea of this case will be shared in this short description",
      progress: 50,
    },
    {
      id: 6,
      category: "Complex Case",
      caseDescription:
        "Idea of this case will be shared in this short description",
      progress: 50,
    },
  ];
  return (
    <div className="mb-24">
      <h1 className="text-[#333333] text-3xl leading-8 font-medium font-Inter mb-10">
        Running Case
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-12 mb-16">
        {runningCasesInfo.map((singleCase) => (
          <AgentActivityRunningCaseCard
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

export default AgentActivityRunningCase;
