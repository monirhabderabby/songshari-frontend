import React from "react";

// Components
import KaziRunningCaseCard from "../../card/KaziRunningCaseCard";

const RunningCaseForKazi = () => {
    const runningCasesInfo = [
        {
            id: 1,
            category: "Married Life Case",
            caseDescription: "Idea of this case will be shared in this short description",
            progress: 70,
        },
        {
            id: 2,
            category: "Complex Case",
            caseDescription: "Idea of this case will be shared in this short description",
            progress: 80,
        },
        {
            id: 3,
            category: "Complex Case",
            caseDescription: "Idea of this case will be shared in this short description",
            progress: 50,
        },
    ];

    return (
        <div className="mb-12 md:mb-16 lg:mb-28">
            <h1 className="text-3xl font-medium leading-7 mb-10">Running Case</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12">
                {runningCasesInfo.map(singleCase => (
                    <KaziRunningCaseCard key={singleCase.id} {...{ singleCase }} />
                ))}
            </div>
        </div>
    );
};

export default RunningCaseForKazi;
