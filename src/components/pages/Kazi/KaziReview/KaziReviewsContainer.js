// Configuration
import React from "react";

// Components
import RecentReview from "../../../shared/Components/LawyerAgentKaziService/Reviews/RecentReviews/RecentReview";
import ReviewsBelowThreeStar from "../../../shared/Components/LawyerAgentKaziService/Reviews/ReviewBelowThreeStar/ReviewsBelowThreeStar";
import TopReviews from "../../../shared/Components/LawyerAgentKaziService/Reviews/TopReviews/TopReviews";

const KaziReviewsContainer = () => {
    return (
        <div>
            {/* Recent review */}
            <RecentReview />

            {/* Top Review */}
            <TopReviews />

            {/* Review below 3 star */}
            <ReviewsBelowThreeStar />
        </div>
    );
};

export default KaziReviewsContainer;
