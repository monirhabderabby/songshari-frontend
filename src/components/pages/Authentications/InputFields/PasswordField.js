import React from "react";

export const PasswordField = ({ register, errors, setCustomError, icon, type, placeHolder, id, name }) => {
    return (
        <section>
            <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
                {icon}
                <input
                    {...register(name, {
                        minLength: {
                            value: 8,
                            message: "password should be minimum 8 characters",
                        },
                        required: {
                            value: true,
                            message: "Password is Required",
                        },
                    })}
                    type={type}
                    placeholder={placeHolder}
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id={id}
                    onChange={() => setCustomError("")}
                />
            </div>
            <h1 className="text-left ml-2">
                {errors.password?.type === "required" && <span className="w-full text-left text-red-400 text-sm">{errors?.password.message}</span>}
                {errors.password?.type === "minLength" && <span className="w-full text-left text-red-400 text-sm">{errors?.password.message}</span>}
            </h1>
        </section>
    );
};
