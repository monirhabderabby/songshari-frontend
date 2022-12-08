import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useSetOthersDetailsMutation } from "../../Redux/features/userInfo/userApi";

export const OtherDetails = ({ setPage }) => {
    const [setOthersDetails, { data, isLoading }] = useSetOthersDetailsMutation();
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async data => {
        await setOthersDetails(data);
    };

    useEffect(() => {
        if (data) {
            toast.success("Successfully updated your profile");
            navigate("/");
        }
    }, [data, navigate]);

    return (
        <div className="w-full h-auto">
            <section className="col-span-1 md:col-span-2 lg:col-span-3 text-2xl text-[#2F3659] mb-4">
                <p>Other Info</p>
                <hr className="w-1/2 mt-2 mx-auto" />
            </section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section className="md:w-full w-64 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
                    {/* ---------- Do you smoke ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <select
                                {...register("doSmoke", {
                                    required: {
                                        value: true,
                                        message: "Answer is required",
                                    },
                                })}
                                type="text"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="doSmoke"
                            >
                                <option value="">Do you smoke?</option>
                                <option value="yes">Yes</option>
                                <option value="never">Never</option>
                                <option value="left smoking">Left Smoking</option>
                                <option value="occasional">Occasional</option>
                            </select>
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.doSmoke?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.doSmoke.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Do you drink ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <select
                                {...register("doDrink", {
                                    required: {
                                        value: true,
                                        message: "Answer is required",
                                    },
                                })}
                                type="text"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="doDrink"
                            >
                                <option value="">Do you drink?</option>
                                <option value="yes">Yes</option>
                                <option value="never">Never</option>
                                <option value="left drinking">Left Drinking</option>
                                <option value="occasional">Occasional</option>
                            </select>
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.doDrink?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.doDrink.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Do you have pet ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <select
                                {...register("havePet", {
                                    required: {
                                        value: true,
                                        message: "Answer is required",
                                    },
                                })}
                                type="text"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="havePet"
                            >
                                <option value="">Do you have pet?</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                                <option value="would like to have some">Would like to have some</option>
                                <option value="hate it">Hate it</option>
                            </select>
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.havePet?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.havePet.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Do you have tattos ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <select
                                {...register("haveTattos", {
                                    required: {
                                        value: true,
                                        message: "Answer is required",
                                    },
                                })}
                                type="text"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="haveTattos"
                            >
                                <option value="">Do you have tattos?</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                                <option value="would like to have some">Would like to have some</option>
                                <option value="hate it">Hate it</option>
                            </select>
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.haveTattos?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.haveTattos.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Do you have voluntary experience ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <select
                                {...register("haveVoluntaryExp", {
                                    required: {
                                        value: true,
                                        message: "Answer is required",
                                    },
                                })}
                                type="text"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="haveVoluntaryExp"
                            >
                                <option value="">Do you have voluntary experience?</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                                <option value="would like to have some">Would like to have some</option>
                                <option value="not interested in voluntaring">Not interested in volunteering</option>
                            </select>
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.haveVoluntaryExp?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.haveVoluntaryExp.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Did you travelled outside Bangladesh ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <select
                                {...register("travelledOutsideBangladesh", {
                                    required: {
                                        value: true,
                                        message: "Answer is required",
                                    },
                                })}
                                type="text"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="travelledOutsideBangladesh"
                            >
                                <option value="">Did you travelled outside Bangladesh?</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                                <option value="would like to have some">Would like to have some</option>
                                <option value="not interested in travelling">Not interested in travelling</option>
                            </select>
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.travelledOutsideBangladesh?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.travelledOutsideBangladesh.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Do you like Join Family ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <select
                                {...register("likeJoinFamily", {
                                    required: {
                                        value: true,
                                        message: "Answer is required",
                                    },
                                })}
                                type="text"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="likeJoinFamily"
                            >
                                <option value="">Do you like Join Family?</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                                <option value="I Wouldn\'t Mind">I Wouldn\'t Mind</option>
                            </select>
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.likeJoinFamily?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.likeJoinFamily.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Do you like Join children ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <select
                                {...register("likeJoinFamily", {
                                    required: {
                                        value: true,
                                        message: "Answer is required",
                                    },
                                })}
                                type="text"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="likeJoinFamily"
                            >
                                <option value="">Do you like children?</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="More Than 2">More Than 2</option>
                                <option value="I Don't Like Children">I Don't Like Children</option>
                            </select>
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.likeJoinFamily?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.likeJoinFamily.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Do you believe in God ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <select
                                {...register("believeInGod", {
                                    required: {
                                        value: true,
                                        message: "Answer is required",
                                    },
                                })}
                                type="text"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="believeInGod"
                            >
                                <option value="">Do you believe in God?</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                                <option value="I Don\'t Care">I Don\'t Care</option>
                            </select>
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.believeInGod?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.believeInGod.message}</span>
                            )}
                        </h1>
                    </section>
                </section>
                <div className="flex items-center w-full justify-center gap-x-[20px] mt-[20px]">
                    <button
                        className="border-2 cursor-pointer mt-3 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
                        onClick={() => setPage(4)}
                    >
                        Previous
                    </button>
                    <input
                        type="submit"
                        value={isLoading ? "Saving..." : "Submit"}
                        className="border-2 cursor-pointer mt-3 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
                    />
                </div>
            </form>
        </div>
    );
};
