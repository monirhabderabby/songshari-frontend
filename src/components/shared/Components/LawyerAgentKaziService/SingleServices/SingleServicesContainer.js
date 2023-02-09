// Configuration
import React, { useState } from "react";
import { useParams } from "react-router";

// Third party package
import { Modal } from "antd";

//Components
import { useGetServiceByIdQuery } from "../../../../../Redux/features/Service/ServiceApi";
import { TBFaceError } from "../../../../ui/error/TBFaceError";
import { LineWaveLoader } from "../../../Cards/Loader/lineWaveLoader/LineWaveLoader";
import SingleServiceImagesContainer from "./ImagesContainer/SingleServiceImagesContainer";
import { MoreOfferCard } from "./moreOffer/MoreOfferCard";
import SingleServicePrizeReviewCard from "./SingleServicePrizeReviewCard/SingleServicePrizeReviewCard";
import { SingleServiceReviewsContainer } from "./SingleServiceReviewsContainer/SingleServiceReviewsContainer";

const SingleServicesContainer = ({ responsive }) => {
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

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

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
            <h1 className="text-[#32353B] text-xl lg:text-[42px] leading-6 lg:leading-[60px] font-medium lg:font-bold font-Poppins mb-5 lg:mb-16">
              {title}
            </h1>

            <div className="flex justify-between items-start">
              <div className="max-w-[327px] lg:max-w-[819px]">
                <SingleServiceImagesContainer {...{ photos }} />
                <div>
                  <h1 className="text-lg lg:text-2xl leading-8 lg:leading-[48px] font-semibold lg:font-bold font-Poppins mt-4 mb-1 lg:mb-4">
                    What you deliver with this Offer
                  </h1>
                  <p className="text-[#757575] text-base lg:text-xl leading-5 lg:leading-10 font-Poppins mb-4 lg:mb-8">
                    {description}
                  </p>
                  <h1 className="text-lg lg:text-2xl leading-8 lg:leading-[48px] font-semibold lg:font-bold font-Poppins mt-4 mb-1 lg:mb-4">
                    Get more with Offer Add-ons
                  </h1>
                  <MoreOfferCard {...{ extraOffer }} />
                  <h1 className="text-lg lg:text-2xl leading-6 lg:leading-[48px] font-semibold lg:font-bold font-Poppins mt-1 lg:mt-4 mb-1 lg:mb-4">
                    What do you need from the Buyer to get started?
                  </h1>
                  <p className="text-[#757575] text-base lg:text-xl leading-5 lg:leading-10 font-Poppins mb-3 lg:mb-20">
                    {recuirements}
                  </p>
                  <div className="lg:hidden">
                    <button
                      className="px-3 py-1 text-white text-lg md:text-xl font-semibold leading-8 rounded bg-[#E41272]"
                      onClick={showModal}
                    >
                      More Details
                    </button>
                  </div>
                </div>
                {/* Reviews */}
                <SingleServiceReviewsContainer />
              </div>
              {/* Prize review details */}
              <div className="hidden lg:block">
                <SingleServicePrizeReviewCard
                  {...{ price, deadline, _id, isActive }}
                />
              </div>

              {/* Modal for responsive device */}
              <Modal
                title={null}
                closable={false}
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
              >
                <SingleServicePrizeReviewCard
                  {...{ price, deadline, _id, isActive, responsive }}
                />
              </Modal>
            </div>
          </div>
        </div>
      </>
    );
  }

  return content;
};

export default SingleServicesContainer;
