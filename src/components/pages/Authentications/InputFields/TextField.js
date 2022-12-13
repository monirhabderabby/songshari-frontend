import React from "react";

export const TextField = ({ register, errors, icon, name, placeholder, id, requiredMessage }) => {
    return (
        <section>
            <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl">
                {icon}
                <input
                    {...register(name, {
                        required: {
                            value: true,
                            message: requiredMessage,
                        },
                    })}
                    type="text"
                    placeholder={placeholder}
                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                    id={id}
                />
            </div>
            <h1 className="text-left ml-2">
                {<span className="w-full text-left text-red-400 text-sm">{errors[name] && errors[name].message}</span>}
            </h1>
        </section>
    );
};
