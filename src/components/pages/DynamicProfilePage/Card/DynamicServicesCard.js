import React from "react";
import { Link } from "react-router-dom";
import liveLinkGenerator from "../../../../assets/utilities/liveLink/liveLinkGenerator";

const DynamicServicesCard = ({ service, responsive }) => {
  let { photos, description, title, tags, role, price, _id } = service || {};
  const { firstName, lastName, role: userRole } = role || {};
  description =
    description.length > 136
      ? description.slice(0, 136) + "..."
      : description + "...";
  const name = firstName + " " + lastName;

  // Dynamic path made decision
  let redirectPath;
  if (userRole.includes("kazi")) {
    responsive
      ? (redirectPath = `/serviceMov/${_id}`)
      : (redirectPath = `/service/${_id}`);
  }
  if (userRole.includes("lawyer")) {
    responsive
      ? (redirectPath = `/serviceMov/${_id}`)
      : (redirectPath = `/service/${_id}`);
  }
  if (userRole.includes("agent")) {
    responsive
      ? (redirectPath = `/serviceMov/${_id}`)
      : (redirectPath = `/service/${_id}`);
  }

  return (
    <div
      className="rounded-xl px-6 pt-6 pb-6 h-auto max-w-[570px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #FFE6EB 0%, #FFDAE3 0.01%, #FFE6EC 5.73%, #FAE6FF 100%)",
      }}
    >
      <img
        className="rounded-xl h-[264px] w-full"
        src={liveLinkGenerator(photos[0])}
        alt="Not Available"
      />
      <h3 className="text-lg font-medium leading-6 my-4">{title}</h3>
      <p className="text-[#666666] text-sm leading-[18px] tracking-wide mb-4">
        {description}
      </p>
      <h4 className="text-sm font-medium leading-[18px] mb-4">{name}</h4>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex items-center gap-2">
          {tags?.map((tag, index) => {
            return (
              <div key={index} className="flex items-center gap-2">
                <div className="bg-[#DEDEDE] w-[16px] h-[16px] rounded-full"></div>
                <p className="text-[#666666] text-sm leading-[18px]">{tag}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between items-center gap-x-4 mt-4 md:mt-0">
          <p className="text-base font-semibold leading-5">$ {price}</p>
          <Link
            to={redirectPath}
            className="text-sm text-white font-semibold leading-[18px] px-5 py-1 rounded bg-[#E41272]"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DynamicServicesCard;
