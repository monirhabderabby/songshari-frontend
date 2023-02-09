// Configuration
import React from "react";
import { useParams } from "react-router";
import { useGetServiceByIdQuery } from "../../../../Redux/features/Service/ServiceApi";

// Third party package

//Components
import { LineWaveLoader } from "../../../shared/Cards/Loader/lineWaveLoader/LineWaveLoader";
import SingleServiceImagesContainer from "../../../shared/Components/LawyerAgentKaziService/SingleServices/ImagesContainer/SingleServiceImagesContainer";
import { MoreOfferCard } from "../../../shared/Components/LawyerAgentKaziService/SingleServices/moreOffer/MoreOfferCard";
import { SingleServiceReviewsContainer } from "../../../shared/Components/LawyerAgentKaziService/SingleServices/SingleServiceReviewsContainer/SingleServiceReviewsContainer";
import { TBFaceError } from "../../../ui/error/TBFaceError";
import { DynamicSingleServiceOrderCard } from "./DynamicSingleServiceOrderCard";

const DynamicSingleServiceDetailes = () => {
    const { id } = useParams();

    const { data, isLoading, error } = useGetServiceByIdQuery(id);

    const { service } = data || {};
    const { _id, title, description, photos, recuirements, extraOffer, price, deadline, role } = service || {};

    let content;
    if (isLoading) {
        content = <LineWaveLoader />;
    } else if (error) {
        content = <TBFaceError />;
    } else if (!isLoading && data) {
        content = (
            <>
                <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto mt-[25px]">
                    <div>
                        <h1 className="text-[#32353B] text-[42px] leading-[60px] font-bold font-Poppins mb-8">{title}</h1>
                        <div className="flex justify-between items-start">
                            <div className="max-w-[819px]">
                                <SingleServiceImagesContainer {...{ photos }} />
                                <div>
                                    <h1 className="text-2xl leading-[48px] font-bold font-Poppins mt-4 mb-4">What you deliver with this Offer</h1>
                                    <p className="text-[#757575] text-xl leading-10 font-Poppins mb-8">{description}</p>
                                    <h1 className="text-2xl leading-[48px] font-bold font-Poppins mt-4 mb-4">Get more with Offer Add-ons</h1>
                                    <MoreOfferCard {...{ extraOffer }} />
                                    <h1 className="text-2xl leading-[48px] font-bold font-Poppins mt-4 mb-4">
                                        What do you need from the Buyer to get started?
                                    </h1>
                                    <p className="text-[#757575] text-xl leading-10 font-Poppins mb-20">{recuirements}</p>
                                </div>
                                {/* Reviews */}
                                <SingleServiceReviewsContainer />
                            </div>
                            {/* Prize review details */}
                            <DynamicSingleServiceOrderCard {...{ price, deadline, role, _id }} />
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return content;
};

export default DynamicSingleServiceDetailes;
