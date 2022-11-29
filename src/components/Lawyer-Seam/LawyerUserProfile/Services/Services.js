import React from "react";
import service1 from "../../../../assets/images/LawyerProfileImg/lawyerService1.jpg";
import service2 from "../../../../assets/images/LawyerProfileImg/lawyerService2.jpg";
import service3 from "../../../../assets/images/LawyerProfileImg/lawyerService3.jpg";
import service4 from "../../../../assets/images/LawyerProfileImg/lawyerService4.jpg";

const Services = () => {
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

    return (
        <div className="mt-[70px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {servicesInfo.map(service => (
                    <div
                        key={service.id}
                        className="rounded-xl px-6 pt-6 pb-16 md:pb-6 h-[384px]"
                        style={{ backgroundImage: "linear-gradient(180deg, #FFE6EB 0%, #FFDAE3 0.01%, #FFE6EC 5.73%, #FAE6FF 100%)" }}
                    >
                        <img className="rounded-xl h-1/2 w-full" src={service.img} alt="Not Available" />
                        <h3 className="text-lg font-medium leading-6 my-4">{service.serviceName}</h3>
                        <p className="text-[#666666] text-sm leading-[18px] tracking-wide mb-4">{service.description}</p>
                        <h4 className="text-sm font-medium leading-[18px] mb-4">{service.lawyerName}</h4>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <div className="bg-[#DEDEDE] w-[16px] h-[16px] rounded-full"></div>
                                <p className="text-[#666666] text-sm leading-[18px]">Lawyer</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <p className="text-base font-semibold leading-5">$ {service.price}</p>
                                <button className="text-sm text-white font-semibold leading-[18px] px-5 py-1 rounded bg-[#E41272]">View</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="my-12 md:my-16 lg:my-28 flex justify-center">
                <button className="px-10 py-4 text-white text-xl md:text-2xl font-bold leading-8 rounded bg-[#E41272]">ADD NEW SERVICE</button>
            </div>
        </div>
    );
};

export default Services;
