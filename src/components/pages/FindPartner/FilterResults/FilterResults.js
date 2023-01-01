// Configuration
import React, { useEffect } from "react";

// Third party packages
import { useSelector } from "react-redux";

// Components
import { useFindFilteredUserMutation } from "../../../../Redux/features/userInfo/userApi";

export const FilterResults = () => {
  // hook variable declareation
  const filterObject = useSelector(
    (state) => state?.persistedReducer?.filter?.filterObject
  );

  const [findFilteredUser, { data: filteredUser, isLoading, error }] =
    useFindFilteredUserMutation();
  console.log(filterObject);

  useEffect(() => {
    findFilteredUser(filterObject);
  }, [filterObject, findFilteredUser]);

  if (filteredUser) {
    console.log(filteredUser);
  }
  if (error) {
    console.log(error);
  }
  if (isLoading) {
    return "loading...";
  }
  return (
    <div>
      <p>Something done</p>
    </div>
  );
};
