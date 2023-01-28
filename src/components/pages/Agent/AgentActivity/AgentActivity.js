import React from "react";

// Components
import AgentActivityBasicDetails from "./AgentActivityBasicDetails/AgentActivityBasicDetails";
import AgentActivityCompletedCase from "./AgentActivityCompletedCase/AgentActivityCompletedCase";
import AgentActivityPendingCase from "./AgentActivityPendingCase/AgentActivityPendingCase";
import AgentActivityRunningCase from "./AgentActivityRunningCase/AgentActivityRunningCase";

const AgentActivity = () => {
  return (
    <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
      {/* Activity basic details */}
      <AgentActivityBasicDetails />

      {/* Pending case */}
      <AgentActivityPendingCase />

      {/* Running case */}
      <AgentActivityRunningCase />

      {/* Completed case */}
      <AgentActivityCompletedCase />
    </div>
  );
};

export default AgentActivity;
