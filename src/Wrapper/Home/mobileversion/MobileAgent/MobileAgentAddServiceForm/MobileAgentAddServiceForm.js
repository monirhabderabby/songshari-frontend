// configuration
import React from "react";

// Components
import AgentServiceForm from "../../../../../components/pages/Agent/AgentServiceForm/AgentServiceForm";
import { MobileBackButton } from "../../../../../components/shared/Components/MobileBackButton";
import { BottomNav } from "../../BottomNav";

const MobileAgentAddServiceForm = () => {
  return (
    <div>
      <MobileBackButton name={"Add Service"} />
      <AgentServiceForm />
      <BottomNav />
    </div>
  );
};

export default MobileAgentAddServiceForm;
