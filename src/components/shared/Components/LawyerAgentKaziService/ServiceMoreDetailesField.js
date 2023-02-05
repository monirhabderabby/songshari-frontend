import React from "react";

export const ServiceMoreDetailesField = ({ register }) => {
    return (
        <>
            <div className="mb-8">
                <label htmlFor="detailes" className="text-xs font-bold leading-5 text-[#707276] ml-1 block uppercase mb-[3px]">
                    Provide more details about your Offer
                </label>
                <textarea
                    name="details"
                    id=""
                    rows="3"
                    className="py-2 px-5 w-full rounded border border-[#C3C8D4]"
                    {...register("details")}
                ></textarea>
            </div>
        </>
    );
};
