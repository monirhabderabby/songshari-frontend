import React from "react";

// Third party packages
import { Pagination } from "@mui/material";

// Components
import SuccessStoryCard from "./SuccessStoryCard/SuccessStoryCard";
import { useGetAllSuccessStoryQuery } from "../../../../../Redux/features/SuccessStory/successStoryApi";
import { OvalLoader } from "../../../../shared/Cards/Loader/OvalLoader/OvalLoader";
import { ServerErrorMessage } from "../../../../ui/error/ServerErrorMessage";
import { useState } from "react";

const SuccessStoryGlobalPage = () => {
  const [page, setPage] = useState(1);
  const {
    data: successStory,
    isLoading,
    error,
  } = useGetAllSuccessStoryQuery({
    page: page,
    limit: 9,
  });

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
  } else if (!error && successStory?.data?.stories?.length === 0) {
    content = (
      <div className="mt-16">
        <p className="text-center text-xl font-Inter font-semibold">
          No Success Story Found!
        </p>
      </div>
    );
  } else if (!error && successStory?.data?.stories?.length > 0) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {successStory?.data?.stories?.map((story) => {
          return <SuccessStoryCard key={story?._id} {...{ story }} />;
        })}
      </div>
    );
  }
  return (
    <div className="">
      <div>{content}</div>

      {!error && (
        <div className="my-[100px] w-full flex justify-center">
          <Pagination
            count={Math.ceil(successStory?.data?.total / 9)}
            variant="outlined"
            color="secondary"
            onChange={(event, value) => setPage(value)}
          />
        </div>
      )}
    </div>
  );
};

export default SuccessStoryGlobalPage;
