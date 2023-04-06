import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useCreateCourseReviewMutation } from "../../../../../Redux/features/Course/courseApi";
import { useCreateProductReviewMutation } from "../../../../../Redux/features/Shop/shopApi";
import Error from "../../../../ui/error/Error";

export const CourseSendForm = () => {
    const [previousPath, setPreviousPath] = useState(null);
    const [customError, setCustomError] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(null);
    const { id } = useParams();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.from) {
            console.log(location);
            setPreviousPath(location.state.from.pathname);
        }
    }, [location]);

    const [createCourseReview, { isSuccess, isLoading }] = useCreateCourseReviewMutation();
    const [createProductReview, { isSuccess: productReviewSucces, isLoading: productReviewLoading }] = useCreateProductReviewMutation();

    const handleSubmit = e => {
        setCustomError("");
        e.preventDefault();
        const data = {
            course: id,
            review: reviewText,
            rating: rating,
        };

        // Where review will make based on condition
        // Two type of review -> Course Review -> Shop Product Review
        if (!previousPath) {
            setCustomError("Something went wring. Please contact with us");
            return;
        } else if (previousPath?.includes("/my-orders/my-courses")) {
            createCourseReview(data);
        } else if (previousPath?.includes("/my-orders/orderStatus")) {
            // here will goes the product review
            createProductReview(data);
            return;
        }
    };

    useEffect(() => {
        if (previousPath?.includes("/my-orders/my-courses") && isSuccess) {
            navigate("/my-orders/my-courses");
        } else if (previousPath?.includes("/my-orders/orderStatus") && productReviewSucces) {
            navigate("/my-orders/orderStatus");
        }
    }, [isSuccess, navigate, previousPath, productReviewSucces]);
    return (
        <div>
            <div className="px-[30px] py-[20px]">
                <h3 className="text-[20px] lg:text-[24px] font-Inter font-medium">How was your experiance?</h3>
                <Rating
                    name="size-small"
                    value={rating || 2}
                    onChange={(event, value) => {
                        event.preventDefault();
                        setCustomError("");
                        setRating(value);
                    }}
                    size="large"
                />
            </div>
            <form onSubmit={e => handleSubmit(e)}>
                <textarea
                    name="reviewText"
                    id="reviewText"
                    className="bg-slate-100 w-full outline-none p-[20px] text-gray-500 font-fira"
                    cols="30"
                    rows="10"
                    placeholder="Describe your experience here.."
                    onChange={e => {
                        setReviewText(e.target.value);
                        setCustomError("");
                    }}
                    onKeyDown={e => {
                        if (e.keyCode === 13 && !e.shiftKey) {
                            handleSubmit(e);
                        }
                    }}
                ></textarea>
                {customError && <Error message={customError} />}
                <input
                    type="submit"
                    value={isLoading || productReviewLoading ? "Sending..." : "Send Review"}
                    className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white px-3 cursor-pointer py-2 w-full flex justify-center items-center mt-[20px] font-outfit font-medium"
                    disabled={isLoading || productReviewLoading}
                />
            </form>
        </div>
    );
};
