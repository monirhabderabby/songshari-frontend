// Configuration
import React from "react";

// Components
import { BottomNav } from "../../../../../Wrapper/Home/mobileversion/BottomNav";
import { MobileBackButton } from "../../../../shared/Components/MobileBackButton";
import { Friends } from "../../../../SingleProfilesUser/FriendsSection/Friends";

const MobileUserConnections = () => {
  return (
    <div>
      <MobileBackButton name={"Connections"} />
      <div className="px-6">
        <Friends {...{ responsive: true }} />
      </div>
      <div className="h-20"></div>
      <BottomNav />
    </div>
  );
};

export default MobileUserConnections;
