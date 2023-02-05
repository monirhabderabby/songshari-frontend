import React from "react";

export const ServiceMoreDetailesFieldEdit = ({ register, details }) => {
    return (
        <div className="w-full">
            <div className="mb-8 w-full">
                <label htmlFor="detailes" className="text-xs font-bold leading-5 text-[#707276] ml-1 block uppercase mb-[3px]">
                    Provide more details about your Offer
                </label>
                <textarea
                    name="detailes"
                    id="detailes"
                    defaultValue={details}
                    rows="5"
                    className="py-2 px-5 w-full rounded h-auto border border-[#C3C8D4]"
                    {...register("detailes")}
                ></textarea>
            </div>
        </div>
    );
};
