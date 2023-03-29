import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useCreateCourseReviewMutation } from "../../../../../Redux/features/Course/courseApi";

export const CourseSendForm = () => {
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(null);
    const { id } = useParams();

    const navigate = useNavigate();

    const [createCourseReview, { isSuccess, isLoading }] = useCreateCourseReviewMutation();

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            course: id,
            review: reviewText,
            rating: rating,
        };
        createCourseReview(data);
    };

    useEffect(() => {
        if (isSuccess) {
            navigate("/my-orders/my-courses");
        }
    }, [isSuccess, navigate]);
    return (
        <div>
            <div className="px-[30px] py-[20px]">
                <h3 className="text-[20px] lg:text-[24px] font-Inter font-medium">How was your experiance?</h3>
                <Rating
                    name="size-small"
                    value={rating || 2}
                    onChange={(event, value) => {
                        event.preventDefault();
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
                    onChange={e => setReviewText(e.target.value)}
                    onKeyDown={e => {
                        if (e.keyCode === 13 && !e.shiftKey) {
                            handleSubmit(e);
                        }
                    }}
                ></textarea>
                <input
                    type="submit"
                    value={isLoading ? "Sending..." : "Send Review"}
                    className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white px-3 cursor-pointer py-2 w-full flex justify-center items-center mt-[20px] font-outfit font-medium"
                />
            </form>
        </div>
    );
};
