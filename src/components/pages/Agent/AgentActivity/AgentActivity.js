import React, { useState } from "react";
import { ActivityPendingOrder } from "../../../shared/Components/LawyerAgentKaziService/Activity/ActivityPendingOrder";
import ActivityRunningOrder from "../../../shared/Components/LawyerAgentKaziService/Activity/ActivityRunningOrder";

// Components
import AgentActivityBasicDetails from "./AgentActivityBasicDetails/AgentActivityBasicDetails";
import AgentActivityCompletedCase from "./AgentActivityCompletedCase/AgentActivityCompletedCase";

const AgentActivity = () => {
    const [runningOrder, setRunningOrder] = useState(true);
    const [pendingOrder, setPendingOrder] = useState(true);
    return (
        <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
            {/* Activity basic details */}
            <AgentActivityBasicDetails />

            {/* Pending case */}
            {pendingOrder && <ActivityPendingOrder {...{ setPendingOrder }} />}

            {/* Running case */}
            {runningOrder && <ActivityRunningOrder {...{ setRunningOrder }} />}

            {/* Completed case */}
            <AgentActivityCompletedCase />
        </div>
    );
};

export default AgentActivity;
