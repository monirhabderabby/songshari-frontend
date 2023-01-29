// Configuration
import React from "react";

// Components
import { allReviewsData } from "../../../Lawyer/LawyerDummyData/LawyerReviewsDummyData";
import AgentRecentReview from "./AgentRecentReview/AgentRecentReview";
import AgentReviewBelowThreeStar from "./AgentReviewBelowThreeStar/AgentReviewBelowThreeStar";
import AgentTopReview from "./AgentTopReview/AgentTopReview";

const AgentReview = () => {
  const reviewsData = allReviewsData;
  const topReviews = reviewsData.filter((review) => review.rating > 3);
  const belowThreeStarReviews = reviewsData.filter(
    (review) => review.rating <= 3
  );
  return (
    <div>
      {/* Recent review */}
      <AgentRecentReview {...{ reviewsData }} />

      {/* Top Review */}
      <AgentTopReview {...{ topReviews }} />

      {/* Review below 3 star */}
      <AgentReviewBelowThreeStar {...{ belowThreeStarReviews }} />
    </div>
  );
};

export default AgentReview;
