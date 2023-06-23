import React from "react";
import VarientAnimation from "../../../../../../assets/utilities/Animation/VarientAnimation";

const SingleSuccessStoryImagesCard = ({ setSelectedImage, selectedImage, attachments }) => {
    return (
        <div className="flex justify-center gap-2">
            {attachments?.map((img, i) => (
                <VarientAnimation direction="up" delay={0.3}>
                    <img
                        className={`${selectedImage === img?.url && "border-2 border-red-500"} w-[96px] h-[74px] rounded-md mb-6`}
                        key={img?._id}
                        src={img?.url}
                        alt=""
                        onClick={() => setSelectedImage(img?.url)}
                    />
                </VarientAnimation>
            ))}
        </div>
    );
};

export default SingleSuccessStoryImagesCard;
