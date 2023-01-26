// Configuration
import React from "react";

// Components
import { allReviewsData } from "../../../Lawyer/LawyerDummyData/LawyerReviewsDummyData";
import KaziRecentReview from "./kaziRecentReview/KaziRecentReview";
import KaziReviewBelowThreeStar from "./kaziReviewBelowThreeStart/KaziReviewBelowThreeStar";
import KaziTopReview from "./kaziTopReview/KaziTopReview";

const KaziReview = () => {
    const reviewsData = allReviewsData;
    const topReviews = reviewsData.filter(review => review.rating > 3);
    const belowThreeStarReviews = reviewsData.filter(review => review.rating <= 3);
    return (
        <div>
            {/* Recent review */}
            <KaziRecentReview {...{ reviewsData }} />

            {/* Top Review */}
            <KaziTopReview {...{ topReviews }} />

            {/* Review below 3 star */}
            <KaziReviewBelowThreeStar {...{ belowThreeStarReviews }} />
        </div>
    );
};

export default KaziReview;
