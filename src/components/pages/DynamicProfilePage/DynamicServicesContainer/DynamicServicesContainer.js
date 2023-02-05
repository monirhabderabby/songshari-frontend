// Configuration
import React from "react";
import { useParams } from "react-router";

// Third party packages
import { FaServicestack } from "react-icons/fa";

// Components
import { LineWaveLoader } from "../../../../components/shared/Cards/Loader/lineWaveLoader/LineWaveLoader";
import { useGetServiceByUserIdQuery } from "../../../../Redux/features/Service/ServiceApi";
import { TBFaceError } from "../../../ui/error/TBFaceError";
import DynamicServicesCard from "../Card/DynamicServicesCard";

export const DynamicServicesContainer = () => {
    const { id } = useParams();

    const { data, isLoading, isError } = useGetServiceByUserIdQuery(id);
    const { services } = data || {};

    console.log(services);

    let content;
    if (isLoading) {
        content = <LineWaveLoader />;
    } else if (!isLoading && isError) {
        content = <TBFaceError />;
    } else if (!isLoading && services?.length === 0) {
        content = (
            <div className="h-[400px] w-full flex flex-col justify-center items-center">
                <FaServicestack />
                <span className="text-[16px] text-gray-400 font-Inter font-normal">No service released</span>
            </div>
        );
    } else if (!isLoading && services?.length > 0) {
        content = (
            <div className="flex flex-col ">
                {services?.map((service, index) => {
                    return <DynamicServicesCard key={index} {...{ service }} />;
                })}
            </div>
        );
    }

    return content;
};
