// Configuration
import React from "react";
import { useParams } from "react-router";

// Third party package

//Components
import { useGetServiceByIdQuery } from "../../../../../Redux/features/Service/ServiceApi";
import { TBFaceError } from "../../../../ui/error/TBFaceError";
import { LineWaveLoader } from "../../../Cards/Loader/lineWaveLoader/LineWaveLoader";
import SingleServiceImagesContainer from "./ImagesContainer/SingleServiceImagesContainer";
import { MoreOfferCard } from "./moreOffer/MoreOfferCard";
import SingleServicePrizeReviewCard from "./SingleServicePrizeReviewCard/SingleServicePrizeReviewCard";
import { SingleServiceReviewsContainer } from "./SingleServiceReviewsContainer/SingleServiceReviewsContainer";

const SingleServicesContainer = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGetServiceByIdQuery(id);

  const { service } = data || {};
  const {
    _id,
    title,
    description,
    photos,
    recuirements,
    price,
    extraOffer,
    deadline,
    isActive,
  } = service || {};

  console.log(service);

  let content;
  if (isLoading) {
    content = <LineWaveLoader />;
  } else if (error) {
    content = <TBFaceError />;
  } else if (!isLoading && data) {
    content = (
      <>
        <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
          <div>
            <h1 className="text-[#32353B] text-xl lg:text-[42px] leading-6 lg:leading-[60px] font-medium lg:font-bold font-Poppins mb-16">
              {title}
            </h1>
            <div className="flex justify-between items-start">
              <div className="max-w-[819px]">
                <SingleServiceImagesContainer {...{ photos }} />
                <div>
                  <h1 className="text-2xl leading-[48px] font-bold font-Poppins mt-4 mb-4">
                    What you deliver with this Offer
                  </h1>
                  <p className="text-[#757575] text-xl leading-10 font-Poppins mb-8">
                    {description}
                  </p>
                  <h1 className="text-2xl leading-[48px] font-bold font-Poppins mt-4 mb-4">
                    Get more with Offer Add-ons
                  </h1>
                  <MoreOfferCard {...{ extraOffer }} />
                  <h1 className="text-2xl leading-[48px] font-bold font-Poppins mt-4 mb-4">
                    What do you need from the Buyer to get started?
                  </h1>
                  <p className="text-[#757575] text-xl leading-10 font-Poppins mb-20">
                    {recuirements}
                  </p>
                </div>
                {/* Reviews */}
                <SingleServiceReviewsContainer />
              </div>
              {/* Prize review details */}
              <SingleServicePrizeReviewCard
                {...{ price, deadline, _id, isActive }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  return content;
};

export default SingleServicesContainer;
