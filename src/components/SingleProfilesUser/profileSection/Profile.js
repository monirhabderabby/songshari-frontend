import React from "react";
import { Outlet } from "react-router";

export const Profile = ({ data, isLoading }) => {
  console.log(data);
  return (
    <div>
      <Outlet context={[data, isLoading]} />
    </div>
  );
};
