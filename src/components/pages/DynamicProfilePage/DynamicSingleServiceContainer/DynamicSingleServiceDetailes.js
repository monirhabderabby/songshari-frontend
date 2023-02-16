// Configuration
import { Modal } from "antd";
import React, { useState } from "react";
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

    const [orderNowModalVisible, setOrderNowModalVisible] = useState(false);

    const showOrderNowModal = () => {
        setOrderNowModalVisible(true);
    };

    const handleOrderNowModalCancel = () => {
        setOrderNowModalVisible(false);
    };

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
                        <h1 className="text-[#32353B] text-xl md:text-2xl lg:text-[42px] leading-6 lg:leading-[60px] font-medium md:font-semibold lg:font-bold font-Poppins mb-5 lg:mb-8">
                            {title}
                        </h1>
                        <div className="flex justify-between items-start">
                            <div className="max-w-[327px] md:max-w-[819px]">
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
                                    <h1 className="text-lg lg:text-2xl leading-8 lg:leading-[48px] font-semibold lg:font-bold font-Poppins mt-4 mb-1 lg:mb-4">
                                        What do you need from the Buyer to get started?
                                    </h1>
                                    <p className="text-[#757575] text-base lg:text-xl leading-5 lg:leading-10 font-Poppins mb-3 lg:mb-20">
                                        {recuirements}
                                    </p>
                                    <div className="lg:hidden">
                                        <button
                                            className="px-3 py-1 text-white text-lg md:text-xl font-semibold leading-8 rounded bg-[#E41272]"
                                            onClick={showOrderNowModal}
                                        >
                                            More Details
                                        </button>
                                    </div>
                                </div>
                                {/* Reviews */}
                                <SingleServiceReviewsContainer serviceID={id} />
                            </div>
                            {/* Prize review details */}
                            <div className="hidden lg:block">
                                <DynamicSingleServiceOrderCard {...{ price, deadline, role, _id }} />
                            </div>

                            {/* Modal for responsive device */}
                            <Modal
                                title={null}
                                closable={false}
                                open={orderNowModalVisible}
                                onCancel={handleOrderNowModalCancel}
                                footer={null}
                                width={370}
                            >
                                <DynamicSingleServiceOrderCard {...{ price, deadline, role, _id }} />
                            </Modal>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return content;
};

export default DynamicSingleServiceDetailes;
