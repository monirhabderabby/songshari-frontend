// Configuration
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Components
import { PendingOrder } from "../../../shared/Components/LawyerAgentKaziService/PendingOrder/PendingOrder";
import RunningOrder from "../../../shared/Components/LawyerAgentKaziService/RunningOrder/RunningOrder";
import { ServicesContainer } from "../../../shared/Components/LawyerAgentKaziService/servicesContainer/ServicesContainer";
import CompletedCaseForKazi from "./completedCase/CompletedCaseForKazi";

const KaziServicesPage = () => {
    const [pendingOrder, setPendingOrder] = useState(true);
    const [runningOrder, setRunningOrder] = useState(true);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    return (
        <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
            <div className="w-11/12 mx-auto xl:w-full">
                <div className="mt-[70px]">
                    <ServicesContainer />
                    <div className="my-12 md:my-16 lg:my-28 flex justify-center">
                        <Link
                            className="px-10 py-4 text-white text-xl md:text-2xl font-bold leading-8 rounded bg-[#E41272]"
                            to={"/kaziProfile/kaziAddServiceForm"}
                        >
                            ADD NEW SERVICE
                        </Link>
                    </div>
                </div>
                {pendingOrder && <PendingOrder setPendingOrder={setPendingOrder} />}
                {runningOrder && <RunningOrder setRunningOrder={setRunningOrder} />}
                <CompletedCaseForKazi />
            </div>
        </div>
    );
};

export default KaziServicesPage;
