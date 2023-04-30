// Configuration
import React, { useState } from "react";

// Components
import ActivityPendingOrder from "../../../../../components/shared/Components/LawyerAgentKaziService/Activity/ActivityPendingOrder";
import ActivityRunningOrder from "../../../../../components/shared/Components/LawyerAgentKaziService/Activity/ActivityRunningOrder";
import { MobileBackButton } from "../../../../../components/shared/Components/MobileBackButton";
import { BottomNav } from "../../BottomNav";
import ActivityHeader from "../../../../../components/shared/Components/LawyerAgentKaziService/Activity/ActivityHeader";
import ActivityCompletedOrder from "../../../../../components/shared/Components/LawyerAgentKaziService/Activity/ActivityCompletedOrder";

const MobileKaziActivity = () => {
  const [pendingOrder, setPendingOrder] = useState(true);
  const [runningOrder, setRunningOrder] = useState(true);
  const [completedOrder, setCompletedOrder] = useState(true);
  const [page, setPage] = useState(1);
  return (
    <div>
      <MobileBackButton name={"My Activity"} />
      <div className="px-6">
        {/* Activity basic info */}
        <ActivityHeader />

        {/* Activity top nav */}
        <div className="flex justify-around items-center mb-5">
          <button
            className={`text-white text-xs md:text-sm leading-7 font-medium font-Inter p-2 ${
              page === 1 ? "bg-[#E41272]" : "bg-[#757575]"
            }  rounded`}
            onClick={() => setPage(1)}
          >
            Pending Order
          </button>
          <button
            className={`text-white text-xs md:text-sm leading-7 font-medium font-Inter p-2 ${
              page === 2 ? "bg-[#E41272]" : "bg-[#757575]"
            }  rounded`}
            onClick={() => setPage(2)}
          >
            Running Case
          </button>
          <button
            className={`text-white text-xs md:text-sm leading-7 font-medium font-Inter p-2 ${
              page === 3 ? "bg-[#E41272]" : "bg-[#757575]"
            }  rounded`}
            onClick={() => setPage(3)}
          >
            Completed Case
          </button>
        </div>

        {/* Pending case */}
        {pendingOrder && page === 1 && (
          <ActivityPendingOrder {...{ setPendingOrder }} />
        )}
        {/* Running case */}
        {runningOrder && page === 2 && (
          <ActivityRunningOrder {...{ setRunningOrder }} />
        )}
        {/* Completed case */}
        {completedOrder && page === 3 && (
          <ActivityCompletedOrder {...{ setCompletedOrder }} />
        )}
      </div>
      <div className="h-20"></div>
      <BottomNav />
    </div>
  );
};

export default MobileKaziActivity;
