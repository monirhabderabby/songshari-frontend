import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { useGetServiceByIdQuery } from "../../../../../Redux/features/Service/ServiceApi";
import { ServiceEditForm } from "./Form/ServiceEditForm";

export const ServiceEdit = () => {
    const [daedline, setDeadline] = useState("");
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [tags, setTags] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [extraOfferDeadline, setExtraOfferDeadline] = useState("");
    const [customError, setCustomError] = useState("");
    const { id } = useParams();
    const { data, isLoading, error } = useGetServiceByIdQuery(id);

    const { service } = data || {};

    const { title, price, description, recuirements } = service || {};

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        setCustomError("");
        data.price = Number(data.price);
        data.deadline = daedline;
        data.category = category;
        data.subCategory = subCategory;
        data.tags = tags;
        data.photos = photos;
        data.extraOffer = [
            {
                title: data?.extraOfferTitle,
                price: Number(data?.extraOfferPrice),
                deadLine: extraOfferDeadline,
            },
        ];

        if (!data.title || !data.price) {
            setCustomError("Please provide a service title and price");
            return;
        }

        if (!daedline) {
            setCustomError("Please provide a service deadline");
            return;
        }

        // delete which already used
        delete data?.extraOfferTitle;
        delete data?.extraOfferPrice;

        // reset all
        console.log(data);
    };

    console.log(service);
    return (
        <div>
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
                }}
            />
        </div>
    );
};
