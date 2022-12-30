// configuration
import React from "react";

// Third party packages
import { useGetRecentMembersQuery } from "../../../Redux/features/userInfo/withoutLoginApi";
import { ProfileCard } from "../../shared/Cards/Profile/ProfileCard";

const PartnerCard = () => {
    const { data, isSuccess } = useGetRecentMembersQuery();
    return (
        <>
            <div className="mt-[30px]">
                <div className="grid gap-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {isSuccess && data.map(profile => <ProfileCard key={profile._id} {...{ profile }} />)}
                </div>
            </div>
        </>
    );
};

export default PartnerCard;
