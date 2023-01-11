// configuration
import React from "react";

// components
import { useGetRecentMembersQuery } from "../../../../Redux/features/userInfo/withoutLoginApi";
import { AllPartnersCards } from "./AllPartnersCards";

export const TopPartnersForMobile = () => {
    const { data, isLoading, error } = useGetRecentMembersQuery();
    return <AllPartnersCards {...{ data, isLoading, error }} />;
};
