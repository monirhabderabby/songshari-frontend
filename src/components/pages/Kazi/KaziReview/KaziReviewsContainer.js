// Configuration
import React from "react";

// Components
import { allReviewsData } from "../../../Lawyer/LawyerDummyData/LawyerReviewsDummyData";
import RecentReview from "../../../shared/Components/LawyerAgentKaziService/Reviews/RecentReviews/RecentReview";
import TopReviews from "../../../shared/Components/LawyerAgentKaziService/Reviews/TopReviews/TopReviews";
import KaziReviewBelowThreeStar from "./kaziReviewBelowThreeStart/KaziReviewBelowThreeStar";

const KaziReviewsContainer = () => {
    const reviewsData = allReviewsData;
    const belowThreeStarReviews = reviewsData.filter(review => review.rating <= 3);
    return (
        <div>
            {/* Recent review */}
            <RecentReview />

            {/* Top Review */}
            <TopReviews />

            {/* Review below 3 star */}
            <KaziReviewBelowThreeStar {...{ belowThreeStarReviews }} />
        </div>
    );
};

export default KaziReviewsContainer;
