import React from "react";
import serviceExample from "../../../assets/images/userServices.png";

const UserAllServices = () => {
    const servicesInfo = [
        {
            id: 1,
            serviceHeading: "Agent Service name here",
            serviceDescription: "Please add your content here. Keep it short and simple. And smile :)",
            serviceProviderName: "Sarwar Jahan",
            providerDesignation: "Agent",
            servicePrice: "100",
            serviceImage: serviceExample,
        },
        {
            id: 2,
            serviceHeading: "Agent Service name here",
            serviceDescription: "Please add your content here. Keep it short and simple. And smile :)",
            serviceProviderName: "Sarwar Jahan",
            providerDesignation: "Agent",
            servicePrice: "100",
            serviceImage: serviceExample,
        },
        {
            id: 3,
            serviceHeading: "Agent Service name here",
            serviceDescription: "Please add your content here. Keep it short and simple. And smile :)",
            serviceProviderName: "Sarwar Jahan",
            providerDesignation: "Agent",
            servicePrice: "100",
            serviceImage: serviceExample,
        },
        {
            id: 4,
            serviceHeading: "Agent Service name here",
            serviceDescription: "Please add your content here. Keep it short and simple. And smile :)",
            serviceProviderName: "Sarwar Jahan",
            providerDesignation: "Agent",
            servicePrice: "100",
            serviceImage: serviceExample,
        },
        {
            id: 5,
            serviceHeading: "Agent Service name here",
            serviceDescription: "Please add your content here. Keep it short and simple. And smile :)",
            serviceProviderName: "Sarwar Jahan",
            providerDesignation: "Agent",
            servicePrice: "100",
            serviceImage: serviceExample,
        },
    ];

    return (
        <div className="max-w-[1024px] mx-auto px-6">
            <h1 className="text-3xl leading-10 font-bold mb-5 ml-2">All Service</h1>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-x-[12px]">
                {servicesInfo.map(service => (
                    <div key={service.id} className="bg-[#FDF8E7] rounded-xl p-5 mb-6">
                        <div>
                            <img className="w-full h-48 rounded-xl" src={service.serviceImage} alt="" />
                        </div>
                        <h2 className="text-lg leading-6 font-medium my-4">{service.serviceHeading}</h2>
                        <p className="text-sm leading-[18px] text-[#666666] mb-4">{service.serviceDescription}</p>
                        <h4 className="text-sm leading-[18px] font-medium mb-4">{service.serviceProviderName}</h4>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-[6px]">
                                <div className="bg-[#DEDEDE] w-4 h-4 rounded-full"></div>
                                <p className="text-sm leading-[18px] text-[#666666]">{service.providerDesignation}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <p className="text-base leading-5 font-semibold">$ {service.servicePrice}</p>
                                <button className="text-sm text-white leading-[18px] font-semibold px-5 py-1 bg-[#E41272] rounded">View</button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default UserAllServices;
