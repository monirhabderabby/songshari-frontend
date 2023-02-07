// Configuration
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PendingOrder } from "../../../../../components/shared/Components/LawyerAgentKaziService/PendingOrder/PendingOrder";
import RunningOrder from "../../../../../components/shared/Components/LawyerAgentKaziService/RunningOrder/RunningOrder";
import { ServicesContainer } from "../../../../../components/shared/Components/LawyerAgentKaziService/servicesContainer/ServicesContainer";

// Components
import { MobileBackButton } from "../../../../../components/shared/Components/MobileBackButton";
import { BottomNav } from "../../BottomNav";

const MobileKaziServicesPage = () => {
  const [pendingOrder, setPendingOrder] = useState(true);
  const [runningOrder, setRunningOrder] = useState(true);
  const [page, setPage] = useState(1);
  return (
    <div>
      <MobileBackButton name={"My Services"} />

      <div className="px-6">
        <div className="w-full">
          <div className="mt-5">
            <ServicesContainer />
            <div className="my-5 flex justify-center">
              <Link
                className="px-7 py-2 text-white text-lg md:text-xl font-semibold leading-8 rounded bg-[#E41272]"
                to={"/kaziAddServiceFormMov"}
              >
                ADD NEW SERVICE
              </Link>
            </div>
          </div>
          {/* Services Nav */}
          <div className="flex justify-around items-center">
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
        </div>
      </div>
      <div className="px-6 py-5">
        {page === 1 && pendingOrder && (
          <PendingOrder setPendingOrder={setPendingOrder} />
        )}
        {page === 2 && runningOrder && (
          <RunningOrder {...{ setRunningOrder }} />
        )}
        {/* {page === 3 && <CompletedCase></CompletedCase>} */}
      </div>
      <div className="h-20"></div>
      <BottomNav />
    </div>
  );
};

export default MobileKaziServicesPage;
