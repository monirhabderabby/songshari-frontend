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

const SuggestedKaziForMobile = ({role}) => {
  // hook variables
  const [page, setPage] = useState(1);
  const searchTerm = useSelector(
    (state) => state?.persistedReducer?.findLawyerKaziAgent?.kazi?.searchTerm
  );
  const { data, isLoading, error } = useGetRecentMembersQuery({
    searchTerm: searchTerm,
    page: page,
    role: "kazi",
    limit: 6,
  });

  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <MobileBackButton name={"Find Kazi"} />
      <div className="pt-2 px-6">
        <FindLawyerKaziAgentHeader page="kazi" />
        <AllPartnersCards {...{ data, isLoading, error, setPage,role }} />
      </div>
      <div className="h-20"></div>
      <BottomNav />
    </div>
  );
};

export default SuggestedKaziForMobile;
