// Configuration
import React from "react";
import { Link } from "react-router-dom";

const AgentServicesCard = ({ service }) => {
  return (
    <div
      className="rounded-xl px-6 pt-6 pb-16 md:pb-6 h-[384px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #FFE6EB 0%, #FFDAE3 0.01%, #FFE6EC 5.73%, #FAE6FF 100%)",
      }}
    >
      <img
        className="rounded-xl h-1/2 w-full"
        src={service.img}
        alt="Not Available"
      />
      <h3 className="text-lg font-medium leading-6 my-4">
        {service.serviceName}
      </h3>
      <p className="text-[#666666] text-sm leading-[18px] tracking-wide mb-4">
        {service.description}
      </p>
      <h4 className="text-sm font-medium leading-[18px] mb-4">
        {service.lawyerName}
      </h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-[#DEDEDE] w-[16px] h-[16px] rounded-full"></div>
          <p className="text-[#666666] text-sm leading-[18px]">Lawyer</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-base font-semibold leading-5">$ {service.price}</p>
          <Link
            to={`/agentProfile/agentSingleServiceDetails/${service.id}`}
            className="text-sm text-white font-semibold leading-[18px] px-5 py-1 rounded bg-[#E41272]"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AgentServicesCard;
