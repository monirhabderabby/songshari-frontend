// Configuration
import React, { useEffect, useState } from "react";

// Third party package
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useCreateSingleServicesMutation } from "../../../../Redux/features/Service/ServiceApi";

// Components
import { ServiceForm } from "../../../shared/Components/LawyerAgentKaziService/ServiceForm";

const AgentServiceForm = ({ responsive }) => {
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

        if (data?.photos?.length === 0) {
            setCustomError("Please provide service photos to create a new service");
            return;
        }
        if (!data.description) {
            setCustomError("Please write your service description");
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
            responsive ? navigate("/mobileAgentServices") : navigate("/agentProfile/agentService");
        }
    }, [isSuccess, reset, navigate, responsive]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <div>
            <h1 className="my-10 md:my-20 text-center text-2xl md:text-3xl font-bold leading-8 hidden lg:block">
                Fill the Below form to add your own agent service
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
                    name: "Agent",
                }}
            />
        </div>
    );
};

export default AgentServiceForm;
