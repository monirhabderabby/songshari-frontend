// Configuration
import React from "react";
import { useParams } from "react-router";

// Third party package
import { TbCurrencyTaka } from "react-icons/tb";

//Components
import img from "../../../../../assets/images/AdminRuffImage/adminRuffImg.jpg";
import service1 from "../../../../../assets/images/LawyerProfileImg/lawyerService1.jpg";
import service2 from "../../../../../assets/images/LawyerProfileImg/lawyerService2.jpg";
import service3 from "../../../../../assets/images/LawyerProfileImg/lawyerService3.jpg";
import service4 from "../../../../../assets/images/LawyerProfileImg/lawyerService4.jpg";
import KaziSingleServiceImage from "./KaziSingleServiceImage";
import KaziSingleServicePrizeReviewDetails from "./KaziSingleServicePriceReviewDetailes";
import KaziSingleServiceReviewCard from "./KaziSingleServiceReviewCard";
import { useGetServiceByIdQuery } from "../../../../../Redux/features/Service/ServiceApi";

const KaziServiceDetailes = () => {
    const { id } = useParams();
    const {data, isLoading, error} = useGetServiceByIdQuery(id)
    console.log(data, isLoading, error);
    const serviceDetails = {
        photos: [service1, service2, service3, service4],
        name: "This Will Be Service Name",
        prize: 100,
        deliveryDay: 10,
        review: 88,
        offerDetails:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat corrupti asperiores, dolor facilis consequuntur totam amet vero, iusto quibusdam dolorem nobis ea veniam voluptate dolores architecto perspiciatis? Aperiam quisquam aut explicabo soluta, sit ab harum ex error pariatur, nemo expedita tenetur quod quasi neque vero nesciunt eos. Dolore, deleniti similique?",
        offerAddOn:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat corrupti asperiores, dolor facilis consequuntur totam amet vero, iusto quibusdam dolorem nobis ea veniam voluptate dolores architecto perspiciatis? Aperiam quisquam aut explicabo soluta, sit ab harum ex error pariatur, nemo expedita tenetur quod quasi neque vero nesciunt eos. Dolore, deleniti similique?",
        whatNeeded:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat corrupti asperiores, dolor facilis consequuntur totam amet vero, iusto quibusdam dolorem nobis ea veniam voluptate dolores architecto perspiciatis? Aperiam quisquam aut explicabo soluta, sit ab harum ex error pariatur, nemo expedita tenetur quod quasi neque vero nesciunt eos. Dolore, deleniti similique?",
        reviews: [
            {
                id: 1,
                reviewer: img,
                reviewText:
                    "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the changes.",
                rating: 4,
                reviewerName: "Kane Jones",
                date: "March 14, 2028",
            },
            {
                id: 2,
                reviewer: img,
                reviewText:
                    "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the changes.",
                rating: 3.5,
                reviewerName: "Kane Jones",
                date: "March 14, 2028",
            },
            {
                id: 3,
                reviewer: img,
                reviewText:
                    "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the changes.",
                rating: 3,
                reviewerName: "Kane Jones",
                date: "March 14, 2028",
            },
        ],
    };
    return (
        <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
            <div>
                <h1 className="text-[#32353B] text-[42px] leading-[60px] font-bold font-Poppins mb-16">
                    {data?.data?.service?.subCategory}
                </h1>
                <div className="flex justify-between items-start">
                    <div className="max-w-[819px]">
                        <KaziSingleServiceImage {...{ serviceDetails }} />
                        <div>
                            <h1 className="text-2xl leading-[48px] font-bold font-Poppins mt-4 mb-4">What you deliver with this Offer</h1>
                            <p className="text-[#757575] text-xl leading-10 font-Poppins mb-8">{data?.data?.service?.serviceDetails}</p>
                            <h1 className="text-2xl leading-[48px] font-bold font-Poppins mt-4 mb-4">Get more with Offer Add-ons</h1>
                            <p className="text-[#757575] text-xl leading-10 font-Poppins mb-12">{data?.data?.service?.addOnServiceDetail}</p>
                            <div className="w-[759px] ml-auto shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-lg bg-[linear-gradient(104.74deg,#E41272_28.77%,#630465_76.53%,#942DD9_76.53%)] py-5 px-8 flex justify-between items-center mb-8">
                                <div className="text-white">
                                    <p className="leading-[30px] font-semibold mb-1">{data?.data?.service?.addOnServiceDetail}</p>
                                    <p className="text-xs leading-[18px]">{data?.data?.service?.addOnServiceTime}</p>
                                </div>
                                <div>
                                    <button className="bg-white text-black py-2 px-3 rounded-lg flex justify-center items-center text-[28px] font-semibold leading-[28px]">
                                        +<TbCurrencyTaka />
                                        {data?.data?.service?.addOnServiceTime}
                                    </button>
                                </div>
                            </div>
                            <h1 className="text-2xl leading-[48px] font-bold font-Poppins mt-4 mb-4">
                                What do you need from the Buyer to get started?
                            </h1>
                            <p className="text-[#757575] text-xl leading-10 font-Poppins mb-20">{data?.data?.service?.requiredFromBuyer}</p>
                        </div>
                        {/* Reviews */}
                        <div>
                            <h1 className="text-[#707276] text-[27px] leading-[48px] font-light font-Poppins mb-12">
                                Reviews ({serviceDetails.reviews.length})
                            </h1>
                            <div>
                                {serviceDetails.reviews.map(review => (
                                    <KaziSingleServiceReviewCard key={review.id} {...{ review }} />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Prize review details */}
                    <KaziSingleServicePrizeReviewDetails {...{ serviceDetails }} />
                </div>
            </div>
        </div>
    );
};

export default KaziServiceDetailes;
