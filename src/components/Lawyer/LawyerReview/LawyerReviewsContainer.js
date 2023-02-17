// Configuration
import React from "react";
import RecentReview from "../../shared/Components/LawyerAgentKaziService/Reviews/RecentReviews/RecentReview";
import TopReviews from "../../shared/Components/LawyerAgentKaziService/Reviews/TopReviews/TopReviews";

// Components
import { allReviewsData } from "../LawyerDummyData/LawyerReviewsDummyData";
import LawyerReviewBelowThreeStar from "./LawyerReviewBelowThreeStar/LawyerReviewBelowThreeStar";

const LawyerReviewsContainer = () => {
    const reviewsData = allReviewsData;
    const belowThreeStarReviews = reviewsData.filter(review => review.rating <= 3);
    return (
        <div>
            {/* Recent review */}
            <RecentReview />

            {/* Top Review */}
            <TopReviews />

            {/* Review below 3 star */}
            <LawyerReviewBelowThreeStar {...{ belowThreeStarReviews }} />
        </div>
    );
};

export default LawyerReviewsContainer;
