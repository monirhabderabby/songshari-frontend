import React from "react";
import KaziActivityCompletedCase from "./completeCase/KaziActivityCompletedCase";
import KaziActivityBasicDetails from "./kaziActivityBasicDetailes/KaziActivityBasicDetailes";
import KaziActivityPendingCase from "./pendingCase/KaziActivityPendingCase";
import KaziActivityRunningCase from "./runningCase/KaziActivityRunningCase";

const KaziActivity = () => {
    return (
        <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
            {/* Activity basic details */}
            <KaziActivityBasicDetails />

            {/* Pending case */}
            <KaziActivityPendingCase />

            {/* Running case */}
            <KaziActivityRunningCase />

            {/* Completed case */}
            <KaziActivityCompletedCase />
        </div>
    );
};

export default KaziActivity;
