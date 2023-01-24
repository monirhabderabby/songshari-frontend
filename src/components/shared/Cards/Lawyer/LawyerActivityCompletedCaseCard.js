import React from "react";

// Third party package
import { AiOutlineClockCircle } from "react-icons/ai";

const LawyerActivityCompletedCaseCard = ({ singleCase }) => {
  return (
    <div className="text-white rounded-xl p-6 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-[linear-gradient(180deg,#690E94_0%,#192C6F_100%)]">
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <img
            className="rounded-xl"
            src={singleCase.img}
            alt="Not Available"
          />
        </div>
        <div className="col-span-2 ml-6 my-auto">
          <p className="font-medium leading-6 mb-4">{singleCase.caseName}</p>
          <p className="font-medium text-lg leading-6">$ {singleCase.price}</p>
          <div className="flex justify-start items-center gap-4 mt-5">
            <span>
              <AiOutlineClockCircle />
            </span>
            <p>{singleCase.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerActivityCompletedCaseCard;
