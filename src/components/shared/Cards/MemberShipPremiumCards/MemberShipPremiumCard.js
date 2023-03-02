// Configuration
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Third party package
import { BsCheckCircleFill } from "react-icons/bs";
import { Switch } from "@mui/material";

// Components & css file
import getCookie from "../../../../Helper/cookies/getCookie";
import "../../../../assets/css/MembershipPremium.css";

const MemberShipPremiumCard = ({ item }) => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const monthOrAnnualHandler = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <div className="card membership-card lg:max-w-lg bg-gray-200 shadow-xl pt-6 rounded-lg pb-24 relative z-10">
      <div className="flex items-center w-full justify-evenly my-2">
        <p className="text-[16px] text-[#E41272] font-semibold">Monthly</p>
        <Switch onChange={monthOrAnnualHandler} />
        <p className="text-[16px] text-[#2F3659]">Annually</p>
      </div>
      <div className="card-body">
        <h2 className="text-black  text-xl text-center pb-4">{item?.title}</h2>
        <p className="text-center text-5xl font-bold text-[#ac216c] pb-2">
          BDT {item?.priceMonth}
        </p>
        <p className="text-xl pt-4 text-center">PER MONTH</p>
        <div className="px-2 pt-3">
          {item?.offers?.map((offer, i) => (
            <div
              key={i}
              className="flex items-center gap-2 mb-2 text-[#2F3659]"
            >
              <BsCheckCircleFill className="text-lg" />
              <p className="text-sm font-fira">{offer}</p>
            </div>
          ))}
        </div>
        <div className="card-actions w-full absolute bottom-0">
          <div className="text-center">
            {!getCookie("token") && (
              <button
                onClick={() => navigate("/login")}
                type="submit"
                className=" bg-member-premium-btn bg-gradient-to-r from-[#f22876] to-[#942dd9] text-white  "
              >
                Buy Now
              </button>
            )}
            {getCookie("token") && (
              <form
                action={`http://localhost:4000/payment/plan?_plan=${
                  item._id
                }&annually=${checked}&amount=${item?.priceMonth?.toString()}&desc=${"Plan payment"}&_token=${getCookie(
                  "token"
                )}`}
                method="post"
              >
                <button
                  type="submit"
                  className=" bg-member-premium-btn bg-gradient-to-r from-[#f22876] to-[#942dd9] text-white  "
                >
                  Buy Now
                </button>
              </form>
            )}
          </div>
          <div className="member-sub pt-8"></div>
        </div>
      </div>
    </div>
  );
};

export default MemberShipPremiumCard;
