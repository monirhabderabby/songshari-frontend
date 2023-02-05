import React from "react";

// Third party packages
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router";
import Error from "../../../../../ui/error/Error";
import { ServiceCategoryAndSubCategoryEdit } from "./ServiceCategoryAndSucCategoryEdit";
import { ServiceDescriptionFieldEdit } from "./ServiceDescriptionFieldEdit";
import { ServiceMoreDetailesFieldEdit } from "./ServiceMoreDetailesFieldEdit";
import { ServiceMoreOfferCreatingFieldEdit } from "./ServiceMoreOfferCreatingFieldEdit";
import { ServicePhotoUploadContainerEdit } from "./ServicePhotoUploadContainerEdit";
import { ServiceRequirementsFieldEdit } from "./ServiceRequirementsFieldEdit";
import { ServiceTagsEdit } from "./ServiceTagsEdit";
import { ServiceTitlePriceAndDeadlineEdit } from "./ServiceTitlePriceAndDeadlineEdit";

// components

export const ServiceEditForm = props => {
    const {
        onSubmit,
        register,
        handleSubmit,
        setDeadline,
        setCustomError,
        setCategory,
        setSubCategory,
        setTags,
        tags,
        setPhotos,
        photos,
        setExtraOfferDeadline,
        customError,
        name,
        title,
        price,
        description,
        recuirements,
        details,
        extraOffer,
        currentCategory,
        currentDeadline,
        currentSubCategory,
    } = props || {};

    const navigate = useNavigate();
    return (
        <form className="mb-52 max-w-4xl px-4 border mx-1 md:mx-2 lg:mx-auto bg-[#FFFFFF]" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between items-center mt-3 mb-5">
                <h2 className="text-2xl md:text-3xl text-[#32353B] leading-8">Edit Your {name} Service</h2>
                <MdCancel onClick={() => navigate(-1)} className="cursor-pointer text-3xl text-slate-600" />
            </div>

            <h3 className="text-lg md:text-xl leading-8 text-[#32353B]">
                Service: A packed service you can deliver for a fixed price in a set time frame.
            </h3>
            <hr className="bg-[#E9ECF2] mt-3 mb-6" />
            {/* Service Title, Price and Deadline */}
            <ServiceTitlePriceAndDeadlineEdit {...{ setDeadline, register, setCustomError, title, price, currentDeadline }} />
            <ServiceCategoryAndSubCategoryEdit {...{ setCategory, setSubCategory, currentCategory, currentSubCategory }} />
            <ServiceTagsEdit {...{ setTags, tags }} />
            <ServicePhotoUploadContainerEdit {...{ setPhotos, photos }} />
            <div className="w-full">
                <ServiceMoreDetailesFieldEdit {...{ register, details }} />
            </div>
            <ServiceDescriptionFieldEdit {...{ register, description }} />
            <ServiceMoreOfferCreatingFieldEdit {...{ register, setExtraOfferDeadline, extraOffer }} />
            <ServiceRequirementsFieldEdit {...{ register, recuirements }} />
            <div className="mb-4">{customError && <Error message={customError} />}</div>
            {/* Submit button */}
            <div className="w-full flex justify-end">
                <input
                    type="submit"
                    className="bg-[#E41272] text-white tracking-wider px-8 pt-4 pb-5 border border-[#3D66D7] rounded font-bold leading-4 mb-5 cursor-pointer mt-[92px]"
                    value={"Submit Offer"}
                />
            </div>
        </form>
    );
};
