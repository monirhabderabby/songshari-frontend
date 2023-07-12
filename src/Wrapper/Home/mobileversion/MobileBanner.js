// Configuration
import React, { useState } from "react";
import { decodeToken } from "react-jwt";

// Third party packages
import BannerProfile from "../../../components/pages/Home/Banner/BannerProfile";
import GoPremiumCard from "../../../components/pages/Home/Banner/GoPrimiumCard";
import getCookie from "../../../Helper/cookies/getCookie";
import UnLoggedMovBanner from "./UnLoggedMovBanner";

export const MobileBanner = () => {
  const [swapable, setSwapable] = useState(true);
  const token = getCookie("token");
  const decodedValue = decodeToken(token);
  const { role } = decodedValue || {};
  return (
    <div>
      {role?.includes("member") ? (
        <div className="mt-8 px-6">
          {swapable && <BannerProfile {...{ setSwapable }} />}
          {!swapable && <GoPremiumCard />}
        </div>
      ) : (
        <UnLoggedMovBanner />
      )}
    </div>
  );
};
