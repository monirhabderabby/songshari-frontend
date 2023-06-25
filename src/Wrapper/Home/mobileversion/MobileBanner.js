// Configuration
import React, { useState } from "react";
import { decodeToken } from "react-jwt";

// Third party packages
import BannerProfilev2 from "../../../components/pages/Home/Banner/BannerProfilev2";
import GoPremiumCard from "../../../components/pages/Home/Banner/GoPrimiumCard";
import getCookie from "../../../Helper/cookies/getCookie";
import UnLoggedMovBanner from "./UnLoggedMovBanner";
import { useGetRecentMembersWithAuthQuery } from "../../../Redux/features/userInfo/withoutLoginApi";

export const MobileBanner = () => {
  const { data: swipematch } = useGetRecentMembersWithAuthQuery({
    searchTerm: "",
    page: "",
    role: "",
    limit: "",
});
  const [swapable, setSwapable] = useState(true);
  const token = getCookie("token");
  const decodedValue = decodeToken(token);
  const { role } = decodedValue || {};
  return (
    <div>
      {role?.includes("member") ? (
        <div className="mt-8 px-6 flex justify-center bg-transparent">
          {swapable && swipematch && <BannerProfilev2 {...{ setSwapable,swapable,swipematch }} />}
          {!swapable && <GoPremiumCard />}
        </div>
      ) : (
        <UnLoggedMovBanner />
      )}
    </div>
  );
};
