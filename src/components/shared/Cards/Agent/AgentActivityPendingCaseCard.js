import React from "react";

// Third party package
import { BsFillCalendarFill } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";

const AgentActivityPendingCaseCard = ({ caseInfo }) => {
  return (
    <div className="text-white px-6 lg:px-10 py-6 rounded-lg bg-[linear-gradient(180.78deg,#40268B_-20.3%,#513A9C_99.3%)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ">
      <p className="text-lg leading-6 tracking-tight mb-2">{caseInfo.name}</p>
      <p className="text-xl font-semibold font-Nunito leading-7 tracking-tight mb-3">
        {caseInfo.serviceName}
      </p>
      <div className="flex items-center gap-3 mb-8">
        <span>
          {" "}
          <BsFillCalendarFill />{" "}
        </span>
        <p className="leading-[22px] tracking-tight">{caseInfo.date}</p>
      </div>
      <div className="flex items-center gap-5">
        <div className="bg-[#E41272] text-white text-xl p-4 rounded-full">
          <MdOutlineMessage />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <button className="bg-[#E41272] text-white rounded px-3 py-2 font-semibold leading-[22px] tracking-tight whitespace-nowrap">
            Accept Now
          </button>
          <button className="border-[1px] border-white rounded px-3 py-2 font-semibold leading-[22px] tracking-tight whitespace-nowrap">
            Reject Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentActivityPendingCaseCard;
