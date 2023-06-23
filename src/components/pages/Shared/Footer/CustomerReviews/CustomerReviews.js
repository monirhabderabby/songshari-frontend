// Configuration
import React, { useEffect } from "react";

// third party package
import { Rating } from "@mui/material";

// Components
import { BottomNav } from "../../../../../Wrapper/Home/mobileversion/BottomNav";
import VarientAnimation from "../../../../../assets/utilities/Animation/VarientAnimation";
import { MobileBackButton } from "../../../../shared/Components/MobileBackButton";
import CustomHeader from "../../../../shared/CustomHeader/CustomHeader";
import Footer from "../../../../shared/Footer/Footer";

const CustomerReviews = () => {
    const reviewsArray = [1, 2, 3, 4, 5, 6, 7, 8];
    // Scroll to top
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    return (
        <div>
            <div className="hidden lg:block">
                <CustomHeader title={"Customer Reviews"} />
            </div>
            <div className="lg:hidden">
                <MobileBackButton name={"Customer Reviews"} />
            </div>
            <div className="max-w-[1200px] mx-auto px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-5 my-12">
                {reviewsArray.map((review, i) => {
                    return (
                        <VarientAnimation direction={i % 2 === 0 ? "right" : "left"} delay={0.3}>
                            <div className="flex gap-x-[23px] ring-1 ring-pink-500 rounded p-2 md:p-4">
                                <img
                                    src={"https://www.gamespot.com/a/uploads/scale_landscape/1578/15789737/4001018-0.jpg"}
                                    className="w-[43px] h-[43px] rounded-full"
                                    alt="profile"
                                />
                                <div className="max-w-[600px]">
                                    <Rating name="reviewRating" value={3} readOnly className="mb-[22px]" />
                                    <p className="text-[#181818] text-[16px] font-normal font-Nunito">
                                        This was awesome. The journey was awesome. I just ordered this service and the rest of the things is being
                                        solved by my kazi. Best wishes for the kazi halim. Wish him to be the best kazi at shongshari.
                                    </p>

                                    <div className="mt-[22px] text-[14px] text-[#181818]">
                                        <h3 className=" font-bold font-Nunito">Rasel Uddin</h3>
                                        <p className="text-[#71717A] font-normal">March 14, 2022</p>
                                    </div>
                                </div>
                            </div>
                        </VarientAnimation>
                    );
                })}
            </div>

            <div className="hidden lg:block">
                <Footer />
            </div>
            <div className="lg:hidden">
                <div className="h-16"></div>
                <BottomNav />
            </div>
        </div>
    );
};

export default CustomerReviews;
