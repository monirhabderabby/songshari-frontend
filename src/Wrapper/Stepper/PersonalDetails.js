import React from "react";
import { useForm } from "react-hook-form";

export const PersonalDetails = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div className="w-full h-auto">
            <form className="md:w-full w-64 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3" onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                        {/* <FaRegUser className=" m-2 text-gray-400" /> */}
                        <input
                            {...register("firstName", {
                                required: {
                                    value: true,
                                    message: "Last name is required",
                                },
                            })}
                            type="text"
                            placeholder="First name"
                            className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                            id="firstName"
                        />
                    </div>
                    <h1 className="text-left ml-2">
                        {errors.firstName?.type === "required" && (
                            <span className="w-full text-left text-red-400 text-sm">{errors?.firstName.message}</span>
                        )}
                    </h1>
                </section>
            </form>
        </div>
    );
};
