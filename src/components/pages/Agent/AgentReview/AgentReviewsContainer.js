// Configuration
import React from "react";

// Components
import { allReviewsData } from "../../../Lawyer/LawyerDummyData/LawyerReviewsDummyData";
import RecentReview from "../../../shared/Components/LawyerAgentKaziService/Reviews/RecentReviews/RecentReview";
import TopReviews from "../../../shared/Components/LawyerAgentKaziService/Reviews/TopReviews/TopReviews";
import AgentReviewBelowThreeStar from "./AgentReviewBelowThreeStar/AgentReviewBelowThreeStar";

const AgentReviewsContainer = () => {
    const reviewsData = allReviewsData;
    const belowThreeStarReviews = reviewsData.filter(review => review.rating <= 3);
    return (
        <div>
            {/* Recent review */}
            <RecentReview />

            {/* Top Review */}
            <TopReviews />

            {/* Review below 3 star */}
            <AgentReviewBelowThreeStar {...{ belowThreeStarReviews }} />
        </div>
    );
};

export default AgentReviewsContainer;
