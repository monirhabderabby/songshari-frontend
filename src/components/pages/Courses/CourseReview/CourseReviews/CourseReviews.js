import React from "react";
import { useParams } from "react-router";
import { useGetAllReviewsByCourseIDQuery } from "../../../../../Redux/features/Course/courseApi";
import { LineWaveLoader } from "../../../../shared/Cards/Loader/lineWaveLoader/LineWaveLoader";
import { ServerErrorMessage } from "../../../../ui/error/ServerErrorMessage";
import { CourseCard } from "./CourseCard";

export const CourseReviews = () => {
  const { id } = useParams();
  const { isLoading, data, isError } = useGetAllReviewsByCourseIDQuery(id);

  const { reviews } = data || {};

  let content;
  if (isLoading) {
    content = (
      <div className="h-[250px] w-full flex justify-center items-center">
        <LineWaveLoader />
      </div>
    );
  } else if (!isLoading && isError) {
    content = (
      <div className="h-[250px] w-full flex justify-center items-center">
        <ServerErrorMessage />
      </div>
    );
  } else if (!isLoading && reviews?.length === 0) {
    content = (
      <div className="h-[200px] w-full flex justify-center items-center text-[18px] font-Nunito text-gray-500">
        No Reviews Found!
      </div>
    );
  } else if (!isLoading && reviews?.length > 0) {
    content = (
      <div className="w-full flex flex-col gap-y-[30px]">
        {reviews?.map((item) => {
          return <CourseCard key={item?._id} review={item} />;
        })}
      </div>
    );
  }

  return (
    <div className="my-[30px] lg:my-[50px]">
      <h2 className="text-[32px] text-gray-700 font-semibold mb-[20px] border-b-2">
        Reviews ({reviews?.length})
      </h2>
      {content}
    </div>
  );
};
