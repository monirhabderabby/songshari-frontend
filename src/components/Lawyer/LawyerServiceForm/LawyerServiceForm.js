// Configuration
import React, { useEffect, useState } from "react";

// Third party package
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useCreateSingleServicesMutation } from "../../../Redux/features/Service/ServiceApi";
import { ServiceForm } from "../../shared/Components/LawyerAgentKaziService/ServiceForm";

const LawyerServiceForm = () => {
    const [daedline, setDeadline] = useState("");
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [tags, setTags] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [extraOfferDeadline, setExtraOfferDeadline] = useState("");
    const [customError, setCustomError] = useState("");
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    const [createSingleServices, { isSuccess }] = useCreateSingleServicesMutation();

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

        if (!checked) {
            setCustomError("Please check our service policy before submit");
            return;
        }

        // delete which already used
        delete data?.extraOfferTitle;
        delete data?.extraOfferPrice;

        // reset all
        createSingleServices(data);
    };

    useEffect(() => {
        if (isSuccess) {
            reset();
            navigate("/lawyerProfile/lawyerService");
        }
    }, [isSuccess, reset, navigate]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <div>
            <h1 className="my-10 md:my-20 text-center text-2xl md:text-3xl font-bold leading-8">
                Fill the Below form to add your own lawyer service
            </h1>
            <ServiceForm
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
                    checked,
                    setChecked,
                    name: "Lawyer",
                }}
            />
        </div>
    );
};

export default LawyerServiceForm;
