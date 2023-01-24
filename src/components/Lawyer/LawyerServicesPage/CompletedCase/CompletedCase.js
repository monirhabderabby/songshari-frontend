import React from "react";

// Components
import completeIcon from "../../../../assets/images/LawyerProfileImg/completedCaseLogo.png";
import LawyerServiceCompletedCaseCard from "../../../shared/Cards/Lawyer/LawyerServiceCompletedCaseCard";

const CompletedCase = () => {
  const completedCasesInfo = [
    {
      id: 1,
      caseName: "Lawyer Case Name",
      price: 5000,
      time: "4h 30m",
      img: completeIcon,
    },
    {
      id: 2,
      caseName: "Lawyer Case Name",
      price: 2500,
      time: "4h 30m",
      img: completeIcon,
    },
    {
      id: 3,
      caseName: "Lawyer Case Name",
      price: 8000,
      time: "4h 30m",
      img: completeIcon,
    },
  ];

  return (
    <div className="mb-12 md:mb-16 lg:mb-28">
      <h1 className="text-3xl font-medium leading-7 mb-10">Completed Case</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12">
        {completedCasesInfo.map((singleCase) => (
          <LawyerServiceCompletedCaseCard
            key={singleCase.id}
            {...{ singleCase }}
          />
        ))}
      </div>
    </div>
  );
};

export default CompletedCase;
