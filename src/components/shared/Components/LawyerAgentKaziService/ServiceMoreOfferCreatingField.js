// Configuration
import React from "react";

// Third party packages
import Select from "react-select";

// Components
import serviceDeliverTimeOptions from "../../AutoSuggestion/Lawyer/serviceDeliverTimeOption";

export const ServiceMoreOfferCreatingField = ({ register, setExtraOfferDeadline }) => {
    return (
        <>
            <div className="mb-20">
                <label htmlFor="addOnServiceDetail" className="text-xs font-bold leading-5 text-[#707276] ml-1 block uppercase mb-[3px]">
                    EARN EXTRA MONEY - OFFER OPTIONAL ADD-ON SERVICES TO THE BUYER
                </label>
                <div className="grid grid-cols-12 py-2 px-3 border border-[#C3C8D4] rounded">
                    <input
                        type="text"
                        name="extraOfferTitle"
                        className="col-span-7 outline-none"
                        {...register("extraOfferTitle")}
                        placeholder="I can"
                    />
                    <div className="col-span-2 flex items-center gap-3">
                        <label htmlFor="extraOfferTitle">for</label>
                        <input
                            type="number"
                            name="extraOfferPrice"
                            className="w-2/3 py-2 text-center rounded bg-[#F5F7FA] border border-[#98999C] "
                            {...register("extraOfferPrice")}
                            id=""
                        />
                    </div>
                    <div className="col-span-3 flex items-center gap-3">
                        <label htmlFor="extraOfferDeadline">in</label>
                        <Select
                            isClearable
                            name="deadline"
                            placeholder="Time..."
                            className="w-full"
                            options={serviceDeliverTimeOptions}
                            onChange={selectedValue => setExtraOfferDeadline(selectedValue.value)}
                        />
                    </div>
                </div>
                {/* <p className="text-sm text-right leading-5 text-[#E41272] cursor-pointer mt-1">+ Add more items</p> */}
            </div>
        </>
    );
};
