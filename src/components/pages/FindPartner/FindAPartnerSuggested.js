import React from "react";
import { useGetRecentMembersQuery } from "../../../Redux/features/userInfo/withoutLoginApi";
import { UserCard } from "../Shared/userCard/UserCard";

export const FindAPartnerSuggested = () => {
    const { data, isSuccess, isLoading } = useGetRecentMembersQuery();

    if (isSuccess) {
        console.log(data);
    }
    return (
        <div className="mt-[30px] max-w-[950px] mx-auto">
            <div className="grid grid-cols-3 gap-[30px]">
                {isSuccess &&
                    data?.map(profile => {
                        return <UserCard {...{ profile }} />;
                    })}
                {isLoading && <UserCard {...{ isLoading }} />}
            </div>
        </div>
    );
};
