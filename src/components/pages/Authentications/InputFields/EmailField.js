import React from "react";

export const EmailField = ({ register, errors, icon, name, placeholder, id, emailHandler }) => {
    return (
        <section>
            <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
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
                    type="email"
                    placeholder={placeholder}
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id={id}
                    onChange={emailHandler}
                />
            </div>
            <h1 className="text-left ml-2">
                {errors.email?.type === "required" && <span className="w-full text-left text-red-400 text-sm">{errors[name].message}</span>}
                {errors.email?.type === "pattern" && <span className="w-full text-left text-red-400 text-sm">{errors[name].message}</span>}
            </h1>
        </section>
    );
};
