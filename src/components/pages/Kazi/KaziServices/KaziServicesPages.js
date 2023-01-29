// Configuration
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import { useGetMyServicesQuery } from "../../../../Redux/features/Service/ServiceApi";
import KaziServiceCard from "../card/KaziServiceCard";
import CompletedCaseForKazi from "./completedCase/CompletedCaseForKazi";
import PendingOrderForKazi from "./pendingOrder/PendingOrderForKazi";
import RunningCaseForKazi from "./runningCase/RunningCaseForKazi";

const KaziServicesPage = () => {
    const {data, isLoading,error} = useGetMyServicesQuery();
    console.log(data, isLoading, error);
    
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    return (
        <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
            <div className="w-11/12 mx-auto xl:w-full">
                <div className="mt-[70px]">
                    <div className="grid grid-cols-2 gap-3">
                        {data && data?.data?.services?.map(service => (
                            <KaziServiceCard key={service._id} {...{ service }} />
                        ))}
                    </div>
                    <div className="my-12 md:my-16 lg:my-28 flex justify-center">
                        <Link
                            className="px-10 py-4 text-white text-xl md:text-2xl font-bold leading-8 rounded bg-[#E41272]"
                            to={"/kaziProfile/kaziAddServiceForm"}
                        >
                            ADD NEW SERVICE
                        </Link>
                    </div>
                </div>
                <PendingOrderForKazi />
                <RunningCaseForKazi />
                <CompletedCaseForKazi />
            </div>
        </div>
    );
};

export default KaziServicesPage;
