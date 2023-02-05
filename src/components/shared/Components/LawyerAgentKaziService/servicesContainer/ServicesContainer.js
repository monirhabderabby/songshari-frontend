import React from "react";
import { useGetMyServicesQuery } from "../../../../../Redux/features/Service/ServiceApi";
import ServicesCard from "../../../../Lawyer/LawyerServicesPage/Services/ServicesCard";
// Third party services
import { TbFaceIdError } from "react-icons/tb";

export const ServicesContainer = () => {
    const { data, isLoading, error } = useGetMyServicesQuery();

    // js variable declarations
    let content;
    const { services } = data || {};
    if (isLoading) {
        content = <div className="h-[500px] w-full flex justify-center items-center">Loading...</div>;
    } else if (!isLoading && error) {
        content = (
            <div className="h-[100px] w-full flex justify-center items-center flex-col">
                <TbFaceIdError className="text-[45px] text-[#FF3366]" />
                <h3 className="text-[16px] text-gray-400 font-medium font-syne">SomeThing went wrong. Please try again later</h3>
            </div>
        );
    } else if (!isLoading && services?.length > 0) {
        content = (
            <div className="h-auto w-full grid grid-cols-2 gap-3">
                {services.map(service => (
                    <ServicesCard key={service?._id} {...{ service }} />
                ))}
            </div>
        );
    }

    return content;
};
