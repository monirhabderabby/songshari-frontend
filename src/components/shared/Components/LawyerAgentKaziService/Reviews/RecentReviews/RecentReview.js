// Configuration
import React from "react";
import { useGetRecentReviewQuery } from "../../../../../../Redux/features/Service/OrderApi";

// Components
import BestReviewsCard from "./BestReviewsCard";
import BestTwoReviewsCard from "./BestTwoReviewsCard";

const RecentReview = ({ reviewsData }) => {
    const bestReviews = reviewsData.filter(review => review.rating === 5);
    const topReviews = reviewsData.filter(review => review.rating >= 4);
    const { data, isLoading, isError } = useGetRecentReviewQuery();
    console.log(data);
    return (
        <div className="bg-[#FFE2EF]">
            <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto py-20 mb-24">
                <h1 className="leading-7 font-semibold text-[#E41272] font-Poppins text-center mb-6">You Average Rating Is 4.5 out of 5</h1>
                <h1 className="text-[52px] leading-[62px] font-semibold font-Poppins text-center mb-20">Recent Review</h1>
                {/* Best two reviews */}
                <div className="grid grid-cols-2 gap-8 mb-20">
                    {bestReviews.slice(0, 2).map(review => (
                        <BestTwoReviewsCard key={review.id} {...{ review }} />
                    ))}
                </div>
                {/* Best reviews */}
                <div className="grid grid-cols-3 gap-8 px-28">
                    {topReviews.slice(0, 6).map(review => (
                        <BestReviewsCard key={review.id} {...{ review }} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentReview;
