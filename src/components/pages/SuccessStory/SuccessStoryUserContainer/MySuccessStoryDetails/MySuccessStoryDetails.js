import React from "react";
import { OvalLoader } from "../../../../shared/Cards/Loader/OvalLoader/OvalLoader";
import { ServerErrorMessage } from "../../../../ui/error/ServerErrorMessage";
import MyStoryImages from "./MyStoryImages/MyStoryImages";

const MySuccessStoryDetails = ({ successStory, isLoading, error }) => {
  let content;
  if (isLoading) {
    content = <OvalLoader title={"Loading..."} />;
  } else if (error) {
    content = <ServerErrorMessage />;
  } else if (!error && successStory?.data?.stories?.length === 0) {
    content = (
      <div className="mt-16">
        <p className="text-center text-xl font-Inter font-semibold">
          You Have No Success Story!
        </p>
      </div>
    );
  } else if (!error && successStory?.data?.stories?.length > 0) {
    content = (
      <div className="p-4 border border-gray-200 rounded-md">
        <h1 className="text-3xl text-slate-600 mb-4 font-medium font-Inter">
          {successStory?.data?.stories[0]?.header}
        </h1>
        <MyStoryImages {...{ successStory }} />
        <p className="my-6 text-xl font-Poppins">
          {successStory?.data?.stories[0]?.body}
        </p>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default MySuccessStoryDetails;
