import React from "react";
import { useGetDefaultPortionAccessQuery } from "../../../../Redux/features/userInfo/userApi";
import { PortionSwitch } from "../../../shared/Components/PortionSwitch/PortionSwitch";

export const AccountSwitchs = () => {
    //Redux Api
    const { data, isLoading, isError } = useGetDefaultPortionAccessQuery();

    const { profile } = data || {};
    const { mattrimonyAccess, lawyerAccess, agentAccess, kaziAccess, shopAccess, courseAccess } = profile || {};

    console.log(data);
    let content;
    if (isLoading) {
        return;
    } else if (!isLoading && isError) {
        content = <p>Something is wrong</p>;
    } else if (!isLoading && profile) {
        content = (
            <div className="grid grid-cols-2 gap-[25px] lg:w-1/2">
                <PortionSwitch portion="Matrimony" isAccess={mattrimonyAccess} />
                <PortionSwitch portion="Lawyer" isAccess={lawyerAccess} />
                <PortionSwitch portion="Agent" isAccess={agentAccess} />
                <PortionSwitch portion="Kazi" isAccess={kaziAccess} />
                <PortionSwitch portion="Shop" isAccess={shopAccess} />
                <PortionSwitch portion="Course" isAccess={courseAccess} />
            </div>
        );
    }

    return (
        <>
            <div className="border-b-[1px] border-[#eaeaea] w-full lg:w-1/2 pb-2">
                <h1 className="text-[24px] text-gray-500">All Portion</h1>
                <p className="text-[12px]  text-gray-400">
                    Unlock the full potential of our platform with the seamless access switch. With just a simple flick, you gain instant entry to all
                    the diverse sections and features we offer.
                </p>
            </div>
            {content}
        </>
    );
};
