// Configuration
import React from "react";
import { useParams } from "react-router";

// Components
import CustomHeader from "../../../../shared/CustomHeader/CustomHeader";
import { getDateFromCreatedAt } from "../../../../../assets/utilities/GetDateFromCreatedAt/getDateFromCreatedAt";
import { useGetSuccessStoryByIdQuery } from "../../../../../Redux/features/SuccessStory/successStoryApi";
import { OvalLoader } from "../../../../shared/Cards/Loader/OvalLoader/OvalLoader";
import { ServerErrorMessage } from "../../../../ui/error/ServerErrorMessage";
import SingleSuccessStoryImages from "./SingleSuccessStoryImages/SingleSuccessStoryImages";

const SingleSuccessStoryDetailsPage = () => {
  const { id } = useParams();
  const {
    data: successStory,
    isLoading,
    error,
  } = useGetSuccessStoryByIdQuery(id);

  let content;
  if (isLoading) {
    content = (
      <div className="mt-20">
        <OvalLoader title={"Loading..."} />
      </div>
    );
  } else if (error) {
    content = (
      <div className="flex justify-center w-full mt-20">
        <ServerErrorMessage />
      </div>
    );
  } else if (!error && successStory?.success) {
    content = (
      <div className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
        <h1 className="text-4xl font-semibold font-Poppins text-center max-w-3xl mx-auto mt-8 capitalize">
          {successStory?.data?.header}
        </h1>
        <div>
          <p className="text-slate-500 font-Poppins text-center mt-2">
            Posted By:{" "}
            <span className="text-slate-600 font-medium">
              {(successStory?.data?.user?.firstName || "") +
                " " +
                (successStory?.data?.user?.lastName || "")}
            </span>{" "}
            On:{" "}
            <span className="text-slate-600 font-medium">
              {getDateFromCreatedAt(successStory?.data?.createdAt)}
            </span>
          </p>
        </div>
        <hr className="mt-4 mb-8" />
        <SingleSuccessStoryImages {...{ successStory }} />
        <h1 className="text-xl text-justify font-medium font-Poppins max-w-3xl mx-auto mt-8 mb-20">
          {successStory?.data?.body}
        </h1>
      </div>
    );
  }

  return (
    <div>
      <CustomHeader title={"Happy Story"} />
      <div>{content}</div>
    </div>
  );
};

export default SingleSuccessStoryDetailsPage;
