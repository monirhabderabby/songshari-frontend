// Configuration
import React,{useState} from "react";

// Third party packages
import BannerProfile from "../../../components/pages/Home/Banner/BannerProfile";
import GoPremiumCard from "../../../components/pages/Home/Banner/GoPrimiumCard";

export const MobileBanner = () => {
    const [swapable, setSwapable] = useState(true);
    return (
      <div className="mt-8 px-6">
        {swapable && <BannerProfile {...{ setSwapable }} />}
        {!swapable && <GoPremiumCard />}
      </div>
    );
};
