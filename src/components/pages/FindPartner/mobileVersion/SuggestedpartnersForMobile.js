// Configuration
import React, { useState } from "react";

// third party package
import { useSelector } from "react-redux";

// Components
import { useGetRecentMembersQuery } from "../../../../Redux/features/userInfo/withoutLoginApi";
import { AllPartnersCards } from "./AllPartnersCards";

export const SuggestedpartnersForMobile = () => {
  // hook variables
  const [page, setPage] = useState(1);
  const searchTerm = useSelector(
    (state) => state?.persistedReducer?.findPartnerSlice?.searchTerm
  );
  const { data, isLoading, error } = useGetRecentMembersQuery({
    searchTerm: searchTerm,
    page: page,
    role: "member",
    limit: 6,
  });

  return <AllPartnersCards {...{ data, isLoading, error, setPage }} />;
};
