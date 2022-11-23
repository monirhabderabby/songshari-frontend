import React from "react";
import LawyerRecentReview from "./LawyerRecentReview";
import LawyerReviewBelowStar from "./LawyerReviewBelowStar";
import LawyerTopReview from "./LawyerTopReview";

const LawyerReview = () => {
  return (
    <section>
      <LawyerRecentReview />
      <LawyerTopReview />
      <LawyerReviewBelowStar />
    </section>
  );
};

export default LawyerReview;
