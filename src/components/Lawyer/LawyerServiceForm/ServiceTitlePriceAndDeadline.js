// Configuration
import React from "react";
import Select from "react-select";

// components
import serviceDeliverTimeOptions from "../../shared/AutoSuggestion/Lawyer/serviceDeliverTimeOption";

export const ServiceTitlePriceAndDeadline = ({ setDeadline, register }) => {
    return (
        <>
            <div className="grid grid-cols-12 py-2 px-3 border border-[#707276] rounded">
                <input
                    type="text"
                    className="col-span-10 outline-none px-[15px] text-[#707276] text-[16px] font-sans font-normal"
                    {...register("title")}
                    placeholder="I can do"
                />
                <div className="col-span-2 flex items-center gap-3">
                    <label htmlFor="servicePrice">for</label>
                    <input
                        type="number"
                        name="servicePrice"
                        className="w-2/3 py-2 text-center rounded bg-[#F5F7FA] border border-[#98999C] "
                        {...register("price")}
                        id="firstPrice"
                    />
                </div>
            </div>
            <div className="flex items-center justify-between px-2 mt-3 mb-10">
                <p className="text-xs leading-[18px] text-[#98999C] ">e.g. I can do lawyer task for $60</p>
                <p className="text-sm leading-5">CUSTOMIZE PRICES</p>
            </div>
            <div className="mb-7">
                <label htmlFor="deliveryTime" className="text-xs font-bold leading-5 text-[#707276] ml-1 block uppercase mb-[3px]">
                    When will you deliver the Offer?
                </label>
                <Select
                    isClearable
                    name="deadline"
                    options={serviceDeliverTimeOptions}
                    onChange={selectedValue => setDeadline(selectedValue.value)}
                />
            </div>
        </>
    );
};
