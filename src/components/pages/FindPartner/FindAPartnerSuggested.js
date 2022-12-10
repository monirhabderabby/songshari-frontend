import React from "react";
import { useGetRecentMembersQuery } from "../../../Redux/features/userInfo/withoutLoginApi";
import { UserCard } from "../Shared/userCard/UserCard";

export const FindAPartnerSuggested = () => {
    const { data, isSuccess, isLoading } = useGetRecentMembersQuery();

    return (
        <div className="mt-[30px] max-w-[950px] mx-auto">
            <div className="grid grid-cols-3 gap-[30px]">
                {isSuccess &&
                    data?.map(profile => {
                        return <UserCard key={profile._id} {...{ profile }} />;
                    })}
                {isLoading && <UserCard {...{ isLoading }} />}
            </div>
        </div>
    );
};
