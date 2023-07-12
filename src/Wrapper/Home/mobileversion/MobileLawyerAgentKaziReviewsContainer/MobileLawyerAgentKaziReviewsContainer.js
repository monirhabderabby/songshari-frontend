import React from "react";
import RecentReview from "../../../../components/shared/Components/LawyerAgentKaziService/Reviews/RecentReviews/RecentReview";
import ReviewsBelowThreeStar from "../../../../components/shared/Components/LawyerAgentKaziService/Reviews/ReviewBelowThreeStar/ReviewsBelowThreeStar";
import TopReviews from "../../../../components/shared/Components/LawyerAgentKaziService/Reviews/TopReviews/TopReviews";
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";
import { BottomNav } from "../BottomNav";

const MobileLawyerAgentKaziReviewsContainer = () => {
  return (
    <div>
      <MobileBackButton name={"Reviews"} />
      <div>
        {/* Recent review */}
        <RecentReview />

        {/* Top Review */}
        <TopReviews />

        {/* Review below 3 star */}
        <ReviewsBelowThreeStar />
      </div>
      <div className="h-20"></div>
      <BottomNav />
    </div>
  );
};

export default MobileLawyerAgentKaziReviewsContainer;
