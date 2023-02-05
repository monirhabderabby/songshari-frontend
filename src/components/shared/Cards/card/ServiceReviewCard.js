// Configuration
import React from "react";
import img from "../../../../assets/images/All Services/dealing.png";

// Third party packages
import { Rating } from "@mui/material";

const ServiceReviewCard = ({ review }) => {
    return (
        <div className="flex justify-start items-start gap-6 pb-8 mb-7 border-b border-[#F4F4F5]">
            <div className="w-[73px] h-[43px]">
                <img className="w-[43px] h-[43px] rounded-full" src={img} alt="" />
            </div>
            <div>
                <div className="flex items-center gap-1 mb-6">
                    <Rating name="reviewRating" value={3} precision={0.5} readOnly />
                </div>
                <div>
                    <p className="mb-6 text-[#18181B]">
                        You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make
                        the changes.
                    </p>
                    <h3 className="text-[#18181B] text-sm leading-[22px] font-bold mb-1">Kane Jones</h3>
                    <p className="text-[#71717A] text-sm leading-[22px]">March 14, 2028</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceReviewCard;
