import React from "react";
import "../../../../assets/css/MembershipPremium.css";
import getCookie from "../../../../Helper/cookies/getCookie";

const MemberShipPremiumCard = ({ item }) => {
 
  return (
    <div className="card membership-card lg:max-w-lg bg-gray-200 shadow-xl pt-10 rounded-lg mb-32">
      <div className="card-body">
        <h2 className="text-black  text-xl text-center pb-4">{item.title}</h2>
        <p className="text-center text-5xl font-bold text-[#ac216c] pb-2">
          DBT {item.priceMonth}
        </p>
        <p className="text-xl pt-4 text-center">PER MONTH</p>
        <div className="card-actions w-full">
          <div className="text-center">
            <form
              action={`http://localhost:4000/payment/plan?_plan=${
                item._id
              }&amount=${item.priceMonth.toString()}&desc=${"Plan payment"}&_token=${getCookie(
                "token"
              )}`}
              method="post"
            >
              <button type="submit"
                className=" bg-member-premium-btn   text-white  "
              >
                Buy Now
              </button>
            </form>
          </div>
          <div className="member-sub pt-8 pb-"></div>
        </div>
      </div>
    </div>
  );
};

export default MemberShipPremiumCard;
