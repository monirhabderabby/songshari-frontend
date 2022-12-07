import React from "react";
import { useForm } from "react-hook-form";

export const ProfessionalDetails = ({ setPage }) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async data => {
        data.caseCompleted = parseInt(data.caseCompleted);
        // await setProfessionalDetails(data);
        await fetch("https://shanshari-temp.onrender.com/member/register/professionalDetail", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setPage(4);
                }
            });
    };

    return (
        <div className="w-full h-auto">
            <section className="col-span-1 md:col-span-2 lg:col-span-3 text-2xl text-[#2F3659] mb-8">
                <p>Professional Info</p>
                <hr className="w-1/2 mt-2 mx-auto" />
            </section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section className="md:w-full w-64 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
                    {/* ---------- Position ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("position", {
                                    required: {
                                        value: true,
                                        message: "position is required",
                                    },
                                })}
                                type="text"
                                placeholder="Position"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="position"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.position?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.position.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Duty ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("duty", {
                                    required: {
                                        value: true,
                                        message: "Duty is required",
                                    },
                                })}
                                type="text"
                                placeholder="Duty"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="duty"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.duty?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.duty.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Institute ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("institute", {
                                    required: {
                                        value: true,
                                        message: "Institute is required",
                                    },
                                })}
                                type="text"
                                placeholder="Institute"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="institute"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.institute?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.institute.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Special Achievement ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("specialAchievement", {
                                    required: {
                                        value: true,
                                        message: "Special Achievement is required",
                                    },
                                })}
                                type="text"
                                placeholder="Special Achievement"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="specialAchievement"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.specialAchievement?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.specialAchievement.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Case  Complete ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("serviceYearDuration", {
                                    required: {
                                        value: true,
                                        message: "Service Year Duration is required",
                                    },
                                })}
                                type="number"
                                placeholder="Service Year Duration"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="serviceYearDuration"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.serviceYearDuration?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.serviceYearDuration.message}</span>
                            )}
                        </h1>
                    </section>
                </section>
                <input
                    type="submit"
                    value="Submit"
                    className="border-2 cursor-pointer mt-3 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
                />
            </form>
        </div>
    );
};
