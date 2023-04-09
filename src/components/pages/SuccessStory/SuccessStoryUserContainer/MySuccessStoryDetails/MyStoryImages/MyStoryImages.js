import React, { useState } from "react";

// Components
import MyStoryImagesCard from "./MyStoryImagesCard/MyStoryImagesCard";

const MyStoryImages = ({ successStory }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const { attachments } = successStory?.data?.stories[0] || {};

  return (
    <div className="flex justify-center items-center">
      <div>
        <div>
          <img
            className="w-[647px] h-[494px] rounded-md border border-gray-100 mb-2"
            src={
              selectedImage
                ? selectedImage
                : attachments
                ? attachments[0]?.url
                : ""
            }
            alt=""
          />
        </div>
        <div>
          <MyStoryImagesCard
            {...{ setSelectedImage, selectedImage, attachments }}
          />
        </div>
      </div>
    </div>
  );
};

export default MyStoryImages;
