import React from "react";

export const TextField = ({ register, errors, icon, type, name, placeholder, id }) => {
    return (
        <section>
            <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl">
                {icon}
                <input
                    {...register(name, {
                        required: {
                            value: true,
                            message: "Email is required",
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: "Provide a Valid Email",
                        },
                    })}
                    type={type}
                    placeholder={placeholder}
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id={id}
                />
            </div>
            <h1 className="text-left ml-2">
                {errors.email?.type === "required" && <span className="w-full text-left text-red-400 text-sm">{errors?.email.message}</span>}
                {errors.email?.type === "pattern" && <span className="w-full text-left text-red-400 text-sm">{errors?.email.message}</span>}
            </h1>
        </section>
    );
};
