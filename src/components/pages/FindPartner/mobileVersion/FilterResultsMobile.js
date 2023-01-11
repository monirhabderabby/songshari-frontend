import React, { useEffect } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { MdOutlineFilterHdr } from "react-icons/md";
import { useSelector } from "react-redux";
import { useFindFilteredUserByAdminMutation } from "../../../../Redux/features/userInfo/userApi";
import { MobilePartnerLoader } from "./Loader/MobilePartnerLoader";
import { MobilePartnerCard } from "./MobilePartnerCard";

export const FilterResultsMobile = () => {
    // hook variable declareation
    const filterObject = useSelector(state => state?.persistedReducer?.filter?.filterObject);

    const [findFilteredUserByAdmin, { data, isLoading, error }] = useFindFilteredUserByAdminMutation();

    useEffect(() => {
        findFilteredUserByAdmin(filterObject);
    }, [filterObject, findFilteredUserByAdmin]);

    // js variable declaration
    let content;
    const loaderArray = [1, 2, 3, 4, 5, 6];

    if (error) console.log(error);

    if (isLoading) {
        content = (
            <div className="mt-[18px] grid grid-cols-2 gap-y-[20px] w-full">
                {loaderArray.map(p => (
                    <MobilePartnerLoader key={p} />
                ))}
            </div>
        );
    } else if (!isLoading && error?.data?.message === "No user found") {
        content = (
            <div className="mt-[18px] w-full flex flex-col items-center">
                <MdOutlineFilterHdr className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[16px] font-Inter font-normal text-center text-gray-500">
                    Please change your filters or try different keywords!
                </p>
            </div>
        );
    } else if (!isLoading && error) {
        content = (
            <div className="mt-[18px] w-full flex flex-col items-center">
                <AiOutlineWarning className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">Server Error!</p>
            </div>
        );
    } else if (!isLoading && data?.data?.members?.length === 0) {
        content = (
            <div className="mt-[18px] w-full flex flex-col items-center">
                <MdOutlineFilterHdr className="text-[48px] text-gray-400" />
                <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">lease change your filters or try different keywords!</p>
            </div>
        );
    } else if (!isLoading && data?.data?.members?.length > 0) {
        content = (
            <div className="mt-[18px] grid grid-cols-2 gap-y-[20px] w-full">
                {data.data.members?.map(user => {
                    return <MobilePartnerCard {...{ user }} />;
                })}
            </div>
        );
    }

    return content;
};
