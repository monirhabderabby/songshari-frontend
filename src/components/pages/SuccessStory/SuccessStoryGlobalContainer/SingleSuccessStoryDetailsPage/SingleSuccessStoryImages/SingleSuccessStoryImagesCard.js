import React from "react";

const SingleSuccessStoryImagesCard = ({
  setSelectedImage,
  selectedImage,
  attachments,
}) => {
  return (
    <div className="flex justify-center gap-2">
      {attachments?.map((img) => (
        <img
          className={`${
            selectedImage === img?.url && "border-2 border-red-500"
          } w-[96px] h-[74px] rounded-md mb-6`}
          key={img?._id}
          src={img?.url}
          alt=""
          onClick={() => setSelectedImage(img?.url)}
        />
      ))}
    </div>
  );
};

export default SingleSuccessStoryImagesCard;
