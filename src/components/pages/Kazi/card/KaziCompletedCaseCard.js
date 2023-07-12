import React from "react";

// Third party package
import { AiOutlineClockCircle } from "react-icons/ai";

const KaziCompletedCaseCard = ({ singleCase }) => {
    return (
        <div
            className="rounded-xl p-6"
            style={{
                backgroundImage: "linear-gradient(180deg, #F4FFF5 0%, #FFFBF1 100%)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
        >
            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <img className="rounded-xl" src={singleCase.img} alt="Not Available" />
                </div>
                <div className="col-span-2 ml-6 my-auto">
                    <p className="font-medium leading-6 mb-4">{singleCase.caseName}</p>
                    <p className="font-medium text-lg leading-6">$ {singleCase.price}</p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4 mt-5">
                <span>
                    <AiOutlineClockCircle />
                </span>
                <p>{singleCase.time}</p>
            </div>
        </div>
    );
};

export default KaziCompletedCaseCard;
