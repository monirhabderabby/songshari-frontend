import React from "react";
import { useForm } from "react-hook-form";
import { useSetPhysicalDetailsMutation } from "../../Redux/features/userInfo/userApi";

export const ProfessionalDetails = ({ setPage }) => {
    const [setProfessionalDetails, { data, isLoading }] = useSetPhysicalDetailsMutation();
    const {
        register,
        formState: { errors },
        handleSubmit,
        // reset,
    } = useForm();

    const onSubmit = async data => {
        data.caseCompleted = parseInt(data.caseCompleted);
        // console.log(data);
        await setProfessionalDetails(data);
        setPage(4);
    };

    if (data) {
        console.log(data);
    }

    return (
        <div className="w-full h-auto">
            <h1 className="text-left text-[32px] my-[21px}]">Professional</h1>
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
                                {...register("caseCompleted", {
                                    required: {
                                        value: true,
                                        message: "Case Completed is required",
                                    },
                                })}
                                type="number"
                                placeholder="Case Completed"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="caseCompleted"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.caseCompleted?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.caseCompleted.message}</span>
                            )}
                        </h1>
                    </section>
                </section>
                <input
                    type="submit"
                    value={isLoading ? "Loading" : "Submit"}
                    className="border-2 cursor-pointer mt-3 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
                />
            </form>
        </div>
    );
};
