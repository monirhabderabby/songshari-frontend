import React from "react";

export const ServiceRequirementsFieldEdit = ({ register, recuirements }) => {
    return (
        <>
            <div className="mb-4">
                <label htmlFor="recuirements" className="text-xs font-bold leading-5 text-[#707276] ml-1 block uppercase mb-[3px]">
                    What do you need from the Buyer to get started?
                </label>
                <textarea
                    name="recuirements"
                    defaultValue={recuirements}
                    id="recuirements"
                    rows="5"
                    className="py-2 px-5 w-full rounded border border-[#C3C8D4]"
                    {...register("recuirements")}
                ></textarea>
            </div>
        </>
    );
};
