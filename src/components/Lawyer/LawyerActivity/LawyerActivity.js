import React, { useState } from "react";
import { ActivityPendingOrder } from "../../shared/Components/LawyerAgentKaziService/Activity/ActivityPendingOrder";
import ActivityRunningOrder from "../../shared/Components/LawyerAgentKaziService/Activity/ActivityRunningOrder";
import LawyerActivityBasicDetails from "./LawyerActivityBasicDetails/LawyerActivityBasicDetails";
import LawyerActivityCompletedCase from "./LawyerActivityCompletedCase/LawyerActivityCompletedCase";

const LawyerActivity = () => {
    const [runningOrder, setRunningOrder] = useState(true);
    const [pendingOrder, setPendingOrder] = useState(true);
    return (
        <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
            {/* Activity basic details */}
            <LawyerActivityBasicDetails />

            {/* Pending case */}
            {pendingOrder && <ActivityPendingOrder {...{ setRunningOrder }} />}

            {/* Running case */}
            {runningOrder && <ActivityRunningOrder {...{ setPendingOrder }} />}

            {/* Completed case */}
            <LawyerActivityCompletedCase />
        </div>
    );
};

export default LawyerActivity;
