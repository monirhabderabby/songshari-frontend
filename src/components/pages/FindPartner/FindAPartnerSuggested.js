// configuration, ex: react-router
import React from "react";

// components
import { useGetRecentMembersQuery } from "../../../Redux/features/userInfo/withoutLoginApi";
import { UserCard } from "../Shared/userCard/UserCard";

export const FindAPartnerSuggested = () => {
    // varible declation
    // hook variables
    const { data, isSuccess, isLoading } = useGetRecentMembersQuery();
    // js variables
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="mt-[30px] max-w-[950px] mx-auto">
            <div className="grid grid-cols-3 gap-[30px]">
                {isSuccess &&
                    data.data.members?.map(profile => {
                        return <UserCard {...{ profile, isLoading }} />;
                    })}
                {isLoading &&
                    arr.map(k => {
                        return (
                            <div key={k} className="h-[400px] w-[300px] shadow-2xl rounded-[12px]">
                                <div className="h-[290px] w-full bg-gray-100"></div>
                                <div className="px-[15px] py-[15px] h-[110px] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-[12px]">
                                    <div className="flex items-center justify-start gap-x-5">
                                        <div className="w-[200px] h-[15px] bg-gray-200 animate-pulse"></div>
                                        <div className="h-[30px] w-[30px] bg-gray-200 rounded-full animate-pulse"></div>
                                    </div>
                                    <div className="w-[150px] h-[10px] mt-2 bg-gray-200 animate-pulse"></div>
                                    <div className="w-[100px] h-[10px] mt-2 bg-gray-200 animate-pulse"></div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
