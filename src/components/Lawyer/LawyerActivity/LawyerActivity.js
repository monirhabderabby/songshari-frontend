import React, { useState } from "react";
import ActivityCompletedOrder from "../../shared/Components/LawyerAgentKaziService/Activity/ActivityCompletedOrder";
import ActivityHeader from "../../shared/Components/LawyerAgentKaziService/Activity/ActivityHeader";
import ActivityPendingOrder from "../../shared/Components/LawyerAgentKaziService/Activity/ActivityPendingOrder";
import ActivityRunningOrder from "../../shared/Components/LawyerAgentKaziService/Activity/ActivityRunningOrder";

const LawyerActivity = () => {
    // Hook variables
    const [runningOrder, setRunningOrder] = useState(true);
    const [pendingOrder, setPendingOrder] = useState(true);
    const [completedOrder, setCompletedOrder] = useState(true);

    return (
        <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
            {/* Activity basic details */}
            <ActivityHeader />

            {/* Pending case */}
            {pendingOrder && <ActivityPendingOrder {...{ setPendingOrder }} />}

            {/* Running case */}
            {runningOrder && <ActivityRunningOrder {...{ setRunningOrder }} />}

            {/* Completed case */}
            {completedOrder && <ActivityCompletedOrder {...{ setCompletedOrder }} />}
        </div>
    );
};

export default LawyerActivity;
