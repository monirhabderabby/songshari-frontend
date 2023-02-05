import React from "react";
import ServiceReviewCard from "../../../../Cards/card/ServiceReviewCard";

export const SingleServiceReviewsContainer = () => {
    const reviews = [1, 2, 3, 4, 5];

    return (
        <div>
            <h1 className="text-[#707276] text-[27px] leading-[48px] font-light font-Poppins mb-12">Reviews (36)</h1>
            <div>
                {reviews.map(review => (
                    <ServiceReviewCard key={review} {...{ review }} />
                ))}
            </div>
        </div>
    );
};
