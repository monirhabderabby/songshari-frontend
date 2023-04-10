import React from "react";

const MyStoryImagesCard = ({
  setSelectedImage,
  selectedImage,
  attachments,
}) => {
  return (
    <div className="flex justify-center gap-1 lg:gap-2">
      {attachments?.map((img) => (
        <img
          className={`${
            selectedImage === img?.url && "border-2 border-red-500"
          } w-12 md:w-20 lg:w-[96px] h-10 md:h-16 lg:h-[74px] rounded-md mb-3 lg:mb-6`}
          key={img?._id}
          src={img?.url}
          alt=""
          onClick={() => setSelectedImage(img?.url)}
        />
      ))}
    </div>
  );
};

export default MyStoryImagesCard;
