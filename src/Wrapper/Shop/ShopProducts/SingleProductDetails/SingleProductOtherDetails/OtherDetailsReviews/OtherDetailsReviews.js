// Configuration
import React from "react";
import { useGetAllReviewsByProductIDQuery } from "../../../../../../Redux/features/Shop/shopApi";
import { LineWaveLoader } from "../../../../../../components/shared/Cards/Loader/lineWaveLoader/LineWaveLoader";
import { ReviewCard } from "../../../../../../components/shared/Cards/Shop/ReviewCard";
import { ServerErrorMessage } from "../../../../../../components/ui/error/ServerErrorMessage";

// Third party packages

const OtherDetailsReviews = ({ product }) => {
    const { _id } = product || {};
    const { data, isLoading, isError } = useGetAllReviewsByProductIDQuery({
        productID: _id,
    });
    const { total, reviews } = data || {};
    let content;
    if (isLoading) {
        content = (
            <div className="w-full h-[200px] flex justify-center items-center">
                <LineWaveLoader />
            </div>
        );
    } else if (!isLoading && total === 0) {
        content = <div className="text-[18px] font-outfit text-gray-400">No Reviews Found</div>;
    } else if (!isLoading && isError) {
        content = (
            <div className="w-full h-[200px] flex justify-center items-center">
                <ServerErrorMessage />
            </div>
        );
    } else if (!isLoading && total > 0) {
        content = (
            <div>
                {reviews?.map(review => (
                    <ReviewCard key={review?._id} review={review} />
                ))}
            </div>
        );
    }
    return <div className="mt-12">{content}</div>;
};

export default OtherDetailsReviews;
