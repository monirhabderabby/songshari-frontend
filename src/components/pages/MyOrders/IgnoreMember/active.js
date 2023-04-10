import React from "react";
import { useGetRecentMembersWithAuthQuery } from "../../../../Redux/features/userInfo/withoutLoginApi";
import IgnoreCard from "./cards/IgnoreCard";

const Active = () => {
  const { data } = useGetRecentMembersWithAuthQuery({
    searchTerm: "",
    page: "",
    role: "member",
    limit: "",
  });

  console.log(data, "recentUsers");
  return (
    <div>
      {data?.data?.members?.map((item) => <IgnoreCard {...{item,useCase:"ignore"}} />)}
    </div>
  );
};

export default Active;
