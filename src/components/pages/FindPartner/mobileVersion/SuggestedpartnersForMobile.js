import React from "react";
import { useGetRecentMembersQuery } from "../../../../Redux/features/userInfo/withoutLoginApi";
import { AllPartnersCards } from "./AllPartnersCards";

export const SuggestedpartnersForMobile = () => {
    const { data, isLoading, error } = useGetRecentMembersQuery();
    return <AllPartnersCards {...{ data, isLoading, error }} />;
};
