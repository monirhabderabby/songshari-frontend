import moment from "moment";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

export const CompletedOrderCard = ({ order, activity }) => {
  const { service, updatedAt } = order || {};
  let { title, price } = service || {};
  title = title?.length > 42 ? title.slice(0, 32) + "..." : title;
  return (
    <div
      className={`rounded-xl p-6 w-[327px] md:w-[393px] h-[188px] ${
        activity ? "text-white" : "text-black"
      }`}
      style={{
        backgroundImage: `${
          activity
            ? "linear-gradient(180deg, #690E94 0%, #192C6F 100%)"
            : "linear-gradient(180deg, #F4FFF5 0%, #FFFBF1 100%)"
        }`,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <img
            className="rounded-xl w-20 h-20 md:w-[100px] md:h-[100px]"
            src="https://i.postimg.cc/zBcmyTkW/vecteezy-a-close-up-of-a-lawyer-working-at-desk-1269203.jpg"
            alt="Not Available"
          />
        </div>
        <div className="col-span-2 ml-4 md:ml-[25px] my-auto">
          <p className="font-normal leading-6 text-[16px] mb-[16px]">{title}</p>
          <p className="font-medium text-[18px] leading-6">$ {price}</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-[21px]">
        <span>
          <AiOutlineClockCircle />
        </span>
        <p className="font-light">{moment(updatedAt).format("LT")}</p>
      </div>
    </div>
  );
};
