// Configuration
import React from "react";

// Components
import { allReviewsData } from "../../../Lawyer/LawyerDummyData/LawyerReviewsDummyData";
import RecentReview from "../../../shared/Components/LawyerAgentKaziService/Reviews/RecentReviews/RecentReview";
import AgentReviewBelowThreeStar from "./AgentReviewBelowThreeStar/AgentReviewBelowThreeStar";
import AgentTopReview from "./AgentTopReview/AgentTopReview";

const AgentReviewsContainer = () => {
    const reviewsData = allReviewsData;
    const topReviews = reviewsData.filter(review => review.rating > 3);
    const belowThreeStarReviews = reviewsData.filter(review => review.rating <= 3);
    return (
        <div>
            {/* Recent review */}
            <RecentReview {...{ reviewsData }} />

            {/* Top Review */}
            <AgentTopReview {...{ topReviews }} />

            {/* Review below 3 star */}
            <AgentReviewBelowThreeStar {...{ belowThreeStarReviews }} />
        </div>
    );
};

export default AgentReviewsContainer;
