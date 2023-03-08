import React, { useEffect, useState } from "react";

// Components
import ProductImagesCard from "./ProductImagesCard";

const SingleProductImages = ({ data, product }) => {
    const [selectedImage, setSelectedImage] = useState("");
    const { photos } = product || {};

    useEffect(() => {
        setSelectedImage(photos[0]?.url);
    }, [photos]);
    const images = data.productImages;
    return (
        <div>
            <div className="flex gap-6">
                <div>
                    <ProductImagesCard {...{ images, setSelectedImage, selectedImage, photos }} />
                </div>
                <div>
                    <img className="w-[547px] h-[494px] rounded-md" src={selectedImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SingleProductImages;
