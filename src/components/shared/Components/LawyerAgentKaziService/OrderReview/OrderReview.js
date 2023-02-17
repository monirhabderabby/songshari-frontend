import React, { useEffect, useState } from "react";

// Third party packages
import { TextareaAutosize } from "@mui/base";
import Rating from "@mui/material/Rating";
import { MdReviews } from "react-icons/md";

// components
import { useMarkAsCompleteMutation } from "../../../../../Redux/features/Service/OrderApi";
import { Modal } from "../../../../modals/Modal";
import Error from "../../../../ui/error/Error";

export const OrderReview = ({ modalControll, orderID, setAcceptSuccess }) => {
    const [customError, setCustomError] = useState("");
    const [rate, setRate] = useState(3);
    const [review, setReview] = useState("");

    // Redux API
    const [markAsComplete, { isSuccess, isLoading }] = useMarkAsCompleteMutation();

    console.log(orderID);

    // function declaration
    const handleOrderComplete = () => {
        if (review === "") {
            setCustomError("Please write something about the order");
            return;
        }

        const data = {
            rating: rate,
            review: review,
        };
        markAsComplete({
            id: orderID,
            data: data,
        });
    };

    useEffect(() => {
        if (isSuccess) {
            setAcceptSuccess(true);
            modalControll();
        }
    }, [isSuccess, modalControll, setAcceptSuccess]);
    return (
        <Modal modalControll={modalControll}>
            <div className="w-full flex flex-col justify-center items-center gap-y-[12px]">
                <div className="bg-[#FFDFF4] p-3 rounded-full">
                    <MdReviews className="text-[32px] text-[#E41272]" />
                </div>
                <h2 className="text-[30px] font-bold text-black font-Nunito">Add a Review</h2>
                <Rating
                    name="simple-controlled"
                    value={rate}
                    onChange={(event, newValue) => {
                        // new value
                        setRate(newValue);
                    }}
                />
                <TextareaAutosize
                    className="w-full border-[1px] border-[#D3D3D3] outline-none rounded-[4px] px-[10px] py-[8px] text-[16px] font-normal font-Nunito"
                    minRows={6}
                    value={review}
                    onChange={e => {
                        setReview(e.target.value);
                        setCustomError("");
                    }}
                />
                {customError && <Error message={customError} />}
                <button
                    className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white px-[1.5rem] py-[0.5rem] rounded-[4px] font-Inter mt-[20px]"
                    onClick={handleOrderComplete}
                    disabled={isLoading}
                >
                    {isLoading ? "Wait..." : "Complete"}
                </button>
            </div>
        </Modal>
    );
};
