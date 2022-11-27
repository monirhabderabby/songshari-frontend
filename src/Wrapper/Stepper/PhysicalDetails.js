import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSetPhysicalDetailsMutation } from "../../Redux/features/userInfo/userApi";

export const PhysicalDetails = ({ setPage }) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [setPhysicalDetails, { data, isLoading }] = useSetPhysicalDetailsMutation();

    const onSubmit = async data => {
        data.caseCompleted = parseInt(data.caseCompleted);
        await setPhysicalDetails(data);
    };

    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data, setPage]);
    return (
        <div className="w-full h-auto">
            <section className="col-span-1 md:col-span-2 lg:col-span-3 text-2xl text-[#2F3659] mb-4">
                <p>Physical Information Form</p>
                <hr className="w-1/2 mt-2 mx-auto" />
            </section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section className="md:w-full w-64 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
                    {/* ---------- Height ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("height", {
                                    required: {
                                        value: true,
                                        message: "Height is required",
                                    },
                                })}
                                type="text"
                                placeholder="Height"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="height"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.height?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.height.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Weight ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("weight", {
                                    required: {
                                        value: true,
                                        message: "Weight is required",
                                    },
                                })}
                                type="text"
                                placeholder="Weight"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="weight"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.weight?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.weight.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Ancestry ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("ancestry", {
                                    required: {
                                        value: true,
                                        message: "Ancestry is required",
                                    },
                                })}
                                type="text"
                                placeholder="Ancestry"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="ancestry"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.ancestry?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.ancestry.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Skin Tone ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("SkinTone")}
                                type="text"
                                placeholder="Skin Tone"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="SkinTone"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.SkinTone?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.SkinTone.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Hair Color ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("hairColour")}
                                type="text"
                                placeholder="Hair Color"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="hairColour"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.hairColour?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.hairColour.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Hair Type ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("hairType")}
                                type="text"
                                placeholder="Hair Type"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="hairType"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.hairType?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.hairType.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Eye Color ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("eyeColor")}
                                type="text"
                                placeholder="Eye Color"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="eyeColor"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.eyeColor?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.eyeColor.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Number of Teeth ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("numberOfTeeth")}
                                type="number"
                                placeholder="Number of Teeth"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="numberOfTeeth"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.numberOfTeeth?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.numberOfTeeth.message}</span>
                            )}
                        </h1>
                    </section>
                </section>
                <input
                    type="submit"
                    value={isLoading ? "Saving..." : "Submit"}
                    className="border-2 cursor-pointer mt-3 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
                />
            </form>
        </div>
    );
};
