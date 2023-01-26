// Configuration
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import service1 from "../../../../assets/images/LawyerProfileImg/lawyerService1.jpg";
import service2 from "../../../../assets/images/LawyerProfileImg/lawyerService2.jpg";
import service3 from "../../../../assets/images/LawyerProfileImg/lawyerService3.jpg";
import service4 from "../../../../assets/images/LawyerProfileImg/lawyerService4.jpg";
import KaziServiceCard from "../card/KaziServiceCard";
import CompletedCaseForKazi from "./completedCase/CompletedCaseForKazi";
import PendingOrderForKazi from "./pendingOrder/PendingOrderForKazi";
import RunningCaseForKazi from "./runningCase/RunningCaseForKazi";

const KaziServicesPage = () => {
    const servicesInfo = [
        {
            id: 1,
            serviceName: "Name of the Service",
            lawyerName: "Mr. John Watson",
            description: "Some important info should be share in this short description. This will help the user to choose better services.",
            price: 100,
            img: service1,
        },
        {
            id: 2,
            serviceName: "Name of the Service",
            lawyerName: "Mr. John Watson",
            description: "Some important info should be share in this short description. This will help the user to choose better services.",
            price: 100,
            img: service2,
        },
        {
            id: 3,
            serviceName: "Name of the Service",
            lawyerName: "Mr. John Watson",
            description: "Some important info should be share in this short description. This will help the user to choose better services.",
            price: 100,
            img: service3,
        },
        {
            id: 4,
            serviceName: "Name of the Service",
            lawyerName: "Mr. John Watson",
            description: "Some important info should be share in this short description. This will help the user to choose better services.",
            price: 100,
            img: service4,
        },
    ];
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    return (
        <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
            <div className="w-11/12 mx-auto xl:w-full">
                <div className="mt-[70px]">
                    <div className="grid grid-cols-2 gap-3">
                        {servicesInfo.map(service => (
                            <KaziServiceCard key={service.id} {...{ service }} />
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
