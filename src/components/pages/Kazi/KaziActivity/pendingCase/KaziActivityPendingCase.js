import React from "react";

// Third party package
import { Pagination } from "@mui/material";

// Components
import KaziActivityPendingCaseCard from "../../card/KaziActivityPendingCaseCard";

const KaziActivityPendingCase = () => {
    const pendingCasesInfo = [
        {
            id: 1,
            name: "Mr. Strange",
            serviceName: "A Example lawyer service for the married person",
            date: " Sep 8th, 2023",
        },
        {
            id: 2,
            name: "Mr. Strange",
            serviceName: "A Example lawyer service for the married person",
            date: " Sep 8th, 2023",
        },
        {
            id: 3,
            name: "Mr. Strange",
            serviceName: "A Example lawyer service for the married person",
            date: " Sep 8th, 2023",
        },
        {
            id: 4,
            name: "Mr. Strange",
            serviceName: "A Example lawyer service for the married person",
            date: " Sep 8th, 2023",
        },
        {
            id: 5,
            name: "Mr. Strange",
            serviceName: "A Example lawyer service for the married person",
            date: " Sep 8th, 2023",
        },
        {
            id: 6,
            name: "Mr. Strange",
            serviceName: "A Example lawyer service for the married person",
            date: " Sep 8th, 2023",
        },
    ];
    return (
        <div className="mb-24">
            <h1 className="text-[#333333] text-3xl leading-8 font-medium font-Inter mb-10">Pending Case</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-12 mb-16">
                {pendingCasesInfo.map(caseInfo => (
                    <KaziActivityPendingCaseCard key={caseInfo.id} {...{ caseInfo }} />
                ))}
            </div>
            <div className="flex justify-between items-center">
                <p className="text-[#3E4954] font-medium font-Poppins">Showing 6 from 160 data</p>
                <Pagination count={5} variant="outlined" shape="rounded" />
            </div>
        </div>
    );
};

export default KaziActivityPendingCase;
