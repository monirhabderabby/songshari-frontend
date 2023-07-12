import React from "react";

// Third party packages
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router";
import Error from "../../../ui/error/Error";
import { ServiceCategoryAndSubCategory } from "./ServiceCategoryAndSubCategory";
import { ServiceCheckBox } from "./ServiceCheckBox";
import { ServiceDescriptionField } from "./ServiceDescriptionField";
import { ServiceMoreDetailesField } from "./ServiceMoreDetailesField";
import { ServiceMoreOfferCreatingField } from "./ServiceMoreOfferCreatingField";
import { ServicePhotoUploadContainer } from "./ServicePhotoUploadContainer";
import { ServiceRequirementsField } from "./ServiceRequirementsField";
import { ServiceTags } from "./ServiceTags";
import { ServiceTitlePriceAndDeadline } from "./ServiceTitlePriceAndDeadline";

// components

export const ServiceForm = props => {
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
        checked,
        setChecked,
        name,
    } = props || {};
    const navigate = useNavigate();
    return (
        <form className="mb-52 max-w-4xl px-4 border mx-1 md:mx-2 lg:mx-auto bg-[#FFFFFF]" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between items-center mt-3 mb-5">
                <h2 className="text-2xl md:text-3xl text-[#32353B] leading-8">Add Your {name} Service</h2>
                <MdCancel onClick={() => navigate(-1)} className="cursor-pointer text-3xl text-slate-600" />
            </div>

            <h3 className="text-lg md:text-xl leading-8 text-[#32353B]">
                Service: A packed service you can deliver for a fixed price in a set time frame.
            </h3>
            <hr className="bg-[#E9ECF2] mt-3 mb-6" />
            {/* Service Title, Price and Deadline */}
            <ServiceTitlePriceAndDeadline {...{ setDeadline, register, setCustomError }} />
            <ServiceCategoryAndSubCategory {...{ setCategory, setSubCategory }} />
            <ServiceTags {...{ setTags, tags }} />
            <ServicePhotoUploadContainer {...{ setPhotos, photos }} />
            <ServiceMoreDetailesField {...{ register }} />
            <ServiceDescriptionField {...{ register }} />
            <ServiceMoreOfferCreatingField {...{ register, setExtraOfferDeadline }} />
            <ServiceRequirementsField {...{ register }} />
            <div className="mb-4">{customError && <Error message={customError} />}</div>
            <ServiceCheckBox {...{ checked, setChecked, setCustomError }} />
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
