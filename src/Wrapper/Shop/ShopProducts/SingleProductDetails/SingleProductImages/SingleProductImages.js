import React, { useState } from "react";

// Components
import ProductImagesCard from "./ProductImagesCard";

const SingleProductImages = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = data.productImages;
  return (
    <div>
      <div className="flex gap-6">
        <div>
          <ProductImagesCard {...{ images, setSelectedImage, selectedImage }} />
        </div>
        <div>
          <img
            className="w-[547px] h-[494px] rounded-md"
            src={images[selectedImage]}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProductImages;
