// configuration, ex: react-router
import React from "react";

// components
import { RegistrationRequestCard } from "../../../../Shared/Cards/Registration__Request__Card/RegistrationRequestCard";

export const RegistrationRequest = () => {
    // varible declation
    // js variables
    const demoArr = [1, 2, 3, 4];

    return (
        <div>
            {/* Registration Request */}
            <div>
                <h1 className="text-[#333333] text-[32px] leading-[44px] font-semibold font-Nunito">Registration Request</h1>
                <div className="mt-[24px] grid grid-cols-2 gap-x-[29px] gap-y-[40px]">
                    {demoArr.map(arr => (
                        <RegistrationRequestCard key={arr} />
                    ))}
                    <div className="col-span-2 flex justify-center">
                        <button className="w-[159px] h-[37px] mt-[20px] flex justify-center items-center bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white rounded-[4px]">
                            Load All Request
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
