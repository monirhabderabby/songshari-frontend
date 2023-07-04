import { useState } from "react";
import { decodeToken } from "react-jwt";
import getCookie from "../../../../Helper/cookies/getCookie";
import BannerFilterBox from "./BannerFilterBox";
import BannerProfilev2 from "./BannerProfilev2";
// import { BannerProfileWithoutLogin } from "./BannerProfileWithoutLogin";
import GoPremiumCard from "./GoPrimiumCard";
import {
  useGetRecentMembersQuery,
  useGetRecentMembersWithAuthQuery,
} from "../../../../Redux/features/userInfo/withoutLoginApi";
import BannerSlider from "./BannerSlider";

const Banner = () => {
  const token = getCookie("token");
  const decodedValue = decodeToken(token);
  const { role } = decodedValue || {};
  const [swapable, setSwapable] = useState(true);
  const { data: recents } = useGetRecentMembersQuery({
    role: "member",
    searchTerm: "",
  });
  const { data: swipematch } = useGetRecentMembersWithAuthQuery({
    searchTerm: "",
    page: "",
    role: "",
    limit: "",
  });

  return (
    <>
      <section className="bg-[url('https://img1.picmix.com/output/stamp/normal/9/9/4/3/1503499_8efaf.gif')] h-[calc(100vh-90px)] flex items-center pt-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="h-full w-full flex items-center gap-x-3">
            <BannerFilterBox />
            <div className="h-[400px]">
              <BannerSlider />
            </div>
            {/* <img
                className="h-[400px] max-w-[611px] rounded-[12px]"
                style={{ boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.12)" }}
                src="https://images.pexels.com/photos/1779414/pexels-photo-1779414.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Not Available"
                /> */}
            {role?.includes("member") && swapable && token && swipematch && (
              <BannerProfilev2
                {...{ swapable, setSwapable, swipematch, auth: true }}
              />
            )}
            {!token && recents && (
              <BannerProfilev2
                {...{ swapable, setSwapable, swipematch: recents, auth: false }}
              />
            )}
            {!swapable && <GoPremiumCard />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
