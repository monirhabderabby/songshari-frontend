// Configuration
import React from "react";

// Components
import { allReviewsData } from "../LawyerDummyData/LawyerReviewsDummyData";
import LawyerRecentReview from "./LawyerRecentReview/LawyerRecentReview";
import LawyerReviewBelowThreeStar from "./LawyerReviewBelowThreeStar/LawyerReviewBelowThreeStar";
import LawyerTopReview from "./LawyerTopReview/LawyerTopReview";

const LawyerReview = () => {
  const reviewsData = allReviewsData;
  const topReviews = reviewsData.filter((review) => review.rating > 3);
  const belowThreeStarReviews = reviewsData.filter(
    (review) => review.rating <= 3
  );
  return (
    <div>
      {/* Recent review */}
      <LawyerRecentReview {...{ reviewsData }} />

      {/* Top Review */}
      <LawyerTopReview {...{ topReviews }} />

      {/* Review below 3 star */}
      <LawyerReviewBelowThreeStar {...{ belowThreeStarReviews }} />
    </div>
  );
};

export default LawyerReview;
