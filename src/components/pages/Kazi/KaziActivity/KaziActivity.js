// Configuration
import React, { useState } from "react";
import ActivityHeader from "../../../shared/Components/LawyerAgentKaziService/Activity/ActivityHeader";

// Components
import ActivityPendingOrder from "../../../shared/Components/LawyerAgentKaziService/Activity/ActivityPendingOrder";
import ActivityRunningOrder from "../../../shared/Components/LawyerAgentKaziService/Activity/ActivityRunningOrder";
import KaziActivityCompletedCase from "./completeCase/KaziActivityCompletedCase";

const KaziActivity = () => {
    const [runningOrder, setRunningOrder] = useState(true);
    const [pendingOrder, setPendingOrder] = useState(true);
    return (
        <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
            {/* Activity basic details */}
            <ActivityHeader />

            {/* Pending case */}
            {pendingOrder && <ActivityPendingOrder {...{ setPendingOrder }} />}

            {/* Running case */}
            {runningOrder && <ActivityRunningOrder {...{ setRunningOrder }} />}

            {/* Completed case */}
            <KaziActivityCompletedCase />
        </div>
    );
};

export default KaziActivity;
