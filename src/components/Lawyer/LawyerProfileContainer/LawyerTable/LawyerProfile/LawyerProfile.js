import React from "react";
import { Outlet } from "react-router";

const LawyerProfile = ({ data, isLoading }) => {
  return (
    <div>
      <Outlet context={[data, isLoading]} />
    </div>
  );
};

export default LawyerProfile;
