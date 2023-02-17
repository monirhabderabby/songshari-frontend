// Configuration
import React, { useState } from "react";
import { useEffect } from "react";

// third party package
import { useSelector } from "react-redux";

// Components
import { AllPartnersCards } from "../../../../../components/pages/FindPartner/mobileVersion/AllPartnersCards";
import { FindLawyerKaziAgentHeader } from "../../../../../components/shared/Components/FindLawyerKaziAgent/FindLawyerKaziAgentHeader";
import { MobileBackButton } from "../../../../../components/shared/Components/MobileBackButton";
import { useGetRecentMembersQuery } from "../../../../../Redux/features/userInfo/withoutLoginApi";
import { BottomNav } from "../../BottomNav";

const SuggestedAgentForMobile = () => {
  // hook variables
  const [page, setPage] = useState(1);
  const searchTerm = useSelector(
    (state) => state?.persistedReducer?.findLawyerKaziAgent?.agent?.searchTerm
  );
  const { data, isLoading, error } = useGetRecentMembersQuery({
    searchTerm: searchTerm,
    page: page,
    role: "agent",
    limit: 6,
  });

  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <MobileBackButton name={"Find Agent"} />
      <div className="pt-2 px-6">
        <FindLawyerKaziAgentHeader page="agent" />
        <AllPartnersCards {...{ data, isLoading, error, setPage }} />
      </div>
      <div className="h-20"></div>
      <BottomNav />
    </div>
  );
};

export default SuggestedAgentForMobile;
