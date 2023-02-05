import React from "react";

export const ServiceDescriptionFieldEdit = ({ register }) => {
    return (
        <>
            <div className="mb-8">
                <label htmlFor="description" className="text-xs font-bold leading-5 text-[#707276] ml-1 block uppercase mb-[3px]">
                    Provide a description for your Offer, optimized for search results
                </label>
                <textarea
                    name="description"
                    id="description"
                    rows="3"
                    className="py-2 px-5 w-full rounded border border-[#C3C8D4]"
                    {...register("description")}
                ></textarea>
            </div>
        </>
    );
};
