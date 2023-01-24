import React from "react";

const ProductImagesCard = ({ images, setSelectedImage, selectedImage }) => {
  return (
    <div>
      {images.map((img, i) => (
        <img
          className={`${
            selectedImage === i && "border-2 border-[#18181B]"
          } w-[127px] h-[84px] rounded-md mb-6`}
          key={i}
          src={img}
          alt=""
          onClick={() => setSelectedImage(i)}
        />
      ))}
    </div>
  );
};

export default ProductImagesCard;
