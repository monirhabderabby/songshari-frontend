import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TbFaceIdError } from "react-icons/tb";
import { useNavigate, useParams } from "react-router";
import { useGetServiceByIdQuery, useUpdateSingleServiceMutation } from "../../../../../Redux/features/Service/ServiceApi";
import { LineWaveLoader } from "../../../Cards/Loader/lineWaveLoader/LineWaveLoader";
import { ServiceEditForm } from "./Form/ServiceEditForm";

export const ServiceEdit = () => {
    const [daedline, setDeadline] = useState("");
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [tags, setTags] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [extraOfferDeadline, setExtraOfferDeadline] = useState("");
    const [customError, setCustomError] = useState("");

    const navigate = useNavigate();
    const { id } = useParams();
    const { data, isLoading, error } = useGetServiceByIdQuery(id);
    const [updateSingleService, { isSuccess: updateSuccess }] = useUpdateSingleServiceMutation();

    const { service } = data || {};

    const {
        title,
        price,
        description,
        recuirements,
        details,
        photos: currentPhotos,
        extraOffer,
        category: currentCategory,
        deadline: currentDeadline,
        subCategory: currentSubCategory,
        tags: currentTags,
        role,
    } = service || {};

    // user role
    const { role: currentRole } = role || {};

    // set CurrentPhotos as default
    useEffect(() => {
        setPhotos(currentPhotos);
    }, [currentPhotos]);

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        setCustomError("");
        data.price = Number(data.price);
        data.deadline = daedline || currentDeadline;
        data.category = category || currentCategory;
        data.subCategory = subCategory || currentSubCategory;
        data.tags = tags.length > 0 ? tags : currentTags;
        data.photos = photos;
        data.extraOffer = [
            {
                title: data?.extraOfferTitle,
                price: Number(data?.extraOfferPrice),
                deadLine: extraOfferDeadline,
            },
        ];

        // delete which already used
        delete data?.extraOfferTitle;
        delete data?.extraOfferPrice;

        // reset all
        updateSingleService({
            id: id,
            data: data,
        });
    };

    let redirectPath;

    if (currentRole.includes("lawyer")) {
        redirectPath = "/lawyerProfile/lawyerService";
    } else if (currentRole.includes("kazi")) {
        redirectPath = "/kaziProfile/kaziServices";
    } else if (currentRole.includes("agent")) {
        redirectPath = "/agentProfile/agentService";
    }

    useEffect(() => {
        if (updateSuccess) {
            navigate(redirectPath);
        }
    }, [updateSuccess, navigate, redirectPath]);

    let content;
    if (isLoading) {
        content = (
            <div className="h-[200px] w-full flex justify-center items-center">
                <LineWaveLoader />
            </div>
        );
    } else if (!isLoading && error) {
        content = content = (
            <div className="h-[100px] w-full flex justify-center items-center flex-col">
                <TbFaceIdError className="text-[45px] text-[#FF3366]" />
                <h3 className="text-[16px] text-gray-400 font-medium font-syne">SomeThing went wrong. Please try again later</h3>
            </div>
        );
    } else if (!isLoading && data) {
        content = (
            <ServiceEditForm
                {...{
                    register,
                    handleSubmit,
                    onSubmit,
                    setDeadline,
                    setCustomError,
                    setCategory,
                    setSubCategory,
                    subCategory,
                    category,
                    setTags,
                    tags,
                    setPhotos,
                    photos,
                    setExtraOfferDeadline,
                    customError,
                    title,
                    price,
                    description,
                    recuirements,
                    details,
                    extraOffer,
                    currentCategory,
                    currentDeadline,
                    currentSubCategory,
                }}
            />
        );
    }
    return <div>{content}</div>;
};
