import React from "react";
import { useParams } from "react-router";
import { useAllReviewsByServiceIDQuery } from "../../../../../../Redux/features/Service/ServiceApi";
import { TBFaceError } from "../../../../../ui/error/TBFaceError";
import ServiceReviewCard from "../../../../Cards/card/ServiceReviewCard";
import { ReviewSkeleton } from "../../../../Cards/Loader/Reviews/ReviewSkeleton";

export const SingleServiceReviewsContainer = () => {
    const { id } = useParams();
    // Redux API
    const { data, isLoading, isError } = useAllReviewsByServiceIDQuery({
        serviceID: id,
    });

    const { reviews, count } = data || {};

    let content;
    if (isLoading) {
        content = <ReviewSkeleton />;
    } else if (!isLoading && isError) {
        content = <TBFaceError />;
    } else if (!isLoading && reviews?.length === 0) {
        content = <div className="mt-[20px]">No Reviews yet!</div>;
    } else if (!isLoading && reviews?.length > 0) {
        content = (
            <>
                {reviews.map(review => (
                    <ServiceReviewCard key={review} {...{ review }} />
                ))}
            </>
        );
    }
    return (
        <div className="pb-[100px]">
            <h1 className="text-[#707276] text-[27px] leading-[48px] font-light font-Poppins mb-12">Reviews ({count || 0})</h1>
            <div>{content}</div>
        </div>
    );
};
