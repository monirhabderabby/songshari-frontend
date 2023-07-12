// configuration
import React from "react";
import { useParams } from "react-router";

// components
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";
import { useGetProfileDetailsQuery } from "../../../../Redux/features/userInfo/userApi";
import { BottomNav } from "../BottomNav";

export const GalleryContainerForMobile = () => {
  // hook variable declaration
  const { id } = useParams();
  const { data, isLoading, error } = useGetProfileDetailsQuery(id);

  // js variable declaration
  const photos = data?.photos;

  let content;
  if (isLoading) {
    content = <div className="mt-[20%] flex justify-center">Loading...</div>;
  } else if (!isLoading && error) {
    content = (
      <div className="mt-[20%] flex justify-center">Something went wrong!</div>
    );
  } else if (!isLoading && photos?.length === 0) {
    content = (
      <div className="mt-[20%] flex justify-center">No Photos found!</div>
    );
  } else if (!isLoading && photos?.length > 0) {
    content = (
      <div className="w-full grid grid-cols-2 gap-2">
        {photos.map((photo, index) => {
          return (
            <img
              key={index}
              src={photo}
              alt="userPhotos"
              className={`rounded-[15px] ${
                index === 0 && "col-span-2 row-span-2 h-full"
              }`}
            />
          );
        })}
      </div>
    );
  }
  return (
    <section className="w-full max-w-[767px] mx-auto">
      <MobileBackButton name="Gallery" />
      <div className="block lg:hidden w-full px-[26px] bg-[#F8F8FF] overflow-hidden">
        <p className="text-[24px] text-[#333333] font-semibold font-fira pt-[21px] mb-[16px]">
          All Photos
        </p>
        {content}
        <div className="h-20"></div>
        <BottomNav />
      </div>
    </section>
  );
};
