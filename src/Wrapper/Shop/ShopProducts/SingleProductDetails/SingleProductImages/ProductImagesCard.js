import React from "react";

const ProductImagesCard = ({ images, setSelectedImage, selectedImage, photos }) => {
    return (
        <div>
            {photos.map(img => (
                <img
                    className={`${selectedImage === img?.url && "border-2 border-[#18181B]"} w-[127px] h-[84px] rounded-md mb-6`}
                    key={img?._id}
                    src={img?.url}
                    alt="productImage"
                    onClick={() => setSelectedImage(img?.url)}
                />
            ))}
        </div>
    );
};

export default ProductImagesCard;
