import { Rating } from "@mui/material";
import React from "react";

export const CourseSendForm = () => {
    return (
        <div>
            <div className="px-[30px] py-[20px]">
                <h3 className="text-[20px] lg:text-[24px] font-Inter font-medium">How was your experiance?</h3>
                <Rating name="size-small" defaultValue={2} size="large" />
            </div>
            <form>
                <textarea
                    name="reviewText"
                    id="reviewText"
                    className="bg-slate-100 w-full outline-none p-[20px] text-gray-500 font-fira"
                    cols="30"
                    rows="10"
                    placeholder="Describe your experience here.."
                ></textarea>
                <input
                    type="submit"
                    value="Send Review"
                    className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white px-3 py-2 w-full flex justify-center items-center mt-[20px] font-outfit font-medium"
                />
            </form>
        </div>
    );
};
