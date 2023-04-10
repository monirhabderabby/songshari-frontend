import React from "react";

// Components
import SuccessStoryUserHeader from "./SuccessStoryUserHeader/SuccessStoryUserHeader";
import MySuccessStoryDetails from "./MySuccessStoryDetails/MySuccessStoryDetails";
import { useGetMySuccessStoryQuery } from "../../../../Redux/features/SuccessStory/successStoryApi";

const SuccessStoryUserContainer = () => {
  const { data: successStory, isLoading, error } = useGetMySuccessStoryQuery();
  return (
    <div>
      <SuccessStoryUserHeader {...{ successStory }} />
      <MySuccessStoryDetails {...{ successStory, isLoading, error }} />
    </div>
  );
};

export default SuccessStoryUserContainer;
