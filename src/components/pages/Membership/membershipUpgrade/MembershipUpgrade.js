import React from "react";

export const MembershipUpgrade = () => {
  return (
    <div className="mb-[300px] max-w-[1200px] mx-auto">
      <h1 className="text-secondary font-bold font-syne text-2xl text-center mt-20">
        Upgrade Your Profile
      </h1>
      <h1 className="text-black font-bold text-5xl text-center mt-4 ">
        Premium Member Plan
      </h1>
      <p className="text-center mt-4 text-lg">
        Benefit from Shongshari at its maximum!
      </p>

      <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-2 mx-auto ml-14 mr-14 mt-20">
        <div>
          <img
            alt="Not Available"
            src="https://pixner.net/peyamba/peyamba/assets/images/membership/icon1.png"
            className="mx-auto"
          ></img>
          <h1 className="text-black font-bold text-2xl text-center mt-4">
            Unlimited Messages
          </h1>
          <p className="text-xl text-center mt-4">
            Send and receive messages <br></br>with no limits
          </p>
        </div>
        <div>
          <img
            alt="Not Available"
            src="https://pixner.net/peyamba/peyamba/assets/images/membership/icon2.png"
            className="mx-auto"
          ></img>
          <h1 className="text-black font-bold text-2xl text-center mt-4">
            VIP Badge
          </h1>
          <p className="text-xl text-center mt-4">
            Send and receive messages <br></br>with no limits
          </p>
        </div>
        <div>
          <img
            alt="Not Available"
            src="https://pixner.net/peyamba/peyamba/assets/images/membership/icon3.png"
            className="mx-auto"
          ></img>
          <h1 className="text-black font-bold text-2xl text-center mt-4">
            Unlimited matches
          </h1>
          <p className="text-xl text-center mt-4">
            Send and receive messages <br></br>with no limits
          </p>
        </div>
        <div>
          <img
            alt="Not Available"
            src="https://pixner.net/peyamba/peyamba/assets/images/membership/icon4.png"
            className="mx-auto"
          ></img>
          <h1 className="text-black font-bold text-2xl text-center mt-4">
            Take more messages
          </h1>
          <p className="text-xl text-center mt-4">
            Send and receive messages <br></br>with no limits
          </p>
        </div>
      </div>
    </div>
  );
};
