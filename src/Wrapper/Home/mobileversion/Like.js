import React from "react";
// import ChartBoard from '../../../components/SingleProfilesUser/chatboard/ChartBoard'
// import certificate from "../../../assets/images/certificate.jpg";
// import { TbMessageCircle2 } from "react-icons/tb";
import { BsCommand } from "react-icons/bs";

// import ChartBoardCSS from '../../../assets/css/chartBoard.module.css';
import { BottomNav } from "./BottomNav";
import { Link } from "react-router-dom";
import { useGetSuggestedUsersQuery } from "../../../Redux/features/AllRecentData/recentApi";
import MayLikeSingle from "./MayLikeSingle";

export const Like = () => {
  const { data } = useGetSuggestedUsersQuery();

  return (
    <div className="bg-[#F8F8FF]">
      <div className="mt-5 px-6 bg-white">
        <div className="grid grid-cols-3">
          <Link to="/setting">
            <i className="fa-solid fa-chevron-left ml-2 mt-3"></i>
          </Link>
          <h1 className="profile-tit text-center mt-2 mb-5">You May Like</h1>
          <div></div>
        </div>
      </div>
      {/* ----- You may like ----- */}
      <div className="mt-[20px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-y-8">
          {data?.suggestion.map((profile) => {
            return <MayLikeSingle key={profile._id} {...{ data: profile }} />;
          })}
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <BottomNav></BottomNav>
    </div>
  );
};
