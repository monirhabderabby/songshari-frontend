import React from "react";
import { PortionSwitch } from "../../../shared/Components/PortionSwitch/PortionSwitch";

export const AccountSwitchs = () => {
    const portions = [
        {
            id: 1,
            portion: "Shop",
            isAccess: false,
        },
        {
            id: 2,
            portion: "Lawyer",
            isAccess: false,
        },
        {
            id: 3,
            portion: "Agent",
            isAccess: false,
        },
        {
            id: 4,
            portion: "Lawyer",
            isAccess: false,
        },
        {
            id: 5,
            portion: "Kazi",
            isAccess: false,
        },
    ];

    return (
        <>
            <div className="border-b-[1px] border-[#eaeaea] w-full lg:w-1/2 pb-2">
                <h1 className="text-[24px] text-gray-500">All Portion</h1>
                <p className="text-[12px]  text-gray-400">
                    Unlock the full potential of our platform with the seamless access switch. With just a simple flick, you gain instant entry to all
                    the diverse sections and features we offer.
                </p>
            </div>
            <div className="flex items-center flex-wrap gap-[25px]">
                {portions?.map(item => {
                    return <PortionSwitch key={item.id} {...{ item }} />;
                })}
            </div>
        </>
    );
};
