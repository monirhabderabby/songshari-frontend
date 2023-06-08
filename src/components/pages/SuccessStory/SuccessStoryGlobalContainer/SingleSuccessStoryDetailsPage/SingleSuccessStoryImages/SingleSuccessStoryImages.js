import React, { useState } from "react";

// Components
import SingleSuccessStoryImagesCard from "./SingleSuccessStoryImagesCard";

const SingleSuccessStoryImages = ({ successStory }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const { attachments } = successStory?.data || {};
  return (
    <div className="flex justify-center items-center">
      <div>
        <div>
          <img
            className="w-[847px] h-[294px] md:h-[444px] lg:h-[594px] rounded-md border border-gray-100 mb-2"
            src={
              selectedImage
                ? selectedImage
                : attachments?.length > 0
                ? attachments[0]?.url
                : "https://img.freepik.com/free-vector/doodle-lettering-happy-vectorcalligraphy_53876-172731.jpg?w=740&t=st=1681114987~exp=1681115587~hmac=36a2d7204b8b8c45cd417fa8a2ef8c1f070cf5aa3804cb3763c5c96ab34856a1"
            }
            alt=""
          />
        </div>
        <div>
          <SingleSuccessStoryImagesCard
            {...{ setSelectedImage, selectedImage, attachments }}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleSuccessStoryImages;
