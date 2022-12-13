// configuration, ex: react-router
import React from "react";

// components
import { SendForReSubmitCard } from "../../../../Shared/Cards/Send__For__Resubmit__Card/SendForReSubmitCard";

export const SendForReSubmit = () => {
    // varible declation
    // js variables
    const demoArr = [1, 2, 3, 4];

    return (
        <div>
            {/* Send For Resubmit */}
            <div className="mt-[109px]">
                <h1 className="text-[#333333] text-[32px] leading-[44px] font-semibold font-Nunito">Send For Resubmit</h1>
                <div className="mt-[24px] grid grid-cols-2 gap-x-[29px] gap-y-[40px]">
                    {demoArr.slice(0, 2).map(arr => (
                        <SendForReSubmitCard key={arr} />
                    ))}
                    <div className="col-span-2 flex justify-center">
                        <button className="w-[111px] h-[37px] mt-[20px] flex justify-center items-center bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white rounded-[4px]">
                            Load All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
