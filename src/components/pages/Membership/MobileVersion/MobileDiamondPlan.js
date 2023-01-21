import React, { useEffect, useState } from "react";
import MobileMembershipHeader from "./MobileMembershipHeader";
import { BsCheckCircleFill } from "react-icons/bs";
import topShape from "../../../../assets/images/Shape/membershipPageShape.png";
import { BottomNav } from "../../../../Wrapper/Home/mobileversion/BottomNav";
import { useGetAllPlansQuery } from "../../../../Redux/features/userInfo/withoutLoginApi";
import { useSearchParams } from "react-router-dom";
import getCookie from "../../../../Helper/cookies/getCookie";

const MobileDiamondPlan = () => {
  const [paramsObj] = useSearchParams();
  const { data, isLoading, error } = useGetAllPlansQuery();
  const [plan, setPlan] = useState(data?.data?.plans[0]);

  useEffect(() => {
    data?.data?.plans?.forEach((element) => {
      if (
        element?.title?.toLowerCase() === paramsObj.get("plan").toLowerCase()
      ) {
        setPlan(element);
      }
    });
  }, [paramsObj, data?.data?.plans]);

  return (
    <div>
      {!isLoading && !error && (
        <MobileMembershipHeader
          plan={plan}
          data={data?.data?.plans}
          setPlan={setPlan}
        />
      )}
      <section>
        <div className="mt-6 flex gap-5 items-center ml-[30px]">
          <div className="flex p-4 w-[72px] bg-[#ECEBFF] rounded-2xl">
            <div className="w-[19px] h-[38px] bg-[#E41272] rounded-l-full"></div>
            <div className="w-[19px] h-[38px] bg-[#F664BC] rounded-r-full"></div>
          </div>
          <div>
            <p className="text-[#25292D] text-lg leading-5 font-medium">
              {plan?.title} Plan
            </p>
            <h2 className="text-[#E41272] text-2xl leading-9 font-bold">
              {plan?.title}
            </h2>
          </div>
        </div>
        <div>
          <p className="ml-[30px]">
            <span className="text-[#E41272] text-[54px] leading-[66px] font-bold mr-2">
              {plan?.priceMonth}
            </span>
            <span className="text-[#25292D] text-xl leading-[22px] font-medium">
              /monthly
            </span>
          </p>
          <p className="text-[#2F3659] text-lg leading-5 font-bold my-5 ml-[30px]">
            What’s included
          </p>
        </div>
        <div className="ml-[30px]">
          {plan?.offers.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 mb-4 text-[#2F3659] ${
                plan.id > 1 ? "font-normal" : "font-medium"
              }`}
            >
              <BsCheckCircleFill className="text-2xl" />
              <p className="text-lg leading-5">{item}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center pb-5 mb-10 relative">
          <form
            type="submit"
            action={`http://localhost:4000/payment/plan?_plan=${
              plan?._id
            }&amount=${plan?.priceMonth.toString()}&desc=${"Plan payment"}&_token=${getCookie(
              "token"
            )}`}
            method="post"
          >
            <button
              className="py-6 px-24 rounded-[96px] text-lg leading-5 font-bold text-white"
              style={{
                zIndex: 100,
                backgroundImage:
                  "linear-gradient(180deg, #CC1A7A 0%, #5A3FA0 96.35%, rgba(228, 18, 114, 0) 100%)",
              }}
            >
              Get Started
            </button>
          </form>
          <img
            style={{ zIndex: -1 }}
            className="absolute bottom-0 rotate-180 h-36 w-full"
            src={topShape}
            alt="Not Available"
          />
        </div>
      </section>
      <BottomNav></BottomNav>
    </div>
  );
};

export default MobileDiamondPlan;
